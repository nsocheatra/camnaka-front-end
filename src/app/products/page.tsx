'use client';

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Products() {
  const { t } = useLanguage();
  const brands = useMemo(
    () => [
      {
        name: "Pampers",
        logo: "https://via.placeholder.com/220x120?text=Pampers",
      },
      {
        name: "Huggies",
        logo: "https://via.placeholder.com/220x120?text=Huggies",
      },
      {
        name: "Johnson's",
        logo: "https://via.placeholder.com/220x120?text=Johnsons",
      },
      {
        name: "Aptamil",
        logo: "https://via.placeholder.com/220x120?text=Aptamil",
      },
      {
        name: "Philips Avent",
        logo: "https://via.placeholder.com/220x120?text=Avent",
      },
      {
        name: "Nestle",
        logo: "https://via.placeholder.com/220x120?text=Nestle",
      },
      {
        name: "Gerber",
        logo: "https://via.placeholder.com/220x120?text=Gerber",
      },
      {
        name: "Pigeon",
        logo: "https://via.placeholder.com/220x120?text=Pigeon",
      },
      {
        name: "Chicco",
        logo: "https://via.placeholder.com/220x120?text=Chicco",
      },
      {
        name: "Mustela",
        logo: "https://via.placeholder.com/220x120?text=Mustela",
      },
    ],
    []
  );
  const [brandIndex, setBrandIndex] = useState(0);
  const brandsPerPage = 5;
  const brandPages = useMemo(() => {
    const pages = [] as Array<typeof brands>;
    for (let i = 0; i < brands.length; i += brandsPerPage) {
      pages.push(brands.slice(i, i + brandsPerPage));
    }
    return pages;
  }, [brands]);

  const categories = [
    {
      nameKey: 'babyClothing',
      descKey: 'babyClothingDesc',
      image: "https://via.placeholder.com/300x200?text=Baby+Clothing"
    },
    {
      nameKey: 'babyToys',
      descKey: 'babyToysDesc',
      image: "https://via.placeholder.com/300x200?text=Baby+Toys"
    },
    {
      nameKey: 'diapersWipes',
      descKey: 'diapersWipesDesc',
      image: "https://via.placeholder.com/300x200?text=Diapers"
    },
    {
      nameKey: 'feedingSupplies',
      descKey: 'feedingSuppliesDesc',
      image: "https://via.placeholder.com/300x200?text=Feeding+Supplies"
    },
    {
      nameKey: 'babyCare',
      descKey: 'babyCareDesc',
      image: "https://via.placeholder.com/300x200?text=Baby+Care"
    },
    {
      nameKey: 'strollers',
      descKey: 'strollersDesc',
      image: "https://via.placeholder.com/300x200?text=Strollers"
    }
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setBrandIndex((prev) => (prev + 1) % brandPages.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [brandPages.length]);

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-foreground mb-12 drop-shadow-sm">{t('ourProducts')}</h1>
        <p className="text-lg text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
          {t('productsIntro')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-primary hover:border-t-8">
              <Image src={category.image} alt={t(category.nameKey)} width={300} height={200} className="w-full h-48 object-cover" unoptimized />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{t(category.nameKey)}</h3>
                <p className="text-foreground/80">{t(category.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4 drop-shadow-sm">{t('ourBrands')}</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              {t('brandsIntro')}
            </p>
          </div>

          <div className="mt-10">
            <div className="overflow-hidden rounded-2xl bg-card text-card-foreground border border-border shadow-lg">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${brandIndex * 100}%)` }}
              >
                {brandPages.map((page, pageIndex) => (
                  <div key={`brand-page-${pageIndex}`} className="min-w-full p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                      {page.map((brand) => (
                        <div key={brand.name} className="flex flex-col items-center justify-center gap-3">
                          <div className="relative h-16 w-32 sm:h-20 sm:w-36">
                            <Image
                              src={brand.logo}
                              alt={brand.name}
                              fill
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                          <p className="text-foreground/80 text-sm font-medium text-center">{brand.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {brandPages.map((_, index) => (
                <button
                  key={`brand-dot-${index}`}
                  type="button"
                  aria-label={`Brand page ${index + 1}`}
                  onClick={() => setBrandIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    index === brandIndex ? "bg-primary scale-110" : "bg-primary/40 hover:bg-primary/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/60">
            {t('placeholderNote')}
          </p>
        </div>
      </div>
    </div>
  );
}