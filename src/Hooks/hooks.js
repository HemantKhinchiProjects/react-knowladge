import React from 'react';
import HooksTitle from '../components/hooks/hooksTitle.js';
/*Hooks Example*/
import State from './useState/State.js';
import Ref from './useRef/Ref.js';
import Reducer from './useReducer/Reducer.js';
import CustomHooks from './customHooks/custom.js';
import Effect from './useEffect/Effect.js';
import Callback from './useCallback/Callback.js';
import UMemo from './useMemo/Memo.js';
const Hooks = () => {
  return (
    <>
      <HooksTitle />
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

      {/* <State /> 
      <Ref />
      <Reducer />
      <CustomHooks />
      <Effect />*/}
      <div className="alert alert-warning mt-4" role="alert">
        Summary: useCallback is used to memoize callback functions, so that the
        same function is passed down to child components, avoiding unnecessary
        re-renders. useMemo is used to memoize the computation of expensive
        values, only recalculating them when the dependencies change, which
        leads to more efficient performance.
      </div>
      <Callback />
      <UMemo />
    </>
  );
};
export default Hooks;
