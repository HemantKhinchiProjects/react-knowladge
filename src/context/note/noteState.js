import React from 'react';
import Context from './context';
const NoteState = (props) => {
  const state = {
    name: 'Hemant',
    class: 'A1',
  };
  return <Context.provider value={state}>{props.children}</Context.provider>;
};
export default NoteState;
