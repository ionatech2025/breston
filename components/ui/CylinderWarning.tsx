'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CylinderWarning() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        // Trigger smooth slide/fade-in animation slightly after mount
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    // Custom SVG Warning Icon matching your screenshot: yellow fill, dark border, black exclamation mark
    const WarningIcon = (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path 
                d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" 
                fill="#f59e0b" 
                stroke="#5c3d03" 
                strokeWidth="2"
            />
            <line x1="12" y1="9" x2="12" y2="13" stroke="#000000" strokeWidth="2.5" />
            <line x1="12" y1="17" x2="12.01" y2="17" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Detailed Expanded Card */}
            <div
                className={`absolute bottom-0 right-0 w-[calc(100vw-3rem)] max-w-sm md:max-w-[24rem] bg-white rounded-2xl border border-gray-200/80 shadow-xl p-5 transition-all duration-300 ease-out origin-bottom-right transform ${
                    isExpanded
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
                }`}
            >
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                        {WarningIcon}
                    </div>

                    <div className="flex-1">
                        <h4 className="text-[15px] font-semibold text-gray-700 leading-none">
                            Warning
                        </h4>
                        <p className="mt-2 text-sm text-gray-500 italic font-medium leading-relaxed">
                            Actual volume in the cylinder may fluctuate based on several conditions, such as temperature and pressure.
                        </p>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsExpanded(false);
                        }}
                        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 -mt-1 -mr-1 rounded-full hover:bg-gray-50"
                        aria-label="Collapse warning"
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            {/* Small Collapsed Card/Pill */}
            <button
                onClick={() => setIsExpanded(true)}
                className={`flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200/80 shadow-md rounded-full px-4 py-2.5 transition-all duration-300 ease-out origin-bottom-right transform hover:shadow-lg hover:border-amber-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer ${
                    isExpanded
                        ? 'opacity-0 scale-75 translate-y-4 pointer-events-none'
                        : 'opacity-100 scale-100 translate-y-0'
                }`}
            >
                {WarningIcon}
                <span className="text-[14px] font-semibold text-gray-700 select-none">Warning</span>
            </button>
        </div>
    );
}

