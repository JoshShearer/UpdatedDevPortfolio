import React from 'react';
import clsx from 'clsx';

const defaultProps = {
  idKey: 'default',
  size: 6,
  className: '',
} as {
  idKey?: string;
  size?: number;
  children?: JSX.Element;
  className?: string;
};

export const Comps_misc_loading = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  const spinnerStyle = {
    width: `${props.size}rem`,
    height: `${props.size}rem`,
  };

  return (
    <div className={`flex justify-center items-center h-full ${props.className}`}>
          <div
            className="border-l-2 border-light-primary dark:border-dark-primary rounded-full animate-spin"
            style={spinnerStyle}
          ></div>
    </div>
  );
};
