useRef humko direct JSX element ko access karne deta hai.

useRef ka use karne ke liye. ise call karna hota hai or lotai gai value ka use kare. or ise "ref Prop" mai rakhana hota hai.

Ref ke component main built-in prop nahi hota. kewal react element hote hai.

//basic syntax for useRef:

import { useRef } from 'react';

function MyComponent() {
  const refCom = useRef();

  return <div ref={refCom} />
}

ek bar jub refrance element dene ke liye jod diya jata hai. to hum "ref.current" se us element ko access kar sakte hai.

//For example
jese ko hum koi code likhate hai. Jiska focus search input hota hai. or user ctrl+k press karta hai