import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 flex items-center bg-white">
      <div className="flex items-center flex-grow">
        <Image src="/images/logo.png" alt="ScriptCraft Logo" width={40} height={40} />
        <span className="text-2xl font-bold ml-2">ScriptCraft</span>
      </div>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Workflow</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
        </ul>
        <LanguageSwitcher />
        <Button variant="default" className="bg-black text-white">Sign Up</Button>
      </nav>
    </header>
  );
};

export default Header;