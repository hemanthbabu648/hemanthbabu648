'use client';

import React from 'react';


// Generic HOC with props type P
const NoMotionSectionWrapper = <P extends object>(Component: React.ComponentType<P>, idName: string) => {
  const HOC: React.FC<P> = props => (
    <section
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component {...props} />
    </section>
  );

  return HOC;
};

export default NoMotionSectionWrapper;
