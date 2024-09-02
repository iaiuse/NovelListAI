'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Wand2 } from 'lucide-react';

interface CharacterType {
  name: string;
  background: string;
  personality: string;
  goal: string;
  obstacle: string;
}

const CharacterDesign = () => {
  const t = useTranslations('CharacterDesign');
  const [character, setCharacter] = useState<CharacterType>({
    name: '',
    background: '',
    personality: '',
    goal: '',
    obstacle: ''
  });
  const [aiSuggestion, setAiSuggestion] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCharacter(prev => ({ ...prev, [name]: value }));
  };

  const generateAISuggestion = async () => {
    // 这里应该是调用 AI 服务的逻辑
    setAiSuggestion(t('aiSuggestionPlaceholder'));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t('title')}</h2>
      <Card>
        <CardContent className="pt-6 space-y-4">
          {Object.entries(character).map(([key, value]) => (
            <div key={key}>
              <Label htmlFor={key}>{t(`${key}Label`)}</Label>
              {key === 'background' ? (
                <Textarea
                  id={key}
                  name={key}
                  placeholder={t(`${key}Placeholder`)}
                  value={value}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              ) : (
                <Input
                  id={key}
                  name={key}
                  placeholder={t(`${key}Placeholder`)}
                  value={value}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              )}
            </div>
          ))}
          <Button onClick={generateAISuggestion} className="w-full">
            <Wand2 className="mr-2 h-4 w-4" /> {t('generateSuggestionButton')}
          </Button>
        </CardContent>
      </Card>
      {aiSuggestion && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">{t('aiSuggestionTitle')}</h3>
            <p>{aiSuggestion}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CharacterDesign;