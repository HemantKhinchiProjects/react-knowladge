import React, { useContext, useEffect } from 'react';
import Context from '../../context/note/context.js';
const NoteAccess = () => {
  const a = useContext(Context);
  useEffect(() => {
    a.handlerUpdate();
  }, []);
  return (
    <>
      <div>
        <hr></hr>
        <h4 className="alert-heading">
          <i>
            <i class="fa-brands fa-react"></i> Context API Example
          </i>
        </h4>
        <hr className="mb-0"></hr>
        <div className="highlight mb-0">
          <p></p>
          <ul>
            <li> </li>
          </ul>
        </div>
      </div>
      This is the import name from context API
      <strong>
        {' '}
        {a.state.name} {a.state.class}
      </strong>
      <ul>
        <li>First create context file</li>
        <li>create another file where we can import context file</li>
        <li>make "fileName".Provider </li>
        <li>We send data from Provider by Value={}</li>
        <li>
          Create children so other componet will be display without problem
        </li>
        <li>In which file we want to use there import context file</li>
        <li>
          Import useState from React and after apply useContext and file name
        </li>
      </ul>
    </>
  );
};
export default NoteAccess;
