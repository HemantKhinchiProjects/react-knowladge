import React, { memo } from 'react';
const Child = ({ valueOne, setValueOne }) => {
  console.log('child component');
  return (
    <>
      <div className="alert alert-warning" role="alert">
        A simple Child alert—check it out!
      </div>
    </>
  );
};
export default memo(Child);
