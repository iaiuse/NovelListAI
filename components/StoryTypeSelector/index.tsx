'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, BookOpen, Info } from 'lucide-react';

interface StoryType {
  id: string;
  name: string;
  description: string;
}

const StoryTypeSelector: React.FC = () => {
  const t = useTranslations('StoryTypeSelector');
  const [selectedType, setSelectedType] = useState<string>('');
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const storyTypes: StoryType[] = t.raw('storyTypes') as StoryType[];

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setShowInfo(true);
  };

  return (
    <div className="space-y-6">
      <Button variant="ghost" className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" /> {t('backToFlow')}
      </Button>
      
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <RadioGroup onValueChange={handleTypeSelect} value={selectedType}>
            {storyTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2 mb-4">
                <RadioGroupItem value={type.id} id={type.id} />
                <Label htmlFor={type.id} className="text-lg font-medium">
                  {type.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
      
      {showInfo && selectedType && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <Info className="mr-2 h-5 w-5" />
              <h2 className="text-xl font-semibold">{t('typeDetails')}</h2>
            </div>
            <p className="mb-4">{storyTypes.find(t => t.id === selectedType)?.description}</p>
            <Button className="w-full">
              <BookOpen className="mr-2 h-4 w-4" /> {t('viewClassicExamples')}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StoryTypeSelector;