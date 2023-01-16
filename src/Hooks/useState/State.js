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
