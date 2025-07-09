import React from 'react';

const spacing = 8;

const Box = ({ p, m, children, style = {}, ...rest }) => {
  const boxStyle = {
    ...(p !== undefined && { padding: p * spacing }),
    ...(m !== undefined && { margin: m * spacing }),
    ...style,
  };

  return (
    <div style={boxStyle} {...rest}>
      {children}
    </div>
  );
};

export default Box;
