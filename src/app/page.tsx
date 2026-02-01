'use client';

import Image from "next/image";
import Link from "next/link";
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-cam-blue via-blue-600 to-naka-pink dark:bg-linear-to-r dark:from-gray-950 dark:via-gray-800 dark:to-gray-900 py-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-accent-orange mb-4 drop-shadow-lg">
              {t('companyName')}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 dark:text-gray-200 mb-8 drop-shadow">
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
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground dark:text-accent-orange mb-8 drop-shadow-sm">{t('about')}</h2>
            <p className="text-lg text-foreground/80 dark:text-gray-300 max-w-3xl mx-auto">
              {t('aboutIntro')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground dark:text-accent-orange mb-4 drop-shadow-sm">
              {t("ourProducts")}
            </h2>
            <p className="text-lg text-foreground/80 dark:text-gray-300 max-w-3xl mx-auto">
              {t("productsIntro")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <div
                key={category.nameKey}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-cam-blue dark:border-accent-orange"
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
                  <h3 className="text-xl font-semibold text-foreground dark:text-accent-orange mb-2">
                    {t(category.nameKey)}
                  </h3>
                  <p className="text-foreground/80 dark:text-gray-300">
                    {t(category.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-foreground/60 dark:text-gray-400 text-center">
              {t("placeholderNote")}
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-cam-blue text-white px-6 py-2.5 text-sm font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              {t("products")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
