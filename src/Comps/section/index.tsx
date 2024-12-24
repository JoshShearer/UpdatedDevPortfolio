import React, { useEffect, JSX } from 'react';

const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};

export const Comps_section = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  // useEffect(() => {
    
  // },[]);

  return (
    <div className="Comps_section">
        <p>Comps_section</p>
    </div>
  );
};
