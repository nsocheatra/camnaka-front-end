'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'kh';

interface Translations {
  [key: string]: {
    en: string;
    kh: string;
  };
}

const translations: Translations = {
  companyName: {
    en: 'CAM NAKA',
    kh: 'ខេម ណាកា',
  },
  home: {
    en: 'Home',
    kh: 'ទំព័រដើម',
  },
  about: {
    en: 'About Us',
    kh: 'អំពីយើង',
  },
  products: {
    en: 'Our Products',
    kh: 'ផលិតផល',
  },
  contact: {
    en: 'Contact Us',
    kh: 'ទំនាក់ទំនង',
  },
  tagline: {
    en: 'Your Trusted Partner in Mother and Baby Products Import & Export',
    kh: 'ដៃគូដែលអ្នកទុកចិត្តក្នុងការនាំចូលនិងនាំចេញផលិតផលអ្នកមាតា និងទារក',
  },
  aboutIntro: {
    en: 'CAM NAKA CO., LTD. is a leading company specializing in the import and export of high-quality mother and baby products. Based in Phnom Penh, Cambodia, we are committed to providing safe, reliable, and affordable products to families across the region. Our mission is to ensure that every mother and child has access to the best products available.',
    kh: 'ក្រុមហ៊ុន CAM NAKA CO., LTD. គឺជាក្រុមហ៊ុនជាច្រើនដែលមានឯកទេសក្នុងការនាំចូលនិងនាំចេញផលិតផលមាតា និងទារកដែលមានគុណភាពខ្ពស់។ មានមូលដ្ឋាននៅទីក្រុងភ្នំពេញ ប្រទេសកម្ពុជា យើងប្តេជ្ញាចិត្តផ្តល់ផលិតផលដែលមានសុវត្ថិភាព ជឿជាក់ និងសមរម្យទៅកាន់គ្រួសារនានាក្នុងតំបន់។ បេសកកម្មរបស់យើងគឺដើម្បីធានាថាម្ដាយនិងកូននីមួយៗមានសិទ្ធិចូលប្រើផលិតផលល្អបំផុត។',
  },
  ourHistory: {
    en: 'Our History',
    kh: 'ប្រវត្តិរបស់យើង',
  },
  historyText: {
    en: 'Founded in Phnom Penh, Cambodia, CAM NAKA CO., LTD. has been a pioneer in the import and export of mother and baby products for over a decade. Starting as a small family business, we have grown into a trusted name in the industry, serving customers across Cambodia and beyond. Our journey began with a simple mission: to provide high-quality, safe products for mothers and children at affordable prices. Through dedication and hard work, we have built strong partnerships with suppliers worldwide and established a reputation for excellence.',
    kh: 'បានបង្កើតនៅទីក្រុងភ្នំពេញ ប្រទេសកម្ពុជា CAM NAKA CO., LTD. បានក្លាយជាអ្នកច្នៃប្រឌិតក្នុងការនាំចូលនិងនាំចេញផលិតផលមាតា និងទារកជាងមួយទសវត្សរ៍។ ចាប់ផ្តើមជាអាជីវកម្មគ្រួសារតូចមួយ យើងបានធំទូលាយជាឈ្មោះដែលគួរឱ្យទុកចិត្តក្នុងឧស្សាហកម្ម ដោយបម្រើអតិថិជនទូទាំងប្រទេសកម្ពុជានិងក្រៅប្រទេស។ ការធ្វើដំណើររបស់យើងបានចាប់ផ្តើមដោយបេសកកម្មសាមញ្ញ៖ ផ្តល់ផលិតផលដែលមានគុណភាពខ្ពស់ មានសុវត្ថិភាពសម្រាប់ម្ដាយនិងកូនក្នុងតម្លៃសមរម្យ។ តាមរយៈការប្តេជ្ញាចិត្តនិងការខិតខំយ៉ាងខ្លាំង យើងបានបង្កើតភាពជាដៃគូរឹងមាំជាមួយអ្នកផ្គត់ផ្គង់ទូទាំងពិភពលោក និងបានបង្កើតកេរ្តិ៍ឈ្មោះសម្រាប់ភាពល្អឥតខ្ចោះ។',
  },
  ourMission: {
    en: 'Our Mission',
    kh: 'បេសកកម្មរបស់យើង',
  },
  visionMissionTitle: {
    en: 'Our Vision & Mission',
    kh: 'ទស្សនៈ និង បេសកកម្មរបស់យើង',
  },
  missionText: {
    en: 'Our mission is to be the leading provider of mother and baby products in Cambodia, offering a wide range of high-quality items that promote health, safety, and happiness for families.',
    kh: 'បេសកកម្មរបស់យើងគឺដើម្បីក្លាយជាអ្នកផ្តល់ផលិតផលមាតា និងទារកដ៏ឈានមុខគេនៅកម្ពុជា ដោយផ្តល់ជួរផលិតផលដែលមានគុណភាពខ្ពស់ដែលលើកកម្ពស់សុខភាព សុវត្ថិភាព និងសុភមង្គលសម្រាប់គ្រួសារ។',
  },
  ourValues: {
    en: 'Our Values',
    kh: 'តម្លៃរបស់យើង',
  },
  quality: {
    en: 'Quality',
    kh: 'គុណភាព',
  },
  qualityDesc: {
    en: 'We prioritize quality in every product we offer, ensuring safety and reliability for mothers and babies.',
    kh: 'យើងផ្តល់អាទិភាពដល់គុណភាពក្នុងផលិតផលនីមួយៗដែលយើងផ្តល់ ដោយធានាសុវត្ថិភាពនិងភាពជឿជាក់សម្រាប់ម្ដាយនិងកូន។',
  },
  integrity: {
    en: 'Integrity',
    kh: 'ភាពស្មោះត្រង់',
  },
  integrityDesc: {
    en: 'We conduct our business with honesty, transparency, and ethical practices in all our dealings.',
    kh: 'យើងធ្វើអាជីវកម្មជាមួយនឹងភាពស្មោះត្រង់ ភាពច្បាស់លាស់ និងការអនុវត្តសីលធម៌ក្នុងការដោះដូររបស់យើងទាំងអស់។',
  },
  customerFocus: {
    en: 'Customer Focus',
    kh: 'ការផ្តោតលើអតិថិជន',
  },
  customerFocusDesc: {
    en: 'Our customers are at the heart of everything we do. We strive to exceed their expectations and build lasting relationships.',
    kh: 'អតិថិជនរបស់យើងស្ថិតនៅចំណុចកណ្តាលនៃអ្វីៗដែលយើងធ្វើ។ យើងព្យាយាមលើសពីការរំពឹងទុករបស់ពួកគេ និងបង្កើតទំនាក់ទំនងដែលមាននិរន្តរភាព។',
  },
  ourVision: {
    en: 'Our Vision',
    kh: 'ទស្សនៈរបស់យើង',
  },
  visionText: {
    en: 'To be the most trusted and preferred partner for mother and baby products in Cambodia and Southeast Asia, creating a positive impact on families by providing access to the best products and services.',
    kh: 'ដើម្បីក្លាយជាដៃគូដែលគួរឱ្យទុកចិត្តនិងចូលចិត្តបំផុតសម្រាប់ផលិតផលមាតា និងទារកនៅកម្ពុជានិងអាស៊ីអាគ្នេយ៍ ដោយបង្កើតឥទានល្អលើគ្រួសារដោយផ្តល់សិទ្ធិចូលប្រើផលិតផលនិងសេវាកម្មល្អបំផុត។',
  },
  ceoMessageTitle: {
    en: 'Message from Our CEO',
    kh: 'សារ​ពី នាយកប្រតិបត្តិ',
  },
  ceoMessageText: {
    en: 'At CAM NAKA CO., LTD., we believe every mother and child deserves safe, reliable, and affordable products. Our team is committed to building long-term partnerships and delivering outstanding value to families across Cambodia and the region. Thank you for trusting us on your journey.',
    kh: 'នៅ CAM NAKA CO., LTD. យើងជឿជាក់ថា មាតា និងទារកគ្រប់រូបគួរតែទទួលបានផលិតផលដែលមានសុវត្ថិភាព ជឿជាក់ និងមានតម្លៃសមរម្យ។ ក្រុមការងារយើងប្តេជ្ញាចិត្តក្នុងការកសាងដៃគូរយៈពេលវែង និងផ្តល់តម្លៃល្អឥតខ្ចោះទៅកាន់គ្រួសារទូទាំងកម្ពុជា និងតំបន់។ សូមអរគុណចំពោះការជឿទុកចិត្តលើយើងក្នុងដំណើររបស់អ្នក។',
  },
  ceoName: {
    en: 'Soy Somros',
    kh: 'សយ​ សម្រស់',
  },
  ceoTitle: {
    en: 'Chief Executive Officer',
    kh: 'នាយកប្រតិបត្តិ',
  },
  ourProducts: {
    en: 'Our Products',
    kh: 'ផលិតផល',
  },
  ourBrands: {
    en: 'Our Brands',
    kh: 'ម៉ាករបស់យើង',
  },
  brandsIntro: {
    en: 'Discover trusted brands we work with to bring the best for mothers and babies.',
    kh: 'ស្វែងយល់អំពីម៉ាកដែលយើងជឿទុកចិត្ត ដើម្បីនាំមកនូវផលិតផលល្អបំផុតសម្រាប់មាតា និងទារក។',
  },
  productsIntro: {
    en: 'At CAM NAKA CO., LTD., we offer a wide range of high-quality mother and baby products imported from trusted manufacturers worldwide. Browse our categories below to discover products that meet your needs.',
    kh: 'នៅ CAM NAKA CO., LTD. យើងផ្តល់ជួរផលិតផលមាតានិងទារកដែលមានគុណភាពខ្ពស់ដែលនាំចូលពីអ្នកផលិតដែលគួរឱ្យទុកចិត្តទូទាំងពិភពលោក។ រកមើលប្រភេទខាងក្រោមដើម្បីរកឃើញផលិតផលដែលត្រូវនឹងតម្រូវការរបស់អ្នក។',
  },
  babyClothing: {
    en: 'Baby Clothing',
    kh: 'សម្លៀកបំពាក់កូន',
  },
  babyClothingDesc: {
    en: 'Comfortable and stylish clothing for babies of all ages.',
    kh: 'សម្លៀកបំពាក់ដែលស្រួលស្មា និងមានស្ទីលសម្រាប់កូនក្នុងអាយុទាំងអស់។',
  },
  babyToys: {
    en: 'Baby Toys',
    kh: 'អំណោយកូន',
  },
  babyToysDesc: {
    en: 'Educational and fun toys to stimulate your baby\'s development.',
    kh: 'អំណោយអប់រំនិងកំសាន្តដើម្បីលើកកម្ពស់ការអភិវឌ្ឍរបស់កូនអ្នក។',
  },
  diapersWipes: {
    en: 'Diapers & Wipes',
    kh: 'ខោនិងក្រដាសជូត',
  },
  diapersWipesDesc: {
    en: 'High-quality diapers and baby wipes for ultimate comfort and cleanliness.',
    kh: 'ខោនិងក្រដាសជូតដែលមានគុណភាពខ្ពស់សម្រាប់ភាពស្រួលស្មានិងភាពស្អាត។',
  },
  feedingSupplies: {
    en: 'Feeding Supplies',
    kh: 'សម្ភារៈចិញ្ចឹម',
  },
  feedingSuppliesDesc: {
    en: 'Bottles, pacifiers, and other feeding essentials for your little one.',
    kh: 'ដប ក្បាលដប និងសម្ភារៈចិញ្ចឹមផ្សេងទៀតសម្រាប់កូនតូចរបស់អ្នក។',
  },
  babyCare: {
    en: 'Baby Care Products',
    kh: 'ផលិតផលថែទាំទារក',
  },
  babyCareDesc: {
    en: 'Soaps, lotions, and care items to keep your baby healthy and happy.',
    kh: 'សាប៊ូ ឡូស្យុង និងវត្ថុថែទាំដើម្បីរក្សាទារក ឱ្យមានសុខភាពល្អនិងសប្បាយ។',
  },
  strollers: {
    en: 'Strollers & Car Seats',
    kh: 'រទេះកូន និងកៅអីឡាន',
  },
  strollersDesc: {
    en: 'Safe and convenient transportation solutions for babies and toddlers.',
    kh: 'ដំណោះស្រាយការដឹកជញ្ជូនដែលមានសុវត្ថិភាពនិងងាយស្រួលសម្រាប់កូននិងក្មេង។',
  },
  // placeholderNote: {
  //   en: '* Images are placeholders. Actual products may vary. Contact us for specific inquiries and current stock.',
  //   kh: '* រូបភាពគឺជាកន្លែងដាក់។ ផលិតផលពិតអាចប្រែប្រួល។ ទំនាក់ទំនងមកយើងសម្រាប់សំណួរជាក់លាក់និងស្តុកបច្ចុប្បន្ន។',
  // },
  getInTouch: {
    en: 'Get in Touch',
    kh: 'ទំនាក់ទំនងមកយើង',
  },
  address: {
    en: 'Address',
    kh: 'អាសយដ្ឋាន',
  },
  phone: {
    en: 'Phone',
    kh: 'ទូរស័ព្ទ',
  },
  email: {
    en: 'Email',
    kh: 'អ៊ីមែល',
  },
  ourLocation: {
    en: 'Our Location',
    kh: 'ទីតាំងរបស់យើង',
  },
  sendMessage: {
    en: 'Send us a Message',
    kh: 'ផ្ញើសារមកយើង',
  },
  name: {
    en: 'Name',
    kh: 'ឈ្មោះ',
  },
  message: {
    en: 'Message',
    kh: 'សារ',
  },
  send: {
    en: 'Send Message',
    kh: 'ផ្ញើសារ',
  },
  footerText: {
    en: 'Copyright © 2025-2026 CAM NAKA CO., LTD. All rights reserved.',
    kh: 'រក្សាសិទ្ធិ © 2025-2026 ក្រុមហ៊ុន ខេម ណាកា ខូ.អិលធីឌី រក្សាសិទ្ធិគ្រប់យ៉ាង។',
  },
  quickLinks: {
    en: 'Quick Links',
    kh: 'តំណរភ្ជាប់រហ័ស',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};