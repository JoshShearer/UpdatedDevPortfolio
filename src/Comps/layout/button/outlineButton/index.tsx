import React, { useEffect, JSX } from 'react';

import { useNavigate } from 'react-router-dom';
// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'




const defaultProps = {
  idKey: 'default',
  type: '',
  text: '',
  route: '',
  action: () => {},
  icon: '',
} as {
  idKey?: string;
  type: string;
  text: string;
  icon?: string;
  route?: string;
  action?: () => void;
  children?: JSX.Element;
};


export const Comps_layout_button_outlineButton = (_props: typeof defaultProps) => {
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
    <div className="Comps_layout_button_subtleButton">
        <a className="w-full py-3 px-3 text-xs font-bold flex flex-col items-center border rounded-lg justify-center cursor-pointer text-light-primary dark:text-dark-primary hover:text-light-primary hover:dark:text-dark-primary hover:bg-light-secondaryContainer dark:hover:bg-dark-secondaryContainer"
        type={props.type}
        onClick={() => handleClick()}>
          {props.text}
        </a>
    </div>
  );
};
