import React, { useEffect, useState, JSX } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Comps_modal } from "#src/Comps/modal";
import EmojioneMonotoneMushroom from '~icons/emojione-monotone/mushroom';
import LucideMapPin from '~icons/lucide/map-pin'
import mushroomLogoDark from "#src/assets/magLogoPrimaryDark60.png";
import mushroomLogoLight from "#src/assets/magLogoPrimaryDark60.png";
import HeroiconsMagnifyingGlassSolid from '~icons/heroicons/magnifying-glass-solid'
import HeroiconsBars316Solid from '~icons/heroicons/bars-3-16-solid'
import MaterialSymbolsShoppingCartOutline from '~icons/material-symbols/shopping-cart-outline'
import MaterialSymbolsCloseRounded from '~icons/material-symbols/close-rounded'
import LineMdLightDarkLoop from '~icons/line-md/light-dark-loop?width=24px&height=24px';

import Face from "#src/assets/images/faces/Josh.png";

const defaultProps = {
  idKey: "default",
} as {
  idKey?: string;
  children?: JSX.Element;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Comps_layout_nav_header = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  const [isDark, setIsDark] = useState(false);

  return (
    <header className="h-20 bg-gradient-to-r from-purple-500 to-blue-500 font-bold text-light-primary dark:text-dark-primary shadow-custom ">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="flex items-center space-x-3">
          <img
            src={Face}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-light-primary dark:border-dark-primary shadow-lg hover:scale-110 transition-transform"
          />
        </a>
        <nav className="hidden md:flex space-x-6">
          
          <a href="/about" className="font-bold text-light-primary dark:text-dark-primary hover:text-gray-200 transition-all">About</a>
          <a href="projects" className="font-bold text-light-primary dark:text-dark-primary hover:text-gray-200 transition-all">Projects</a>
          <a href="/resume" className="font-bold text-light-primary dark:text-dark-primary hover:text-gray-200 transition-all">Resume</a>
          <a href="/contact" className="font-bold text-light-primary dark:text-dark-primary hover:text-gray-200 transition-all">Contact</a>
          
        </nav>
        <div className="flex items-center justify-center">
          <div className='font-bold text-light-primary dark:text-dark-primary' onClick={() => setIsDark(!isDark)}>
            <LineMdLightDarkLoop />
          </div>
        </div>
      </div>
    </header>
  );
};
