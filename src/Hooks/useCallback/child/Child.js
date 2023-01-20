import React, { memo } from 'react';
const Child = ({ valueOne, setValueOne }) => {
  console.log('child component');
  return (
    <>
      <div className="alert alert-dark " role="alert">
        A simple Child Component for check!
      </div>
    </>
  );
};
export default memo(Child);
