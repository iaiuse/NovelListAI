import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Sidebar from '@/components/Dashborad/Sidebar';
import LanguageSwitcher from '@/components/LandingPage/LanguageSwitcher';

import { unstable_setRequestLocale } from 'next-intl/server';

export default function DashboardLayout({ 
  children, 
  params: { locale } 
}: { 
  children: React.ReactNode; 
  params: { locale: string } 
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{t('title')}</h1>
          <LanguageSwitcher />
        </div>
        {children}
      </main>
    </div>
  );
}