import React from 'react';

const Typography = ({tag, className, children}) => {
  return (
    <>
      {tag === 'h1' && <h1 className={className}>{children}</h1>}
      {tag === 'h2' && <h2 className={className}>{children}</h2>}
      {tag === 'h3' && <h3 className={className}>{children}</h3>}
      {tag === 'p' && <p className={className}>{children}</p>}
    </>
  );
};

export default Typography;
