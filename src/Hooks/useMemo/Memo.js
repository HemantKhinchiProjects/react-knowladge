import React, { useState } from 'react';
const UMemo = () => {
  const [value, setValue] = useState(0);
  const handlerUpdate = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h4>Use memo</h4>
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={handlerUpdate}
      >
        Primary {value}
      </button>
      <button type="button" class="btn btn-outline-secondary">
        Secondary
      </button>
    </div>
  );
};
export default UMemo;
