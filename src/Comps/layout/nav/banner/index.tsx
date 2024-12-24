import React, { useEffect, JSX } from "react";
import { useNavigate } from "react-router-dom";

const defaultProps = {
  idKey: "default",
  title: "",
  link: "",
  btnText: "",
  image: "",
} as {
  idKey?: string;
  title: string;
  link?: string;
  btnText?: string;
  image: string;
  children?: JSX.Element;
};

export const Comps_layout_nav_banner = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  const navigate = useNavigate();

  return (
    <div className="Comps_layout_nav_banner">
      <div>
        <div
          className="py-10 my-4 rounded-lg relative z-0"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#4242429f] absolute top-0 left-0 right-0 bottom-0 z-[-10] rounded-md" />
          <h1 className="text-light-onSecondary z-[1] font-bold text-center mx-4">
            {props.title}
          </h1>
          {props.btnText && (
            <div className=" flex justify-center w-full mt-10 cursor-pointer ">
              <div
                className="hover:shadow-lg rounded-full w-1/2 md:w-1/3 flex items-center justify-center bg-light-secondaryContainer dark:bg-dark-secondaryContainer py-3 "
                onClick={() => navigate(props.link)}
              >
                <div className="flex text-sm space-x-4 text-center text-light-primary dark:text-dark-primary font-bold">
                  {props.btnText}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
