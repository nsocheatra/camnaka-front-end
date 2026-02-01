'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-cam-blue dark:bg-dark-text shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <div className="shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-white dark:text-light-bg">
                {t('companyName')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex space-x-8">
              <Link href="/" className="border-transparent text-white/80 dark:text-gray-300 hover:border-accent-orange hover:text-white dark:hover:text-accent-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                {t('home')}
              </Link>
              <Link href="/about" className="border-transparent text-white/80 dark:text-gray-300 hover:border-accent-orange hover:text-white dark:hover:text-accent-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                {t('about')}
              </Link>
              <Link href="/products" className="border-transparent text-white/80 dark:text-gray-300 hover:border-accent-orange hover:text-white dark:hover:text-accent-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                {t('products')}
              </Link>
              <Link href="/contact" className="border-transparent text-white/80 dark:text-gray-300 hover:border-accent-orange hover:text-white dark:hover:text-accent-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                {t('contact')}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'kh' : 'en')}
              className="text-white/80 dark:text-gray-300 hover:text-accent-orange dark:hover:text-accent-orange px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-2"
            >
              <Languages size={16} aria-hidden="true" />
              <span aria-hidden="true">{language === 'en' ? '🇰🇭' : '🇺🇸'}</span>
              <span className="sr-only">{language === 'en' ? 'Switch to Khmer' : 'Switch to English'}</span>
              {language === 'en' ? 'KH' : 'EN'}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-white/80 dark:text-gray-300 hover:text-accent-orange dark:hover:text-accent-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}