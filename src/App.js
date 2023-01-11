import React from 'react';
import './style.css';
/*Hooks Example*/
import UMemo from './Hooks/useMemo/Memo.js';
import Callback from './Hooks/useCallback/Callback.js';
export default function App() {
  return (
    <div className="container">
      <h1>Hello Hemant!</h1>
      <p>Start Example of Hooks :)</p>
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">This can improve Performance.!</h4>
        <p>
          The useMemo and useCallback Hooks are similar. The main difference is
          that useMemo returns a memoized value and useCallback returns a
          memoized function.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </div>
      <UMemo />
      <Callback />
    </div>
  );
}
