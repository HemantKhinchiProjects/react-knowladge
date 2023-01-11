import React, { useState, useMemo } from 'react';
import Child from './child/Child';
const UMemo = () => {
  const [value, setValue] = useState(0);

  const handlerUpdate = () => {
    console.log('01');
    setValue(value + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return value % 2 === 0;
  }, [value]);
  return (
    <div>
      <Child />
      <p>This is {isEven ? 'Even Number' : 'Odd Number'}</p>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handlerUpdate}
      >
        increase {value}
      </button>
    </div>
  );
};
export default UMemo;
