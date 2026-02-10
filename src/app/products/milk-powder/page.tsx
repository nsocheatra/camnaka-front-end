'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";

export default function MilkPowderPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 bg-background page-animate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary/80 mb-3">{t('ourProducts')}</p>
            <h1 className="text-4xl font-bold text-foreground mb-4">{t('milkPowder')}</h1>
            <p className="text-lg text-foreground/80 mb-6">{t('milkPowderDesc')}</p>
            <div className="rounded-2xl border border-border bg-card p-5 text-foreground/80 mb-6">
              <p>{t('productsIntro')}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                {t('contact')}
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-foreground/80 hover:text-foreground hover:border-primary/50 transition-colors"
              >
                {t('backToProducts')}
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
            <Image
              src="images/milkPowder.png"
              alt={t('milkPowder')}
              width={640}
              height={480}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
