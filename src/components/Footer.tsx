import React from "react";
import { Code2 } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">Jordan Stout</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
