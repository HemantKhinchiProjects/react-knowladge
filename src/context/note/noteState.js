import React from 'react';
import Context from './context';
const NoteState = (props) => {
  return <NoteState.provider>{props.children}</NoteState.provider>;
};
export default NoteState;
