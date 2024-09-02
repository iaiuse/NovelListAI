'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, BookOpen } from 'lucide-react';

interface GenreData {
  name: string;
  value: number;
}

interface AnalysisResult {
  popularity: GenreData[];
  targetAudience: string;
  marketTrends: string;
  competitiveAnalysis: string;
}

const MarketResearch = () => {
  const t = useTranslations('MarketResearch');
  const [storyIdea, setStoryIdea] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const genres = t('genres').split(',');

  const generateRandomData = (): GenreData[] => 
    genres.map(genre => ({ name: genre, value: Math.floor(Math.random() * 100) }));

  const handleAnalyze = () => {
    setAnalysisResult({
      popularity: generateRandomData(),
      targetAudience: t('targetAudienceResult'),
      marketTrends: t('marketTrendsResult'),
      competitiveAnalysis: t('competitiveAnalysisResult'),
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t('title')}</h2>
      
      <Card>
        <CardContent className="pt-6">
          <Label htmlFor="story-idea">{t('storyIdeaLabel')}</Label>
          <Input
            id="story-idea"
            placeholder={t('storyIdeaPlaceholder')}
            value={storyIdea}
            onChange={(e) => setStoryIdea(e.target.value)}
            className="mt-1 mb-4"
          />
          <Button onClick={handleAnalyze} className="w-full">
            <TrendingUp className="mr-2 h-4 w-4" /> {t('analyzeButton')}
          </Button>
        </CardContent>
      </Card>

      {analysisResult && (
        <>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{t('popularityChart')}</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analysisResult.popularity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="mr-2 h-5 w-5" /> {t('targetAudience')}
              </h3>
              <p>{analysisResult.targetAudience}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" /> {t('marketTrends')}
              </h3>
              <p>{analysisResult.marketTrends}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2 h-5 w-5" /> {t('competitiveAnalysis')}
              </h3>
              <p>{analysisResult.competitiveAnalysis}</p>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default MarketResearch;