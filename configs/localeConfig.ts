// /configs/localeConfig.ts
import {
  enUS,
  zhCN,
  jaJP,
  koKR,
  frFR,
  deDE,
  esES,
  ptPT,
  ruRU,
  arSA
} from "@clerk/localizations";

export const locales = ['en', 'zh', 'ja', 'ko', 'fr', 'de', 'es', 'pt', 'ru', 'ar'] as const;

export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: '🇺🇸 English',
  zh: '🇨🇳 简体中文',
  ja: '🇯🇵 日本語',
  ko: '🇰🇷 한국어',
  fr: '🇫🇷 Français',
  de: '🇩🇪 Deutsch',
  es: '🇪🇸 Español',
  pt: '🇵🇹 Português',
  ru: '🇷🇺 Русский',
  ar: '🇸🇦 العربية',
};


export const clerkLocalizations: Record<Locale, any> = {
  en: enUS,
  zh: zhCN,
  ja: jaJP,
  ko: koKR,
  fr: frFR,
  de: deDE,
  es: esES,
  pt: ptPT,
  ru: ruRU,
  ar: arSA
};
type LocaleTag = keyof typeof clerkLocalizations;

export const getLanguageTag = (locale: LocaleTag): string => {
  return Object.keys(clerkLocalizations).includes(locale) ? clerkLocalizations[locale] : locale;
};

export const getLocale = (locale: string): Locale => {
  if (locale.startsWith('zh')) return 'zh';
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
};