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
    <div>
        <hr></hr>

        <h4 className="alert-heading">
          <i>
            UseCustom <i class="fa-solid fa-anchor"></i> Example
          </i>
        </h4>
        <hr class="mb-0"></hr>
        <div className="highlight mb-0">
          <p>
          Custom hooks are functions that allow you to reuse stateful logic and
          share it across components. They let you use React features, like
          state and context, without writing a class..
          </p>
          <ul>
            <li>
            Custom Hooks! most widly used
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 mx-auto text-center">
        <h5>
          <span className="badge bg-secondary">{number}</span>
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
