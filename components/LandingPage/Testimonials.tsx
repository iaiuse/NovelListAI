import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  nameKey: string;
  roleKey: string;
  contentKey: string;
  avatarSrc: string;
}

const Testimonials: React.FC = () => {
  const t = useTranslations('LandingPage.Testimonials');

  const testimonials: Testimonial[] = [
    {
      nameKey: "testimonial1.name",
      roleKey: "testimonial1.role",
      contentKey: "testimonial1.content",
      avatarSrc: "/images/avatar1.png"
    },
    {
      nameKey: "testimonial2.name",
      roleKey: "testimonial2.role",
      contentKey: "testimonial2.content",
      avatarSrc: "/images/avatar2.png"
    },
    {
      nameKey: "testimonial3.name",
      roleKey: "testimonial3.role",
      contentKey: "testimonial3.content",
      avatarSrc: "/images/avatar3.png"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-purple-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatarSrc}
                      alt={t(testimonial.nameKey)}
                      width={48}
                      height={48}
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{t(testimonial.nameKey)}</p>
                    <p className="text-sm text-gray-500">{t(testimonial.roleKey)}</p>
                  </div>
                </div>
                <p className="text-gray-600">&ldquo;{t(testimonial.contentKey)}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;