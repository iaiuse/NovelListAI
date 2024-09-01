import React from 'react';
   import { useTranslations } from 'next-intl';
   import { Card, CardContent } from "@/components/UI/Card";

   interface Testimonial {
     nameKey: string;
     roleKey: string;
     contentKey: string;
   }

   const Testimonials: React.FC = () => {
     const t = useTranslations('Testimonials');

     const testimonials: Testimonial[] = [
       {
         nameKey: "testimonial1.name",
         roleKey: "testimonial1.role",
         contentKey: "testimonial1.content"
       },
       {
         nameKey: "testimonial2.name",
         roleKey: "testimonial2.role",
         contentKey: "testimonial2.content"
       },
       {
         nameKey: "testimonial3.name",
         roleKey: "testimonial3.role",
         contentKey: "testimonial3.content"
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
                   <p className="text-gray-600 mb-4">&ldquo;{t(testimonial.contentKey)}&rdquo;</p>
                   <p className="font-semibold">{t(testimonial.nameKey)}</p>
                   <p className="text-sm text-gray-500">{t(testimonial.roleKey)}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
         </div>
       </section>
     );
   };

   export default Testimonials;