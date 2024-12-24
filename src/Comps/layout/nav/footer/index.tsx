import React, { useEffect, JSX } from "react";

import Trade from "#src/assets/LS_Logo.png";
import EmojioneMonotoneMushroom from '~icons/emojione-monotone/mushroom';

const defaultProps = {
  idKey: "default",
  orientation: "relative",
} as {
  idKey?: string;
  orientation?: string;
  children?: JSX.Element;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Comps_layout_nav_footer = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  return (
    <footer
      className={classNames(
        props.orientation,
        "Comps_layout_nav_footer w-full px-4 py-4 bg-gradient-to-r from-light-500 to-blue-500 shadow-customB"
      )}
    >
      <SmallPrint />
    </footer>
  );
};

function SocialLink({ href, target, icon: Icon, children }) {
  return (
    <a href={href} target={target} className="group">
      <span className="sr-only">{children}</span>
      <Icon className="h-5 w-5 fill-light-primary dark:fill-dark-primary transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500 hover:fill-light-primary/50 dark:hover:fill-dark-primary/50" />
    </a>
  );
}

function SmallPrint() {
  return (
    <section className="mx-auto max-w-[1200px] bg-light-background dark:bg-dark-background px-4">
      <div className="flex flex-col justify-between items-center gap-5 border-light-primary pt-8 dark:border-dark-primary sm:flex-row">
        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a
            href="#home"
            className="font-bold text-light-primary dark:text-dark-primary hover:text-gray-200 transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-bold text-light-primary dark:text-dark-primary hover:text-gray-200 transition-all"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="font-bold text-light-primary dark:text-dark-primary hover:text-gray-200 transition-all"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="font-bold text-light-primary dark:text-dark-primary hover:text-gray-200 transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Logo and Rights */}
        <p className="text-center text-sm text-light-primary dark:text-dark-primary">
          &copy; Josh Shearer {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <SocialLink
            href="https://www.linkedin.com/company/ShroomSpy"
            target="_blank"
            icon={LinkedInIcon}
          >
            Follow us on LinkedIn
          </SocialLink>
          <SocialLink
            href="https://github.com/JoshShearer"
            target="_blank"
            icon={GitHubIcon}
          >
            Follow me on GitHub
          </SocialLink>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
      />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
