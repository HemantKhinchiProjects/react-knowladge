import React, { useState } from 'react';
import Context from './context';
const NoteState = (props) => {
  const s1 = {
    name: 'Hemant',
    class: 'A1',
  };
  const [state, setState] = useState(s1);
  const handlerUpdate = () => {
    setTimeout(() => {
      setState({
        name: 'Hemant Khinchi',
        class: 'A 001',
      });
    }, 2000);
  };
  return (
    <Context.Provider value={{ state, handlerUpdate }}>
      {props.children}
    </Context.Provider>
  );
};
export default NoteState;
