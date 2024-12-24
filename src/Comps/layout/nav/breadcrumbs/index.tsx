import React, { useEffect, JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "#src/utils/Misc";

const defaultProps = {
  idKey: "default",
} as {
  idKey?: string;
  children?: JSX.Element;
};

export const Comps_layout_nav_breadcrumbs = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  const location = useLocation();
  const pathnames =
    location.pathname.replace("/all","").split("/").filter((x) => x).length > 2
      ? location.pathname.includes("news") &&
        location.pathname.split("/").filter((x) => x).length == 3
        ? location.pathname.split("/").filter((x) => x)
        : combineLastTwoElements(location.pathname.split("/").filter((x) => x))
      : location.pathname.split("/").filter((x) => x);

  useEffect(() => {}, [location]);

  return (
    <div className="Comps_layout_nav_breadcrumbs">
      <div className="ml-3 max-w-xs md:max-w-xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] lg:max-w-none text-sm breadcrumbs">
        <ul>
          <li key="home" className="">
            <Link
              className="flex flex-wrap max-w-xs truncate text-light-primary dark:text-dark-primary"
              key="home"
              to={"/"}
            >
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <li className="" key={index}>
                <span key={name}>
                  {capitalizeFirstLetter(name.replaceAll("-", " "))}
                </span>
              </li>
            ) : (
              <li key={index} className="">
                <Link
                  className="flex flex-wrap max-w-xs truncate text-light-primary dark:text-dark-primary"
                  key={name}
                  to={routeTo}
                >
                  {capitalizeFirstLetter(name.replaceAll("-", " "))}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

function combineLastTwoElements(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Input must be an array with at least two elements.");
  }

  const lastTwoElements = arr.slice(-2);
  const combinedElement = lastTwoElements.join("-");

  return arr.slice(0, -2).concat(combinedElement);
}
