import { useNavigate } from "react-router-dom";
import { JSX } from "react";



const defaultProps = {
  idKey: 'default',
  type: 'submit',
  text: '',
  route: '',
  action: () => {},
  icon: '',
} as {
  idKey?: string;
  type: "button" | "submit" | "reset";
  text: string;
  icon?: string;
  route?: string;
  action?: () => void;
  children?: JSX.Element;
};

export const Comps_layout_button_CTAButton = (_props: typeof defaultProps) => {
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
    <div className="Comps_layout_button_CTAButton my-3">
      <a
        type={props.type}
        className="text-light-onPrimary dark:text-dark-onPrimary hover:text-light-onPrimary hover:dark:text-dark-onPrimary cursor-pointer inline-flex w-full items-center justify-center rounded-md bg-light-primary dark:bg-dark-primary px-6 py-3 text-base text-xl font-semibold  shadow-sm  focus:outline-none focus:ring-2 focus:ring-light-onPrimary dark:focus:ring-onPrimary focus:ring-offset-2"
        onClick={() => handleClick()}
      >
        {props.text}
      </a>
    </div>
  );
};
