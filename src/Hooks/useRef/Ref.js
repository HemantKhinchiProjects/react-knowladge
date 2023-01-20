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
    <div>
      <div>
        <hr></hr>

        <h4 className="alert-heading">
          <i>
            UseRef <i class="fa-solid fa-anchor"></i> Example
          </i>
        </h4>
        <hr class="mb-0"></hr>
        <div className="highlight mb-0">
          <p>
            If we tried to count how many times our application renders using
            the useState Hook, we would be caught in an infinite loop since this
            Hook itself causes a re-render. To avoid this, we can use the useRef
            Hook.
          </p>
          <ul>
            <li>
              useRef() only returns one item. It returns an Object called
              current.
            </li>
          </ul>
        </div>
      </div>

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
        <small>
          {show ? `Your name is ${luckyName.current.value}` : show}{' '}
        </small>
      </div>
    </div>
  );
};
export default Ref;
