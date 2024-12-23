import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import useSelector from 'reselect';

// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'




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
// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_layout_button_buyProduct = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  const navigate = useNavigate();
  // useEffect(() => {
    
  // },[]);

  // const selected = useSelector((state) => selector(state, props));

  // const selected = useSelector(
  //   (rootState: RootState) => rootState.model.statevar //capturing state slice (not internal selector)
  // );
  // const selected = useSelector(store.select.model.selectorFunction); //using state and selector (internal selector function)

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
