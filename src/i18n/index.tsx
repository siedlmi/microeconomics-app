import React, { createContext, useContext, useState } from 'react';
import en from './en';
import pl from './pl';

type Language = 'en' | 'pl';
type Translations = typeof en;

const translations: Record<Language, Translations> = { en, pl };

const LanguageContext = createContext<{
  lang: Language;
  t: Translations;
  switchLanguage: (l: Language) => void;
}>({ lang: 'en', t: en, switchLanguage: () => {} });

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');
  const switchLanguage = (l: Language) => setLang(l);
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
