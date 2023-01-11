import React from 'react';
import './style.css';
/*Hooks Example*/
import UMemo from './Hooks/useMemo/Memo.js';
export default function App() {
  return (
    <div className="container">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UMemo />
    </div>
  );
}
