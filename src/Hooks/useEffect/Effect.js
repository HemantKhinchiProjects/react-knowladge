import React, { useState, useEffect } from 'react';
const Effect = () => {
  const [number, setNumber] = useState(0);
  const handlerAdd = () => {
    return setNumber(number + 1);
  };
  useEffect(() => {
    document.title = `Chats (${number})`;
  });
  return (
    <>
      <div>
        <hr></hr>

        <h4 className="alert-heading">
          <i>
            UseEffect <i class="fa-solid fa-anchor"></i> Example
          </i>
        </h4>
        <hr class="mb-0"></hr>
        <div className="highlight mb-0">
          <p>useEffect Hooks! most widly used :-)</p>
          <p>
            To impliment life cycle method in function component. we have hook
            useEffect. useEffect return a function. The useEffect Hook allows
            you to perform side effects in your components. Some examples of
            side effects are: fetching data, directly updating the DOM, and
            timers. useEffect accepts two arguments. The second argument is
            optional. it will call automaticly.
          </p>
          <small className="text-info-emphasis">
            SideEffect are basically anything that affect outside of the scope.
            of the current function thats being executed. In our dashboard this
            include
          </small>
          <ul>
            <li>
              SideEffect are basically anything that affect outside of the
              scope. of the current function thats being executed. In our
              dashboard this include
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
            Hit Me
          </button>
        </div>
      </div>
    </>
  );
};
export default Effect;
