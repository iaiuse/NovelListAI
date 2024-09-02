'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Lightbulb, Wand2 } from 'lucide-react';

const OneLinerStoryGenerator = () => {
  const t = useTranslations('OneLiner');
  const [keywords, setKeywords] = useState('');
  const [genre, setGenre] = useState('');
  const [complexity, setComplexity] = useState(50);
  const [useAIEnhancement, setUseAIEnhancement] = useState(true);
  const [generatedStory, setGeneratedStory] = useState('');

  const handleGenerateStory = () => {
    // 模拟AI生成故事的过程
    const story = `${t('generatedStoryPrefix')} ${genre} ${t('generatedStorySuffix')} ${keywords}`;
    setGeneratedStory(story);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t('title')}</h2>
      
      <Card>
        <CardContent className="pt-6">
          <Label htmlFor="keywords">{t('keywords')}</Label>
          <div className="flex mt-1 mb-4">
            <Input
              id="keywords"
              placeholder={t('keywordsPlaceholder')}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="mr-2"
            />
            <Button variant="outline" onClick={() => setKeywords('')}>
              {t('clear')}
            </Button>
          </div>

          <Label htmlFor="genre">{t('genre')}</Label>
          <Input
            id="genre"
            placeholder={t('genrePlaceholder')}
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="mt-1 mb-4"
          />

          <Label htmlFor="complexity">{t('complexity')}</Label>
          <Slider
            id="complexity"
            min={0}
            max={100}
            step={1}
            value={[complexity]}
            onValueChange={(value) => setComplexity(value[0])}
            className="mt-1 mb-4"
          />

          <div className="flex items-center justify-between mb-4">
            <Label htmlFor="ai-enhancement">{t('aiEnhancement')}</Label>
            <Switch
              id="ai-enhancement"
              checked={useAIEnhancement}
              onCheckedChange={setUseAIEnhancement}
            />
          </div>

          <Button onClick={handleGenerateStory} className="w-full">
            <Wand2 className="mr-2 h-4 w-4" /> {t('generateButton')}
          </Button>
        </CardContent>
      </Card>

      {generatedStory && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center mb-2">
              <Lightbulb className="mr-2 h-4 w-4" />
              <h3 className="text-xl font-semibold">{t('generatedStory')}</h3>
            </div>
            <p className="text-lg">{generatedStory}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OneLinerStoryGenerator;