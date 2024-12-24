import React, { useEffect, JSX } from 'react';
import { useNavigate } from 'react-router-dom';


const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
  type: "button" | "submit" | "reset";
  text: string;
  icon?: string;
  route?: string;
  action?: () => void;
};


export const Comps_layout_button_buyProduct = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  const navigate = useNavigate();
  // useEffect(() => {
    
  // },[]);

  

  const handleClick = () => {
    if (props.action) {
      props.action();
    }
    if (props.route) {
      navigate(props.route);
    }
  };

  return (
    <div className="Comps_layout_button_buyProduct">
      <a
        type={props.type}
        className="inline-flex w-full items-center justify-center rounded-md border-light-primary dark:border-dark-primary px-6 py-3 text-base font-semibold text-light-primary dark:text-dark-primary shadow-sm hover:bg-light-primary dark:hover:bg-dark-primary focus:outline-none hover:text-light-background dark:hover:text-dark-background focus:ring-2 focus:ring-light-onPrimary dark:focus:ring-onPrimary focus:ring-offset-2"
        onClick={() => handleClick()}
      >
        {props.text}
      </a>
    </div>
  );
};
