import React, { useState } from 'react';
import HocSet from '../HOCSetup/HocSet';
const PersonOne = ({ amount, handlerAdd }) => {
  return (
    <>
      <div>
        PersonOne is offering ${amount}
        <button type="button" class="btn btn-success" onClick={handlerAdd}>
          Add
        </button>
      </div>
    </>
  );
};
export default HocSet(PersonOne);
