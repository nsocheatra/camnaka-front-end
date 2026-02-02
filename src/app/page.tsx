'use client';

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const slides = useMemo(
    () => [
      {
        src: "https://via.placeholder.com/1200x500?text=Mother+%26+Baby+Products",
        alt: "Mother and Baby Products",
        caption: t("products"),
      },
      {
        src: "https://via.placeholder.com/1200x500?text=Baby+Clothes",
        alt: "Baby Clothes",
        caption: t("products"),
      },
      {
        src: "https://via.placeholder.com/1200x500?text=Baby+Toys",
        alt: "Baby Toys",
        caption: t("products"),
      },
    ],
    [t]
  );
  const featuredCategories = useMemo(
    () => [
      {
        nameKey: "babyClothing",
        descKey: "babyClothingDesc",
        image: "https://via.placeholder.com/300x200?text=Baby+Clothing",
      },
      {
        nameKey: "diapersWipes",
        descKey: "diapersWipesDesc",
        image: "https://via.placeholder.com/300x200?text=Diapers",
      },
      {
        nameKey: "strollers",
        descKey: "strollersDesc",
        image: "https://via.placeholder.com/300x200?text=Strollers",
      },
    ],
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary dark:bg-accent-foreground py-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
              {t('companyName')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 drop-shadow">
              {t('tagline')}
            </p>
            <div className="relative mt-12">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {slides.map((slide) => (
                    <div key={slide.src} className="min-w-full">
                      <div className="relative h-70 sm:h-90 md:h-105">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className="object-cover"
                          priority
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 text-left">
                          <p className="text-white/90 text-sm md:text-base font-medium">{slide.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-white scale-110"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8 drop-shadow-sm">{t('about')}</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              {t('aboutIntro')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-pr-foreground mb-4 drop-shadow-sm">
              {t("ourProducts")}
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              {t("productsIntro")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <div
                key={category.nameKey}
                className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={category.image}
                  alt={t(category.nameKey)}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  unoptimized
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {t(category.nameKey)}
                  </h3>
                  <p className="text-card-foreground/80">
                    {t(category.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
}
