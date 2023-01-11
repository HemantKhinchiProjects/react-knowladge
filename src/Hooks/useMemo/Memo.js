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
    <div className="my-4">
      <p>This is {isEven ? 'Even Number' : 'Odd Number'}</p>
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
  );
};
export default UMemo;
