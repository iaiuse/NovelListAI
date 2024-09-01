import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/Card";
import { MessageSquare, FileText, Play, Monitor } from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const Features: React.FC = () => {
  const t = useTranslations('Features');

  const featureData: FeatureItem[] = [
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
      titleKey: "characterProfile.title",
      descriptionKey: "characterProfile.description"
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      titleKey: "storyStructure.title",
      descriptionKey: "storyStructure.description"
    },
    {
      icon: <Play className="h-8 w-8 text-purple-500" />,
      titleKey: "sceneEditor.title",
      descriptionKey: "sceneEditor.description"
    },
    {
      icon: <Monitor className="h-8 w-8 text-purple-500" />,
      titleKey: "aiTools.title",
      descriptionKey: "aiTools.description"
    }
  ];

  return (
    <section className="py-20 px-6 bg-purple-50">
      <h2 className="text-4xl font-bold text-center mb-12">{t('title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {featureData.map((feature, index) => (
          <Card key={index} className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                {feature.icon}
                {t(feature.titleKey)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t(feature.descriptionKey)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;