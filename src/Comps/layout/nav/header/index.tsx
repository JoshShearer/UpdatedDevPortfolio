import React, { useEffect, useState, JSX } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Comps_modal } from "#src/Comps/modal";
// import {
//   HeroiconsBars316Solid,
//   HeroiconsMagnifyingGlassSolid,
//   LucideMapPin,
//   MaterialSymbolsShoppingCartOutline,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
//import type { Location } from "#src/models/types";
import EmojioneMonotoneMushroom from '~icons/emojione-monotone/mushroom';
import LucideMapPin from '~icons/lucide/map-pin'
import mushroomLogoDark from "#src/assets/magLogoPrimaryDark60.png";
import mushroomLogoLight from "#src/assets/magLogoPrimaryDark60.png";
import HeroiconsMagnifyingGlassSolid from '~icons/heroicons/magnifying-glass-solid'
import HeroiconsBars316Solid from '~icons/heroicons/bars-3-16-solid'
import MaterialSymbolsShoppingCartOutline from '~icons/material-symbols/shopping-cart-outline'
import MaterialSymbolsCloseRounded from '~icons/material-symbols/close-rounded'

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
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch.models_forum.setSearchTerm(searchTerm);

    const path = location.pathname.substring(0, 7);
    if (path === "/thread") {
      navigate(`/?key=${searchTerm}`);
    }
  };

  const menuItems = [
    {
      title: "Nearby",
      href: "/businessfinder",
    },
    {
      title: "Species",
      href: "/mushrooms/species",
    },
    {
      title: "Growing",
      href: "/mushrooms/growing-guide",
    },
    {
      title: "Products",
      href: "/mushrooms/products",
    },
    {
      title: "News",
      href: "/mushrooms/news",
    },
    {
      title: "Discussion",
      href: "/mushrooms/community",
    },
  ];

    return (
    <Popover className="relative bg-light-background dark:bg-dark-background">
      <div
        className="pointer-events-none absolute inset-0 z-30 shadow"
        aria-hidden="true"
      />
      <div className="relative z-20 pb-0 md:pb-3">
        <div className="flex md:mx-auto max-w-7xl items-center justify-between py-5 px-6 sm:py-4 sm:justify-start md:space-x-10 lg:px-8">
          <div className="flex flex-row content-center w-full md:w-0 md:flex-1">
            {/* Logo */}
            <div className="self-center">
              <a href="/" className="flex">
                <span className="sr-only">ShroomSpy</span>
                <EmojioneMonotoneMushroom />
                <h3 className="text-2xl px-3 font-bold text-light-primary dark:text-dark-primary">
                  ShroomSpy
                </h3>
              </a>
            </div>
            {/* Vendor Setup */}
            <div className="self-center hidden md:flex">
              <a href="https://biz.shroomspy.com" className="flex">
                <span className="sr-only">ShroomSpyVendorSetup</span>
                <p className="text-sm px-3 underline font-bold text-light-primary dark:text-dark-primary">
                  Partner
                </p>
              </a>
            </div>

            {/* Search Bar */}
            <form
              onSubmit={handleSubmit}
              className="hidden md:flex flex flex-1 items-center ml-4 space-x-2 border-none rounded bg-gray-100 px-3 py-1 bg-light-secondaryContainer dark:bg-dark-secondaryContainer backdrop-blur-sm"
            >
              <HeroiconsMagnifyingGlassSolid className="h-6 w-6 text-light-primary dark:text-dark-primary bg-light-secondaryContainer dark:bg-dark-secondaryContainer" />
              <input
                className="appearance-none bg-transparent border-none outline-none focus:ring-0 w-full"
                type="text"
                placeholder={"Species, Threads, Products..."}
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button hidden type="submit" />
            </form>

            {/* Drop down button #Small Screens*/}
            <div className="md:hidden self-center ml-auto">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-light-background dark:bg-dark-background p-2 text-light-primary dark:text-dark-primary hover:bg-light-primary dark:hover:bg-dark-primaryContainer hover:text-light-primary dark:hover:text-dark-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-onPrimaryContainer dark:focus:ring-dark-onPrimaryContainer">
                <span className="sr-only">Open menu</span>
                <HeroiconsBars316Solid className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            {/* Location Large*/}
            <button
              onClick={() => openModal()}
              className="hidden absolute lg:relative w-0 h-0 lg:flex lg:w-auto lg:h-auto flex space-x-2 items-baseline md:ml-5"
            >
              <LucideMapPin className="h-6 w-6 text-light-primary dark:text-dark-primary self-center" />
              <h4 className="text-base font-medium text-light-primary dark:text-dark-primary">state</h4>
            </button>

            {/* Location small */}
            <div
              onClick={() => openModal()}
              className="cursor-pointer hidden w-0 h-0 w-auto h-auto md:flex sm:relative lg:absolute lg:hidden lg:w-0 lg:h-0 flex space-x-2 items-baseline md:ml-5 rounded-full"
            >
              <LucideMapPin className="h-7 w-7 text-light-primary dark:text-dark-primary self-center" />
            </div>
            <div className="hidden w-0 h-0 md:w-auto md:h-auto md:flex flex items-center md:ml-5">
              <Link to="/mushrooms/cart">
                <button className="text-base font-medium text-light-primary dark:text-dark-primary hover:text-light-primary dark:hover:text-dark-primary">
                  <MaterialSymbolsShoppingCartOutline className="h-7 w-7 text-light-primary dark:text-dark-primary self-center" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {isOpen && (
          <Comps_modal
            idKey={0}
            modal={{
              title: "Change Location?",
              content: "Enter your zip code",
              buttons: {
                primary: {
                  text: "Ok",
                  action: () => console.log("primary action"),
                },
              },
              input: {
                type: "number",
                text: "Enter Zip Code",
                action: () => console.log("e.target.value"), //Change this to new location
              },
            }}
          />
        )}
        <div className="hidden md:flex md:h-5 flex-row items-center justify-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex mx-6 text-bold font-bold items-center text-light-primary dark:text-dark-primary hover:text-light-primary/50 dark:hover:text-dark-primary/50"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-light-background dark:bg-dark-background shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/">
                    <EmojioneMonotoneMushroom />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-light-primary dark:bg-dark-primary p-2 text-base font-semibold text-light-onPrimary dark:text-dark-onPrimary shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-light-onPrimaryContainer dark:focus:ring-onPrimaryContainer focus:ring-offset-2">
                    <span className="sr-only">Close menu</span>
                    <MaterialSymbolsCloseRounded
                      className="md:hidden h-6 w-6"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 text-light-primary dark:text-dark-primary">
              <form
                onSubmit={handleSubmit}
                className="md:hidden flex flex-1 items-center mx-2 space-x-2 border-none rounded bg-gray-100 px-3 py-1 bg-light-secondaryContainer dark:bg-dark-secondaryContainer backdrop-blur-sm"
              >
                <HeroiconsMagnifyingGlassSolid className="h-6 w-6 text-light-primary dark:text-dark-primary bg-light-secondaryContainer dark:bg-dark-secondaryContainer" />
                <input
                  className="appearance-none bg-transparent border-none outline-none focus:ring-0 w-full"
                  type="text"
                  placeholder={"Species, Threads, Products..."}
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <button hidden type="submit" />
              </form>
              <div className="md:hidden mt-4 flex flex-col items-center justify-center">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex mx-6 my-3 text-bold font-bold items-center text-light-primary dark:text-dark-primary hover:text-light-primary/50 dark:hover:text-dark-primary/50"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="flex justify-center mt-2 mx-2">
                <Link to="/cart">
                  <button className="text-base font-medium text-light-primary dark:text-dark-primary hover:text-light-primary dark:hover:text-dark-primary">
                    <MaterialSymbolsShoppingCartOutline className="h-7 w-7 text-light-primary dark:text-dark-primary self-center" />
                  </button>
                </Link>
              </div>
              <div className="flex mt-4 justify-center md:hidden">
                <a href="https://biz.shroomspy.com" className="flex">
                  <span className="sr-only">ShroomSpyVendorSetup</span>
                  <p className="text-sm px-3 underline font-bold text-light-primary dark:text-dark-primary">
                    Sell With Us
                  </p>
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
