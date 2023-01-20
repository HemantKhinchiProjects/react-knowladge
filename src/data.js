import React from 'react';
import State from './Hooks/useState/State.js';
import Ref from './Hooks/useRef/Ref.js';
import Reducer from './Hooks/useReducer/Reducer.js';
import CustomHooks from './Hooks/customHooks/custom.js';
import Effect from './Hooks/useEffect/Effect.js';
const people = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'UseState Example',
    title: 'UseState Example',
    detail:
      'useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.',
    component: <State />,
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'UseRef Example',
    title: 'UseRef Example',
    detail:
      'If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.',
    point:
      'useRef() only returns one item. It returns an Object called current.',
    component: <Ref />,
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'UseReducer  Example',
    title: 'UseReducer  Example',
    detail:
      'when we work with multipal state, we need to use UseReduce instad of useState. in that condistion we use useReducer. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.',
    point: 'The useReducer Hook returns the current stateand a dispatchmethod.',
    component: <Reducer />,
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'UseCustom  Example',
    title: 'UseCustom  Example',
    detail:
      'Custom hooks are functions that allow you to reuse stateful logic and share it across components. They let you use React features, like state and context, without writing a class.. ',
    point: 'Custom Hooks! most widly used',
    component: <CustomHooks />,
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'UseEffect  Example',
    title: 'UseEffect  Example',
    detail:
      'To impliment life cycle method in function component. we have hook useEffect. useEffect return a function. The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. it will call automaticly.',
    point: 'useEffect Hooks! most widly used :-)',
    component: <Effect />,
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'UseCallback  Example',
    title: 'UseCallback  Example',
    detail:
      'This hook is used to prevent a callback function from being recreated every time the component re-renders. By using useCallback, you can ensure that the same function is passed down to a child component, which can help to avoid unnecessary re-renders.',
    point: 'useCallback This can improve Performance!',
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'UseMemo  Example',
    title: 'UseMemo  Example',
    detail:
      'This hook is used to calculate and store a value that is derived from other values. It is similar to useEffect, but it only runs when one of the dependencies changes. Use this hook when you have some expensive computation, you only want to compute it when some values changed.',
    point: 'useCallback This can improve Performance!',
  },
];

export default people;
