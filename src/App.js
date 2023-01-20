import React, { memo } from 'react';
import './style.css';
/*Hooks Example*/
import Hooks from './Hooks/hooks.js';
import UMemo from './Hooks/useMemo/Memo.js';
import Callback from './Hooks/useCallback/Callback.js';

import Reducer from './Hooks/useReducer/Reducer.js';

import Effect from './Hooks/useEffect/Effect.js';
import CustomHooks from './Hooks/customHooks/custom.js';
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
      <div className="alert alert-primary" role="alert">
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
     
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">useReducer Hooks!</h4>
        <p>
          when we work with multipal state, we need to use UseReduce instad of
          useState. in that condistion we use useReducer.
        </p>
      </div>
      <Reducer />
      
     
      <div className="alert alert-success my-4" role="alert">
        <h4 className="alert-heading">useEffect Hooks! most widly used</h4>
        <p>
          To impliment life cycle method in function component. we have hook
          useEffect. useEffect return a function. The useEffect Hook allows you
          to perform side effects in your components. Some examples of side
          effects are: fetching data, directly updating the DOM, and timers.
          useEffect accepts two arguments. The second argument is optional. it
          will call automaticly.
          <br />
          <small className="text-info-emphasis">
            SideEffect are basically anything that affect outside of the scope.
            of the current function thats being executed. In our dashboard this
            include
          </small>
        </p>
      </div>
      <Effect />
      <div className="alert alert-success my-4" role="alert">
        <h4 className="alert-heading">Custom Hooks! most widly used</h4>
        <p>
          Custom hooks are functions that allow you to reuse stateful logic and
          share it across components. They let you use React features, like
          state and context, without writing a class..
          <br />
          <small className="text-info-emphasis">
            SideEffect are basically anything that affect outside of the scope.
            of the current function thats being executed. In our dashboard this
            include
          </small>
        </p>
      </div>
      <CustomHooks />
    </div>
  );
};
export default memo(App);
