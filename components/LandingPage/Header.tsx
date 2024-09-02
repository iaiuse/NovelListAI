

// Header.tsx
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from 'next/link';

const Header: React.FC = () => {
  const t = useTranslations('LandingPage.Header');

  return (
    <header className="py-4 px-6 flex items-center bg-white">
      <div className="flex items-center flex-grow">
        <Image src="/images/logo.png" alt="ScriptCraft Logo" width={40} height={40} />
        <span className="text-2xl font-bold ml-2">ScriptCraft</span>
      </div>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">{t('workflow')}</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">{t('features')}</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">{t('about')}</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">{t('pricing')}</a></li>
        </ul>
        <LanguageSwitcher />
        <Link href="/dashboard">
          <Button variant="default" className="bg-black text-white">{t('signUp')}</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
