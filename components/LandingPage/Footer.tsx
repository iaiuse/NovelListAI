import { Button } from "@/components/UI/Button";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Team</a></li>
              <li><a href="#" className="hover:text-gray-300">Jobs</a></li>
              <li><a href="#" className="hover:text-gray-300">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-300">Tutorials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>support@scriptcraft.com</p>
            <p>123 Screenwriter Lane</p>
            <p>Hollywood, CA 90028</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Start Your Screenwriting Journey Today</h3>
            <Button variant="default" className="w-full mb-4 bg-white text-black">Start Free Trial</Button>
            <div className="flex justify-center space-x-4">
              <Facebook className="h-6 w-6" />
              <Twitter className="h-6 w-6" />
              <Instagram className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="text-center text-sm">
          &copy; 2023 ScriptCraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;