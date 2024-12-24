import React, { useEffect, JSX } from 'react';

const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};

export const CREDITOR_UNDERSCORE_NAME = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  // useEffect(() => {
    
  // },[]);

  return (
    <div className="CREDITOR_UNDERSCORE_NAME">
        <p>CREDITOR_UNDERSCORE_NAME</p>
    </div>
  );
};
