"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BookOpen, 
  PenTool, 
  BarChart, 
  User, 
  FileText, 
  Edit
} from 'lucide-react';
import Image from 'next/image';

const features = [
  { id: 'one-liner', name: 'oneLiner', icon: PenTool },
  { id: 'market-research', name: 'marketResearch', icon: BarChart },
  { id: 'story-type', name: 'storyType', icon: BookOpen },
  { id: 'character-design', name: 'characterDesign', icon: User },
  { id: 'story-structure', name: 'storyStructure', icon: FileText },
  { id: 'writing', name: 'writing', icon: Edit },
  { id: 'revision', name: 'revision', icon: PenTool },
];

export default function Sidebar() {
  const t = useTranslations('Dashboard');
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md">
      <ScrollArea className="h-full">
        <div className="p-4">
          <div className="flex items-center mb-4 space-x-2">
            <Image
              src="/images/logo.png"  // 请替换为实际的 logo 路径
              alt="Logo"
              width={32}
              height={32}
            />
            <h2 className="text-xl font-bold truncate">{t('productName')}</h2>
          </div>
          <nav>
            {features.map((feature) => (
              <Link key={feature.id} href={`/dashboard/${feature.id}`} passHref>
                <Button
                  variant={pathname.includes(feature.id) ? "default" : "ghost"}
                  className="w-full justify-start mb-2"
                >
                  <feature.icon className="mr-2 h-4 w-4" />
                  {t(feature.name)}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  );
}