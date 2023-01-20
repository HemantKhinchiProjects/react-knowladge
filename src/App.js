import React, { memo } from 'react';
import './style.css';
/*Hooks Example*/
import Hooks from './Hooks/hooks.js';



//High Order Function
import HocSample from './components/HOC/hocSample.js';

const App = () => {
  return (
    <div className="container">
      {/* HOC sample */}
      <HocSample />
      <br />
      {/* Hooks Sample */}
      <Hooks />
    </div>
  );
};
export default memo(App);
