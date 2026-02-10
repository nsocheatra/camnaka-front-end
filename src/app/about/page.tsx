'use client';

import { useLanguage } from "../../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 bg-background page-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-foreground mb-16 drop-shadow-sm">{t("About")} {t('companyName')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-2xl bg-card text-card-foreground p-6 shadow-smhover:shadow-lg transition-shadow border-t-4 border-primary hover:scale-105  duration-300">
            <h2 className="text-2xl font-semibold text-foreground mb-4">{t('ourHistory')}</h2>
            <p className="text-foreground/80 mb-6">
              {t('historyText')}
            </p>
          </div>
          <div className="rounded-2xl bg-card text-card-foreground p-6 shadow-smhover:shadow-lg transition-shadow border-t-4 border-primary c">
            <h2 className="text-2xl font-semibold mb-4">{t('ceoMessageTitle')}</h2>
            <p className="text-card-foreground/80 mb-6">
              {t('ceoMessageText')}
            </p>
            <div>
              <p className="text-card-foreground font-semibold">{t('ceoName')}</p>
              <p className="text-card-foreground/60 text-sm">{t('ceoTitle')}</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">{t('visionMissionTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow border-t-4 border-primary hover:scale-105  duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('ourVision')}</h3>
              <p className="text-foreground/80">{t('visionText')}</p>
            </div>
            <div className="p-6 rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow border-t-4 border-primary hover:scale-105  duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t('ourMission')}</h3>
              <p className="text-foreground/80">{t('missionText')}</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">{t('ourValues')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow border-t-4 border-primary hover:scale-105  duration-300">
              <h3 className="text-xl font-medium text-foreground mb-4">{t('quality')}</h3>
              <p className="text-foreground/80">{t('qualityDesc')}</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow border-t-4 border-accent hover:scale-105  duration-300">
              <h3 className="text-xl font-medium text-foreground mb-4">{t('integrity')}</h3>
              <p className="text-foreground/80">{t('integrityDesc')}</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow border-t-4 border-primary hover:scale-105  duration-300">
              <h3 className="text-xl font-medium text-foreground mb-4">{t('customerFocus')}</h3>
              <p className="text-foreground/80">{t('customerFocusDesc')}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}