import React, { useState, useCallback } from 'react';
import Child from './child/Child';
const Callback = () => {
  const [value, setValue] = useState(0);
  const [valueOne, setValueOne] = useState([]);
  const handlerUpdate = () => {
    console.log('01');
    setValue(value + 1);
  };
  const fun = useCallback(() => {
    console.log('asdkfjhakd');
  }, valueOne);
  return (
    <div>
      <div>
        <hr></hr>

        <h4 className="alert-heading">
          <i>
            UseCallback <i className="fa-solid fa-anchor"></i> Example
          </i>
        </h4>
        <hr className="mb-0"></hr>
        <div className="highlight mb-0">
          <p>
            This hook is used to prevent a callback function from being
            recreated every time the component re-renders. By using useCallback,
            you can ensure that the same function is passed down to a child
            component, which can help to avoid unnecessary re-renders.
          </p>
          <ul>
            <li>useCallback This can improve Performance.!</li>
          </ul>
        </div>
      </div>
      <Child valueOne={valueOne} fun={fun} />

      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handlerUpdate}
      >
        increase {value}
      </button>
    </div>
  );
};
export default Callback;
