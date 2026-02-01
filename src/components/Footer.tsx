'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-orange">{t('companyName')}</h3>
            <p className="text-gray-400">
              Import & Export of Mother and Baby Products
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 text-accent-orange">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-cam-blue hover:scale-110 transition-all duration-200">
                  <Facebook size={24} />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-naka-pink hover:scale-110 transition-all duration-200">
                  <Instagram size={24} />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent-yellow hover:scale-110 transition-all duration-200">
                  <Twitter size={24} />
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent-orange hover:scale-110 transition-all duration-200">
                  <Youtube size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cam-blue dark:text-accent-orange">{t('contact')}</h3>
            <p className="text-gray-300">
              <strong>{t('address')}:</strong> No.F36, Street Duong Ngeab, Kouk Chambak Village, Chomchao 1 Commune, Porsenchey District, Phnom Penh City, Cambodia<br />
              <strong>{t('phone')}:</strong> 077 68 12 12 / 081 55 10 20<br />
              <strong>{t('email')}:</strong> nakacam3@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-orange">{t('quickLinks')}</h3>
            <ul className="text-gray-300 space-y-2">
              <li><Link href="/" className="hover:text-accent-orange transition-colors">{t('home')}</Link></li>
              <li><Link href="/about" className="hover:text-accent-orange transition-colors">{t('about')}</Link></li>
              <li><Link href="/products" className="hover:text-accent-orange transition-colors">{t('products')}</Link></li>
              <li><Link href="/contact" className="hover:text-accent-orange transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            {t('footerText')}
          </p>
        </div>
      </div>
    </footer>
  );
}