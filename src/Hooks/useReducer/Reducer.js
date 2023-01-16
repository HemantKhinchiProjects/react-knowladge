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
      <div className="col-md-4 mx-auto text-center">
        <h5>
          Example useReducer <span className="badge bg-secondary">{state}</span>
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
