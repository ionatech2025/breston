'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CylinderWarning() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Trigger smooth slide/fade-in animation slightly after mount
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Wait for transition before unmounting
        setTimeout(() => {
            setIsDismissed(true);
        }, 300);
    };

    if (isDismissed) return null;

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 max-w-sm md:max-w-md bg-white rounded-2xl border border-gray-200/80 shadow-lg p-5 transition-all duration-500 ease-out transform ${
                isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
            }`}
        >
            <div className="flex items-start gap-3">
                {/* Warning Icon (Matching screenshot styling: yellow fill, dark border, black exclamation mark) */}
                <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path 
                            d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" 
                            fill="#f59e0b" 
                            stroke="#5c3d03" 
                            strokeWidth="2"
                        />
                        <line x1="12" y1="9" x2="12" y2="13" stroke="#000000" strokeWidth="2.5" />
                        <line x1="12" y1="17" x2="12.01" y2="17" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h4 className="text-[15px] font-semibold text-gray-700 leading-none">
                        Warning
                    </h4>
                    <p className="mt-2 text-sm text-gray-500 italic font-medium leading-relaxed">
                        Actual volume in the cylinder may fluctuate based on several conditions, such as temperature and pressure.
                    </p>
                </div>

                {/* Subtle Close Button */}
                <button
                    onClick={handleClose}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 -mt-1 -mr-1 rounded-full hover:bg-gray-50"
                    aria-label="Close warning"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    );
}
