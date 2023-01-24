import React, { memo } from 'react';
import './style.css';
/*Hooks Example*/
import Hooks from './Hooks/hooks.js';
//Map example
import Map from './components/map/Map';

//High Order Function
import HocSample from './components/HOC/hocSample.js';

//import context API file
import NoteState from './context/note/noteState.js';
import NoteAccess from './components/noteAccess/noteAccess.js';
const App = () => {
  return (
    <>
      <NoteState>
        <div className="container">
          {/* HOC sample */}
          <HocSample />
          <br />
          {/* Hooks Sample */}
          <Hooks />
          {/* map Example and featch example */}
          <Map />
          {/* ContextAPI  Example  */}
          <NoteAccess />
        </div>
      </NoteState>
    </>
  );
};
export default memo(App);
