import React, { useState } from 'react';
const UMemo = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h4>Use memo</h4>
      <button type="button" class="btn btn-outline-primary">
        Primary {value}
      </button>
      <button type="button" class="btn btn-outline-secondary">
        Secondary
      </button>
    </div>
  );
};
export default UMemo;
