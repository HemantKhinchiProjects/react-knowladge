import React, { useState } from 'react';
const HocSet = (HComponent) => {
  function HOCComponent() {
    const [amount, setAmount] = useState(5);
    const handlerAdd = () => {
      setAmount(amount + 1);
    };
    return <HComponent amount={amount} handlerAdd={handlerAdd} />;
  }
  return HOCComponent;
};
export default HocSet;
