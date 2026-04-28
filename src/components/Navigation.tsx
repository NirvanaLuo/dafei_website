'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '课程体系', href: '#courses' },
  { label: '师资团队', href: '#teachers' },
  { label: '学员见证', href: '#testimonials' },
  { label: '关于我们', href: '#about' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // PC端逻辑：滚动超过50px显示导航
      if (window.innerWidth >= 768) {
        setIsScrolled(currentScrollY > 50);
      } else {
        // 移动端逻辑：
        // 1. 默认隐藏（scrollY < 100）
        // 2. 下拉（scrollY > lastScrollY）时显示
        // 3. 上拉且不是顶部时隐藏
        if (currentScrollY < 100) {
          // 顶部区域：隐藏
          setIsMobileNavVisible(false);
        } else if (currentScrollY > lastScrollY.current) {
          // 下拉：显示
          setIsMobileNavVisible(true);
        } else {
          // 上拉：隐藏
          setIsMobileNavVisible(false);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  const showNav = isDesktop ? isScrolled : isMobileNavVisible;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showNav
            ? 'bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg translate-y-0'
            : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white" style={{ fontFamily: 'serif' }}>
                大飞书法
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:400-888-8888"
                className="hidden lg:flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">咨询热线</span>
              </a>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#c23a3a] hover:bg-[#a83232] text-white px-5 py-2.5 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
              >
                免费试听
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="菜单"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a2e] border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-white/90 hover:text-white py-2 text-base"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-[#c23a3a] text-white py-3 rounded-lg font-medium mt-4"
              >
                免费试听
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
