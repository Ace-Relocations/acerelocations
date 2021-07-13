import React from 'react';
import './HorizontalLoader.css';

const HorizontalLoader = () => {
  return (
    <div class='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HorizontalLoader;
