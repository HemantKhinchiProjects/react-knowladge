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
      <div className="col-md-4 mx-auto text-center">
        <h5>
          Example UseState <span className="badge bg-secondary">{number}</span>
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
