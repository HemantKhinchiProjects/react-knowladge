import React, { memo } from 'react';
import './style.css';
/*Hooks Example*/
import UMemo from './Hooks/useMemo/Memo.js';
import Callback from './Hooks/useCallback/Callback.js';
const App = () => {
  return (
    <div className="container">
      <h1>Hello Hemant!</h1>
      <p>Start Example of Hooks :)</p>
      <div class="alert alert-primary" role="alert">
        Summary: useCallback is used to memoize callback functions, so that the
        same function is passed down to child components, avoiding unnecessary
        re-renders. useMemo is used to memoize the computation of expensive
        values, only recalculating them when the dependencies change, which
        leads to more efficient performance.
      </div>
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">UseMemo</h4>
        <p>
          This hook is used to calculate and store a value that is derived from
          other values. It is similar to useEffect, but it only runs when one of
          the dependencies changes. Use this hook when you have some expensive
          computation, you only want to compute it when some values changed.
        </p>
      </div>
      <UMemo />
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">
          useCallback This can improve Performance.!
        </h4>
        <p>
          This hook is used to prevent a callback function from being recreated
          every time the component re-renders. By using useCallback, you can
          ensure that the same function is passed down to a child component,
          which can help to avoid unnecessary re-renders.
        </p>
      </div>
      <Callback />
    </div>
  );
};
export default memo(App);
