"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

export default function SimpleProfile() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center">
      <header className="z-50 fixed top-4 bg-[#0f0f10] text-gray-200 rounded-full pl-3 pr-6">
        <div
          className={`flex items-center h-16 transition-all duration-500 ease-in-out ${
            isScrolled ? "gap-3" : "gap-6"
          }`}>
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/images/my-pic.png"
                alt="yjlee"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isScrolled ? "w-0 opacity-0" : "w-36 opacity-100"
              }`}>
              <h1 className="whitespace-nowrap">Youjin Lee 🇰🇷</h1>
              <p className="text-xs text-gray-400 whitespace-nowrap">
                Frontend Developer
              </p>
            </div>
          </div>
          <div className="flex items-center transition-all duration-500 ease-in-out space-x-6">
            <a
              href="https://www.linkedin.com/in/yujin-lee-ab6a79167"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/youjin-10"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110">
              <Github size={20} />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
