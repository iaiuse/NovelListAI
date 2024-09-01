import { Card, CardContent } from "@/components/UI/Card";

const ProductShowcase = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Craft your story, scene by scene</h2>
        <Card className="overflow-hidden shadow-xl">
          <CardContent className="p-0">
            <img src="/images/hero.png" alt="ScriptCraft Interface" className="w-full h-auto" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductShowcase;