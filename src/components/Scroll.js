import { auto } from 'async';
import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '2px solid black',
        height: auto,
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
