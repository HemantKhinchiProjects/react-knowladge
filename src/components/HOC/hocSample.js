import React from 'react';
import PersonOne from './personOne/PersonOne.js';
import PersonTwo from './personTwo/PersonTwo.js';
const HocSample = () => {
  return (
    <>
      <div className="bd-callout bd-callout-info mb-0">
        <h4>
          React HOC sample <i className="fa-solid fa-hammer"></i>
        </h4>
      </div>
      <div className="highlight mb-0">
        <i>
          A higher-order component (HOC) is an advanced technique in React for
          reusing component logic. HOCs are not part of the React API, per se.
          They are a pattern that emerges from React's compositional nature.
          Concretely, a higher-order component is a function that takes a
          component and returns a new component.
        </i>
      </div>
      <hr></hr>
      <i>HOC Example </i>
      <i className="fa-solid fa-hammer"></i>
      <PersonOne />
      <PersonTwo />
      <hr></hr>
    </>
  );
};
export default HocSample;
