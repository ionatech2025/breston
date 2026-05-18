'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const carouselImages = [
  { src: "/images/Gas cylinders.png", label: "Gas Cylinders" },
  { src: "/images/Oxy-acetelyene set.png", label: "Oxy-Acetylene Sets" },
  { src: "/images/Truck transporting cylinders.png", label: "Logistics & Delivery" },
  { src: "/images/Oxygen cylinders.png", label: "Oxygen Cylinders" },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "99.9%", label: "Purity Standards" },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    if (index === currentImage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(index);
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % carouselImages.length);
        setIsTransitioning(false);
      }, 400);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-root {
          font-family: 'DM Sans', sans-serif;
          background-color: #16171f; /* Near-black background for sleek look */
          color: #e8e4dc;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .hero-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(26, 184, 122, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 184, 122, 0.05) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-glow {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 60%;
          height: 70%;
          background: radial-gradient(ellipse at center, rgba(26, 184, 122, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          min-height: 100vh;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding: 6rem 1.5rem 4rem;
            gap: 3rem;
          }
        }

        /* LEFT COLUMN */
        .hero-left {
          padding: 8rem 4rem 8rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .hero-left { padding: 0; }
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2rem;
        }

        .hero-eyebrow-line {
          width: 32px;
          height: 1px;
          background: #1ab87a; /* Primary green/teal */
          flex-shrink: 0;
        }

        .hero-eyebrow-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1ab87a;
        }

        .hero-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 300;
          line-height: 1.05;
          color: #f0ece2;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
        }

        .hero-headline em {
          font-style: italic;
          color: #1ab87a; /* Highlight in primary green/teal */
        }

        .hero-subheadline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 300;
          color: #6a7870;
          line-height: 1.3;
          margin: 0 0 2rem;
        }

        .hero-divider {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, #1ab87a, transparent); /* Accent in primary green/teal */
          margin: 0 0 2rem;
        }

        .hero-body {
          font-size: 15px;
          line-height: 1.8;
          color: #8a8278;
          max-width: 420px;
          margin: 0 0 3rem;
          font-weight: 300;
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        /* PRIMARY BUTTON */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1ab87a; /* Primary green/teal */
          color: #fff; /* White text for contrast */
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 14px 28px;
          text-decoration: none;
          border-radius: 4px;
          transition: background 0.2s, transform 0.2s;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.1);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .btn-primary:hover::after { opacity: 1; }
        .btn-primary:hover { transform: translateY(-1px); }

        .btn-primary svg {
          width: 14px;
          height: 14px;
          transition: transform 0.2s;
        }

        .btn-primary:hover svg { transform: translateX(3px); }

        /* SECONDARY BUTTON (text link) */
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #2078a8; /* Secondary teal */
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
          border-bottom: 1px solid rgba(32, 120, 168, 0.3);
          padding-bottom: 2px;
        }

        .btn-secondary:hover { color: #1ab87a; border-color: #1ab87a; }

        .hero-stats {
          display: flex;
          gap: 2.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(26, 184, 122, 0.15);
        }

        .stat-item {}

        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: #1ab87a; /* Primary green/teal for emphasis */
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #4a5e52;
          font-weight: 500;
        }

        /* RIGHT COLUMN */
        .hero-right {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .hero-right {
            height: 60vw;
            min-height: 300px;
            max-height: 520px;
          }
        }

        .image-frame {
          position: relative;
          width: 100%;
          height: 75vh;
          max-height: 680px;
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .image-frame { height: 100%; }
        }

        .image-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(13,13,15,0.4) 0%,
            transparent 30%,
            transparent 60%,
            rgba(13,13,15,0.6) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        .image-frame::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 80px;
          background: linear-gradient(to right, #0a120e, transparent);
          z-index: 2;
          pointer-events: none;
        }

        .slide-image {
          position: absolute;
          inset: 0;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-image.active {
          opacity: 1;
          transform: scale(1);
        }

        .slide-image.inactive {
          opacity: 0;
          transform: scale(1.04);
        }

        /* Corner brackets */
        .frame-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          z-index: 3;
          pointer-events: none;
        }
        .frame-corner-tl { top: 16px; left: 16px; border-top: 1px solid #1ab87a; border-left: 1px solid #1ab87a; }
        .frame-corner-tr { top: 16px; right: 16px; border-top: 1px solid #1ab87a; border-right: 1px solid #1ab87a; }
        .frame-corner-bl { bottom: 16px; left: 16px; border-bottom: 1px solid #1ab87a; border-left: 1px solid #1ab87a; }
        .frame-corner-br { bottom: 16px; right: 16px; border-bottom: 1px solid #1ab87a; border-right: 1px solid #1ab87a; }

        /* Caption */
        .slide-caption {
          position: absolute;
          bottom: 28px;
          right: 28px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .slide-caption-text {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(26, 184, 122, 0.7);
          font-weight: 500;
        }

        /* Navigation dots */
        .slide-nav {
          position: absolute;
          bottom: 28px;
          left: 28px;
          z-index: 4;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .slide-dot {
          width: 1px;
          background: rgba(26, 184, 122, 0.25);
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          padding: 0;
        }

        .slide-dot.active {
          background: #1ab87a;
          height: 32px !important;
        }

        .slide-dot:not(.active) { height: 12px; }
        .slide-dot:not(.active):hover { background: rgba(26, 184, 122, 0.5); }

        /* Vertical label on right */
        .hero-vertical-label {
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #3a3830;
          font-weight: 500;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .hero-vertical-label { display: none; }
        }

        /* Scroll cue */
        .scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
        }

        .scroll-indicator-text {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3a3830;
          font-weight: 500;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, #c8a050, transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }

        .hero-number {
          position: absolute;
          top: 8rem;
          right: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 7rem;
          font-weight: 300;
          color: rgba(200, 160, 80, 0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
      `}</style>

      <section className="hero-root" aria-label="Breston Technologies Hero">
        <div className="hero-noise" />
        <div className="hero-grid-lines" />
        <div className="hero-glow" />

        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">Certified Gas Solutions</span>
            </div>

            <h1 className="hero-headline">
              Empowering<br />
              <em>Healthcare</em><br />
              & Industry
            </h1>
            <p className="hero-subheadline">with Reliable Gas Solutions</p>

            <div className="hero-divider" />

            <p className="hero-body">
              Breston Technologies Limited provides safe, reliable, and high-quality medical and industrial gas products, accessories, and engineering solutions tailored to your needs.
            </p>

            <div className="hero-cta-row">
              <Link href="/contact" className="btn-primary">
                Request a Quote
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link href="/products" className="btn-secondary">
                View Products
              </Link>
            </div>

            <div className="hero-stats">
              {stats.map((s) => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="image-frame">
              {/* Corner accents */}
              <span className="frame-corner frame-corner-tl" />
              <span className="frame-corner frame-corner-tr" />
              <span className="frame-corner frame-corner-bl" />
              <span className="frame-corner frame-corner-br" />

              {/* Images */}
              {carouselImages.map((img, index) => (
                <div
                  key={img.src}
                  className={`slide-image ${index === currentImage && !isTransitioning ? 'active' : 'inactive'}`}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Caption */}
              <div className="slide-caption">
                <span className="slide-caption-text">{carouselImages[currentImage].label}</span>
              </div>

              {/* Nav dots */}
              <nav className="slide-nav" aria-label="Slide navigation">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`slide-dot ${index === currentImage ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}: ${carouselImages[index].label}`}
                    aria-current={index === currentImage ? 'true' : undefined}
                  />
                ))}
              </nav>
            </div>

            <span className="hero-vertical-label">Breston Technologies Ltd</span>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="scroll-indicator" aria-hidden="true">
          <span className="scroll-indicator-text">Scroll</span>
          <span className="scroll-line" />
        </div>

        {/* Decorative large number */}
        <span className="hero-number" aria-hidden="true">01</span>
      </section>
    </>
  );
}