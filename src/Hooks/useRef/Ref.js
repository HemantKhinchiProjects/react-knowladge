import React, { useRef } from 'react';
const Ref = () => {
  //its like a useState only and its preserve the value. No rerander
  const luckyName = useRef(null);
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(luckyName);
  };
  return (
    <div className="my-2 alert alert-dark ">
      <form className="col-4 mx-auto" onSubmit={handlerSubmit}>
        <div className="mb-3">
          <label htmlFor="luckyName" className="form-label">
            Enter your lucky name
          </label>
          <input
            type="text"
            className="form-control"
            id="luckyName"
            ref={luckyName}
            aria-describedby="emailHelp"
          />
        </div>
        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Ref;
