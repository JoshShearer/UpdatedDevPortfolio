import React, { useEffect, JSX } from 'react';

const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};

export const Comps_layout_card = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  // useEffect(() => {
    
  // },[]);

  return (
    <div className="Comps_layout_card">
        <p>Comps_layout_card</p>
    </div>
  );
};
