import React, { useEffect, JSX } from "react";

import { useNavigate } from "react-router-dom";


const defaultProps = {
  idKey: "default",
  type: "submit",
  text: "",
  route: "",
  action: () => {},
  icon: "",
} as {
  idKey?: string;
  type: "button" | "submit" | "reset";
  text: string;
  icon?: string;
  route?: string;
  action?: () => void;
  children?: JSX.Element;
};
// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_layout_button_subtleButton = (
  _props: typeof defaultProps
) => {
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
    <div className="Comps_layout_button_subtleButton">
      <button
        className="text-md h-10 font-bold flex flex-row items-center shadow-lg shadow-custom rounded-md justify-center px-5 py-2  md:py-0 cursor-pointer hover:bg-light-secondaryContainer dark:hover:bg-dark-secondaryContainer"
        type={props.type}
        onClick={() => handleClick()}
      >
        {props.text}
      </button>
    </div>
  );
};
