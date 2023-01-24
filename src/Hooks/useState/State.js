import React, { useState } from 'react';
const State = () => {
  const [number, setNumber] = useState(0);
  const handlerAdd = () => {
    return setNumber(number + 1);
  };
  const handlerRed = () => {
    return setNumber(number - 1);
  };
  return (
    <>
      {/* <div>
        <hr></hr>

        <h4 className="alert-heading">
          <i>
            UseState <i className="fa-solid fa-anchor"></i> Example
          </i>
        </h4>
        <hr className="mb-0"></hr>
        <div className="highlight mb-0">
          <p>
            useState is a Hook that allows you to have state variables in
            functional components. You pass the initial state to this function
            and it returns a variable with the current state value (not
            necessarily the initial state) and another function to update this
            value.
          </p>
        </div>
      </div> */}
      <div className="col-md-4 mx-auto text-center mt-2">
        <h5>
          Example UseState <span className="badge bg-secondary">{number}</span>
        </h5>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlerAdd}
          >
            Inc
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlerRed}
          >
            Dec
          </button>
        </div>
      </div>
    </>
  );
};
export default State;
