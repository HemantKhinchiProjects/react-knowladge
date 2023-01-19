import React, { useState, useEffect } from 'react';
import customHooks from './cHooks/useMyHooks'; // import custom hook
const CustomHooks = () => {
  const [number, setNumber] = useState(0);
  const handlerAdd = () => {
    return setNumber(number + 1);
  };
  customHooks(number); // this the custom hook
  return (
    <>
      <div className="col-md-4 mx-auto text-center">
        <h5>
          Example UseState <span className="badge bg-secondary">{number}</span>
        </h5>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlerAdd}
          >
            Custom Hooks
          </button>
        </div>
      </div>
    </>
  );
};
export default CustomHooks;
