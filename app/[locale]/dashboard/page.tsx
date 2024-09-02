'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import OneLinerStory from '@/components/OneLinerStoryGenerator';
import MarketResearch from '@/components/MarketResearch';
import StoryType from '@/components/StoryTypeSelector';
import CharacterDesign from '@/components/CharacterDesign';
import StoryStructure from '@/components/StoryStructure';
import Writing from '@/components/Writing';
import Revision from '@/components/Revision';

export default function Dashboard() {
  const t = useTranslations('Dashboard');
  const pathname = usePathname();

  const getComponent = () => {
    switch (pathname) {
      case '/dashboard/one-liner':
        return <OneLinerStory />;
      case '/dashboard/market-research':
        return <MarketResearch />;
      case '/dashboard/story-type':
        return <StoryType />;
      case '/dashboard/character-design':
        return <CharacterDesign />;
      case '/dashboard/story-structure':
        return <StoryStructure />;
      case '/dashboard/writing':
        return <Writing />;
      case '/dashboard/revision':
        return <Revision />;
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('welcome')}</h2>
            <p>{t('selectFeature')}</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {getComponent()}
    </div>
  );
}