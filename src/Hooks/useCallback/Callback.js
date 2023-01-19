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
