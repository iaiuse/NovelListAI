'use client';

import React, { useState, ChangeEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Wand2 } from 'lucide-react';

interface StoryStructureType {
  opening: string;
  incitingIncident: string;
  risingAction: string;
  midpoint: string;
  crisis: string;
  climax: string;
  resolution: string;
}

const StoryStructure = () => {
  const t = useTranslations('StoryStructure');
  const [structure, setStructure] = useState<StoryStructureType>({
    opening: '',
    incitingIncident: '',
    risingAction: '',
    midpoint: '',
    crisis: '',
    climax: '',
    resolution: ''
  });
  const [aiSuggestion, setAiSuggestion] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStructure(prev => ({ ...prev, [name]: value }));
  };

  const generateAISuggestion = () => {
    // 这里应该是调用 AI 服务的逻辑
    setAiSuggestion(t('aiSuggestionPlaceholder'));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t('title')}</h2>
      
      <Card>
        <CardContent className="pt-6 space-y-4">
          {Object.entries(structure).map(([key, value]) => (
            <div key={key}>
              <Label htmlFor={key}>{t(`${key}Label`)}</Label>
              {key === 'risingAction' || key === 'resolution' ? (
                <Textarea
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  placeholder={t(`${key}Placeholder`)}
                  className="mt-1"
                />
              ) : (
                <Input
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  placeholder={t(`${key}Placeholder`)}
                  className="mt-1"
                />
              )}
            </div>
          ))}
          <Button onClick={generateAISuggestion} className="w-full mt-6">
            <Wand2 className="mr-2 h-4 w-4" /> {t('getAISuggestionButton')}
          </Button>
        </CardContent>
      </Card>
      {aiSuggestion && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <BookOpen className="mr-2 h-5 w-5" /> {t('aiSuggestionTitle')}
            </h3>
            <p>{aiSuggestion}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StoryStructure;