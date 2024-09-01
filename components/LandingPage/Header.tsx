import { Button } from "@/components/UI/Button";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className="py-4 px-6 flex justify-between items-center bg-white">
      <div className="text-2xl font-bold">ScriptCraft</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Workflow</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
        </ul>
      </nav>
      {/* <!-- Language Switcher --> */} 
      <LanguageSwitcher /> 
            {/* <!-- Language Switcher --> */}
      <Button variant="default" className="bg-black text-white">Sign Up</Button>
    </header>
  );
};

export default Header;