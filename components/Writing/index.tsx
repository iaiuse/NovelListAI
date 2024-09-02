'use client';

import React, { useState, ChangeEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wand2, BookOpen, AlertTriangle } from 'lucide-react';

const Writing = () => {
  const t = useTranslations('Writing');
  const [content, setContent] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<string>('1');
  const [aiSuggestion, setAiSuggestion] = useState<string>('');
  const [wordCount, setWordCount] = useState<number>(0);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    setWordCount(newContent.trim().split(/\s+/).length);
  };

  const generateAISuggestion = async () => {
    // 这里应该是调用 AI 服务的逻辑
    setAiSuggestion(t('aiSuggestionPlaceholder'));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Select value={selectedChapter} onValueChange={setSelectedChapter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t('selectChapter')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">{t('chapter', { number: 1 })}</SelectItem>
            <SelectItem value="2">{t('chapter', { number: 2 })}</SelectItem>
            <SelectItem value="3">{t('chapter', { number: 3 })}</SelectItem>
          </SelectContent>
        </Select>
        <div className="text-sm text-gray-500">{t('wordCount', { count: wordCount })}</div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Textarea
            value={content}
            onChange={handleContentChange}
            placeholder={t('startWriting')}
            className="min-h-[300px]"
          />
          <div className="flex justify-between mt-4">
            <Button onClick={generateAISuggestion}>
              <Wand2 className="mr-2 h-4 w-4" /> {t('getAISuggestion')}
            </Button>
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" /> {t('saveDraft')}
            </Button>
          </div>
        </CardContent>
      </Card>

      {aiSuggestion && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Wand2 className="mr-2 h-5 w-5" /> {t('aiWritingSuggestion')}
            </h3>
            <p>{aiSuggestion}</p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" /> {t('writingTips')}
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {t.raw('tips').map((tip: string, index: number) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Writing;