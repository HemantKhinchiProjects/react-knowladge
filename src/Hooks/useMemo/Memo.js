import React, { useState, useMemo } from 'react';
const UMemo = () => {
  const [value, setValue] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);

  const handlerUpdate = () => {
    console.log('01');
    setValue(value + 1);
  };
  const handlerUpdateTwo = () => {
    console.log('02');
    setValueTwo(valueTwo + 1);
  };
  // const isEven = () => {
  //   console.log('-------------------------');
  //   let i = 0;
  //   while (i < 200000000) i++;
  //   return value % 2 === 0;
  // }; //This function call unnessary in handlerUpdateTwo so application purformance will slow. so will improve purfomance i will use usememo below
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return value % 2 === 0;
  }, [value]);
  return (
    <>
      <div>
        <hr></hr>

        <h4 className="alert-heading">
          <i>
            UseMemo <i className="fa-solid fa-anchor"></i> Example
          </i>
        </h4>
        <hr className="mb-0"></hr>
        <div className="highlight mb-0">
          <p>
          This hook is used to calculate and store a value that is derived from
          other values. It is similar to useEffect, but it only runs when one of
          the dependencies changes. Use this hook when you have some expensive
          computation, you only want to compute it when some values changed.
          </p>
          <ul>
            <li>useCallback This can improve Performance.!</li>
          </ul>
        </div>
      </div>
      <div className="my-4">
        <p>This is {isEven ? 'Even Number' : 'Odd Number'}</p>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handlerUpdate}
          >
            increase {value}
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handlerUpdateTwo}
          >
            Dicrease {valueTwo}
          </button>
        </div>
      </div>
    </>
  );
};
export default UMemo;
