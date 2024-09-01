import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales, localeNames, getLanguageTag, getLocale } from '@/configs/localeConfig';
import { Globe, ChevronDown } from 'lucide-react'; // Import ChevronDown for the arrow icon
const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-full bg-gray-100 p-2 text-gray-500 hover:text-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
      >
        <Globe className="h-5 w-5" />
        <span className="ml-2">{getLocale(currentLocale)}</span>
        <ChevronDown className="ml-1 h-5 w-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-700">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`block px-4 py-2 text-sm  hover:text-purple-1300 whitespace-nowrap duration-100 to-change-lang ${
                locale === currentLocale
                  ? 'text-purple-1300 font-semibold hover:opacity-90'
                  : ''
              }`}
            >
              {localeNames[locale] || getLanguageTag(locale)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
