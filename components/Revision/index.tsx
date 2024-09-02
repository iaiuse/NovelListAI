'use client';

import React, { useState, ChangeEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Check, X } from 'lucide-react';

interface Suggestion {
  id: number;
  type: 'grammar' | 'style' | 'structure';
  text: string;
  start: number;
  end: number;
}

const Revision = () => {
  const t = useTranslations('Revision');
  const [content, setContent] = useState<string>(t('sampleText'));
  const [aiSuggestions, setAiSuggestions] = useState<Suggestion[]>([
    { id: 1, type: 'grammar', text: t('grammarSuggestion'), start: 25, end: 37 },
    { id: 2, type: 'style', text: t('styleSuggestion'), start: 13, end: 15 },
    { id: 3, type: 'structure', text: t('structureSuggestion'), start: 0, end: 11 }
  ]);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const applySuggestion = (suggestion: Suggestion) => {
    // 这里应该实现应用建议的逻辑
    console.log('Applying suggestion:', suggestion);
  };

  const ignoreSuggestion = (id: number) => {
    setAiSuggestions(aiSuggestions.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t('title')}</h2>
      
      <Card>
        <CardContent className="pt-6">
          <Textarea
            value={content}
            onChange={handleContentChange}
            className="min-h-[200px] mb-4"
            placeholder={t('textareaPlaceholder')}
          />
          <Button>
            <Edit className="mr-2 h-4 w-4" /> {t('getAISuggestions')}
          </Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">{t('allSuggestions')}</TabsTrigger>
          <TabsTrigger value="grammar">{t('grammar')}</TabsTrigger>
          <TabsTrigger value="style">{t('style')}</TabsTrigger>
          <TabsTrigger value="structure">{t('structure')}</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {aiSuggestions.map(suggestion => (
            <Card key={suggestion.id} className="mb-4">
              <CardContent className="pt-4 flex justify-between items-start">
                <div>
                  <p className="mb-2">{suggestion.text}</p>
                  <p className="text-sm text-gray-500">{t('type')}: {t(suggestion.type)}</p>
                </div>
                <div>
                  <Button size="sm" variant="ghost" onClick={() => applySuggestion(suggestion)}>
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => ignoreSuggestion(suggestion.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        {/* 类似地，为 'grammar', 'style', 和 'structure' 添加 TabsContent */}
      </Tabs>
    </div>
  );
};

export default Revision;