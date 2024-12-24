import React, { useEffect } from 'react';
import { Comps_section_faq } from '#src/Comps';

export const Pages_landing = () => {

  return (
    <div className="Pages_landing ">
      <div className="flex flex-col justify-center items-center space-y-5 px-6 w-full">
        <div className="w-full">
          <Comps_section_faq />
        </div>
      </div>
    </div>
  );
};
