import React from 'react';
import HocSet from '../HOCSetup/HocSet';
const PersonTwo = ({ amount, handlerAdd }) => {
  return (
    <div className="mt-4">
      PersonTwo is offering ${amount}
      <button type="button" class="btn btn-info" onClick={handlerAdd}>
        Add
      </button>
    </div>
  );
};
export default HocSet(PersonTwo);
