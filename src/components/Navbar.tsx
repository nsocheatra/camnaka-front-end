'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg dark:bg-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center">
            <div className="shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-primary-foreground">
                {t('companyName')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex space-x-8">
              <Link href="/" className="border-transparent text-primary-foreground/80 hover:border-accent hover:text-primary-foreground inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                {t('home')}
              </Link>
              <Link href="/about" className="border-transparent text-primary-foreground/80 hover:border-accent hover:text-primary-foreground inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                {t('about')}
              </Link>
              <Link href="/products" className="border-transparent text-primary-foreground/80 hover:border-accent hover:text-primary-foreground inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                {t('products')}
              </Link>
              <Link href="/contact" className="border-transparent text-primary-foreground/80 hover:border-accent hover:text-primary-foreground inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                {t('contact')}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'kh' : 'en')}
              className="text-primary-foreground/80 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-2"
            >
              <span aria-hidden="true">{language === 'en' ? '🇰🇭' : '🇺🇸'}</span>
              <span className="sr-only">{language === 'en' ? 'Switch to Khmer' : 'Switch to English'}</span>
              {language === 'en' ? 'KHMER' : 'ENGLISH'}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-primary-foreground/80 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden text-primary-foreground/90 hover:text-accent p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="sm:hidden border-t border-primary-foreground/20">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block text-primary-foreground/90 hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              href="/about"
              className="block text-primary-foreground/90 hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              href="/products"
              className="block text-primary-foreground/90 hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t('products')}
            </Link>
            <Link
              href="/contact"
              className="block text-primary-foreground/90 hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}