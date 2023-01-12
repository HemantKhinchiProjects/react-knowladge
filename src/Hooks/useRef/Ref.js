import React, { useState, useRef } from 'react';
const Ref = () => {
  //its like a useState only and its preserve the value. No rerander
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);
  const handlerSubmit = (e) => {
    e.preventDefault();
    const yname = luckyName.current.value;
    yname == '' ? alert('Please Fill the data') : setShow(true);
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
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <small>{show ? `Your name is ${luckyName.current.value}` : show} </small>
    </div>
  );
};
export default Ref;
