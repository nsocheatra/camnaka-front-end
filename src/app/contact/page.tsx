'use client';

import { useState } from 'react';
import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "../../components/ui/button";

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to server
    alert(`${t('send')} ${name}! ${t('message')} ${t('send').toLowerCase()}.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-foreground mb-16 drop-shadow-sm">{t('contact')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-card text-card-foreground p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-6 border-b-2 border-primary pb-3">{t('getInTouch')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground">{t('address')}</h3>
                <p className="text-foreground/80">
                  No.F36, Street Duong Ngeab, Kouk Chambak Village,<br />
                  Chomchao 1 Commune, Porsenchey District,<br />
                  Phnom Penh City, Cambodia
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">{t('phone')}</h3>
                <p className="text-foreground/80">077 68 12 12 / 081 55 10 20</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">{t('email')}</h3>
                <p className="text-foreground/80">nakacam3@gmail.com</p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-foreground mb-4">{t('ourLocation')}</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.764!2d104.888!3d11.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d4d%3A0x2c297d1d396db4b!2sChom%20Chao%2C%20Cambodia!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card text-card-foreground p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-6 border-b-2 border-accent pb-3">{t('sendMessage')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border-2 border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-foreground/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border-2 border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-foreground/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border-2 border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-foreground/50"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                {t('send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}