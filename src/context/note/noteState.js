import React from 'react';
import Context from './context';
const NoteState = (props) => {
  const state = {
    name: 'Hemant',
    class: 'A1',
  };
  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
export default NoteState;
