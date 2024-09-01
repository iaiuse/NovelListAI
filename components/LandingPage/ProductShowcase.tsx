import Image from 'next/image';
   import { Card, CardContent } from "@/components/UI/Card";

   const ProductShowcase = () => {
     return (
       <section className="py-20 px-6 bg-white">
         <div className="max-w-6xl mx-auto">
           <h2 className="text-4xl font-bold mb-12 text-center">Craft your story, scene by scene</h2>
           <Card className="overflow-hidden shadow-xl">
             <CardContent className="p-0">
               <Image 
                 src="/images/hero.png" 
                 alt="ScriptCraft Interface" 
                 width={1200} 
                 height={675} 
                 layout="responsive"
               />
             </CardContent>
           </Card>
         </div>
       </section>
     );
   };

   export default ProductShowcase;