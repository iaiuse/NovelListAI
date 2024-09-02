// Footer.tsx
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const t = useTranslations('LandingPage.Footer');

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('about')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">{t('team')}</a></li>
              <li><a href="#" className="hover:text-gray-300">{t('jobs')}</a></li>
              <li><a href="#" className="hover:text-gray-300">{t('press')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('resources')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">{t('blog')}</a></li>
              <li><a href="#" className="hover:text-gray-300">{t('helpCenter')}</a></li>
              <li><a href="#" className="hover:text-gray-300">{t('tutorials')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <p>{t('email')}</p>
            <p>{t('address1')}</p>
            <p>{t('address2')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('cta')}</h3>
            <Button variant="default" className="w-full mb-4 bg-white text-black">{t('startFreeTrial')}</Button>
            <div className="flex justify-center space-x-4">
              <Facebook className="h-6 w-6" />
              <Twitter className="h-6 w-6" />
              <Instagram className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="text-center text-sm">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;