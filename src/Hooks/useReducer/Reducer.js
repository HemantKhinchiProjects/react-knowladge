import React, { useReducer } from 'react';
const initionalState = 0;
const reducer = (state, action) => {
  //console.log(state, action);
  if (action.type === 'Increment') {
    return state + 1;
  } else if (action.type === 'Decrement') {
    return state - 1;
  }
  return state;
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initionalState);
  return (
    <>
      <div>
        <hr></hr>

        <h4 className="alert-heading">
          <i>
            UseReducer <i class="fa-solid fa-anchor"></i> Example
          </i>
        </h4>
        <hr class="mb-0"></hr>
        <div className="highlight mb-0">
          <p>
            when we work with multipal state, we need to use UseReduce instad of
            useState. in that condistion we use useReducer. It allows for custom
            state logic. If you find yourself keeping track of multiple pieces
            of state that rely on complex logic, useReducer may be useful.
          </p>
          <ul>
            <li>
              The useReducer Hook returns the current stateand a dispatchmethod.
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 mx-auto text-center">
        <h5>
          <span className="badge bg-secondary">{state}</span>
        </h5>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              dispatch({
                type: 'Increment',
              })
            }
          >
            Inc
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              dispatch({
                type: 'Decrement',
              })
            }
          >
            Dec
          </button>
        </div>
      </div>
    </>
  );
};
export default Reducer;
