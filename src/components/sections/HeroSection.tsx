'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const stats = [
  { value: 13, suffix: '年', label: '教学沉淀' },
  { value: 50, suffix: '万+', label: '家庭信赖' },
  { value: 98, suffix: '%', label: '满意度' },
  { value: 95, suffix: '%', label: '学员进步率' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.querySelector('#pain-points');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#1a1a2e] overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#1a5d4c] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c23a3a] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full"></div>
      </div>

      {/* Ink Brush Strokes SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-20"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="inkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a5d4c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c23a3a" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Decorative brush strokes */}
        <path
          d="M100,200 Q400,100 700,250 T1300,150"
          stroke="url(#inkGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M50,600 Q300,500 600,650 T1350,550"
          stroke="url(#inkGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="1200" cy="200" r="80" fill="#1a5d4c" opacity="0.1" />
        <circle cx="200" cy="700" r="120" fill="#c23a3a" opacity="0.1" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div className="mb-4 sm:mb-6">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-3 sm:mb-4"
            style={{ fontFamily: 'serif', letterSpacing: '0.1em' }}
          >
            大飞书法
          </h1>
          <div className="h-1 w-24 bg-[#c23a3a] mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
            正姿养习惯，轻松守卷面
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#c23a3a]">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm md:text-base text-white/70 mt-1 sm:mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-[#c23a3a] hover:bg-[#a83232] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-medium sm:font-semibold text-base sm:text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#c23a3a]/20"
          >
            立即预约体验课
          </button>
          <button
            onClick={() => {
              const element = document.querySelector('#courses');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto border-2 border-white/30 hover:border-white/60 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-medium sm:font-semibold text-base sm:text-lg transition-all hover:bg-white/10"
          >
            了解课程体系
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/50 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>专业师资认证</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>科学分龄教学</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>线上线下同步</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="向下滚动"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
