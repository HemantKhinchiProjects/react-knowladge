import React from 'react';
/*Hooks Example*/
import State from './useState/State.js';
import Ref from './useRef/Ref.js';
import Reducer from './useReducer/Reducer.js';
import Effect from './useEffect/Effect.js';
const Hooks = () => {
  return (
    <>
      <div className="bd-callout bd-callout-info mb-0">
        <h4>
          React Hooks <i class="fa-solid fa-anchor"></i>
        </h4>
      </div>
      <div className="highlight mb-0">
        <h1></h1>
        <i>
          Hooks were added to React in version 16.8. Hooks allow function
          components to have access to state and other React features. Because
          of this, class components are generally no longer needed. :)
        </i>
      </div>
      <p className="alert alert-warning">
        Although Hooks generally replace class components, there are no plans to
        remove classes from React.
      </p>

      <State />
      <Ref />
      <Reducer />
      <Effect />
    </>
  );
};
export default Hooks;
