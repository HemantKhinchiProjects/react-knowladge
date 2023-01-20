import React from 'react';
import PersonOne from '../personOne/PersonOne.js';
const HocSample = () => {
  return (
    <>
      <div className="bd-callout bd-callout-info mb-0">
        <h4>React HOC sample</h4>
      </div>
      <div className="highlight mb-0">
        <p>
          A higher-order component (HOC) is an advanced technique in React for
          reusing component logic. HOCs are not part of the React API, per se.
          They are a pattern that emerges from React's compositional nature.
          Concretely, a higher-order component is a function that takes a
          component and returns a new component.
        </p>
      </div>
      <hr></hr>
      <i>Example</i>
      <PersonOne />
      <PersonTwo />
      <hr></hr>
    </>
  );
};
export default HocSample;
