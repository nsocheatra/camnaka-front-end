'use client';

import { useLanguage } from "../../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-foreground dark:text-accent-orange mb-16 drop-shadow-sm">{t('about')} {t('companyName')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">{t('ourHistory')}</h2>
            <p className="text-foreground/80 dark:text-gray-300 mb-6">
              {t('historyText')}
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-6 shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">{t('ceoMessageTitle')}</h2>
            <p className="text-foreground/80 dark:text-gray-300 mb-6">
              {t('ceoMessageText')}
            </p>
            <div>
              <p className="text-foreground dark:text-accent-orange font-semibold">{t('ceoName')}</p>
              <p className="text-foreground/60 dark:text-gray-400 text-sm">{t('ceoTitle')}</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground dark:text-accent-orange mb-8 text-center">{t('visionMissionTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-cam-blue dark:border-accent-orange">
              <h3 className="text-xl font-semibold text-foreground dark:text-accent-orange mb-4">{t('ourVision')}</h3>
              <p className="text-foreground/80 dark:text-gray-300">{t('visionText')}</p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-naka-pink dark:border-accent-yellow">
              <h3 className="text-xl font-semibold text-foreground dark:text-accent-yellow mb-4">{t('ourMission')}</h3>
              <p className="text-foreground/80 dark:text-gray-300">{t('missionText')}</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground dark:text-accent-orange mb-8 text-center">{t('ourValues')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-cam-blue dark:border-accent-orange">
              <h3 className="text-xl font-medium text-foreground dark:text-accent-orange mb-4">{t('quality')}</h3>
              <p className="text-foreground/80 dark:text-gray-300">{t('qualityDesc')}</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-naka-pink dark:border-accent-yellow">
              <h3 className="text-xl font-medium text-foreground dark:text-accent-yellow mb-4">{t('integrity')}</h3>
              <p className="text-foreground/80 dark:text-gray-300">{t('integrityDesc')}</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-accent-orange dark:border-naka-pink">
              <h3 className="text-xl font-medium text-foreground dark:text-naka-pink mb-4">{t('customerFocus')}</h3>
              <p className="text-foreground/80 dark:text-gray-300">{t('customerFocusDesc')}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}