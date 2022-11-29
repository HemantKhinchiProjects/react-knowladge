/*useRef humko direct JSX element ko access karne deta hai. iska use karke hum direct JSX ko access kar sakte hai.

useRef ka use karne ke liye. ise call karna hota hai, or lotai gai value ka use kare. or ise "ref Prop" mai rakhana hota hai.

Ref ke component main built-in prop nahi hota. kewal react element hote hai.*/

//basic syntax for useRef:

import { useRef } from 'react';

function MyComponent() {
  const refCom = useRef();

  return <div ref={refCom} />;
}

//ek bar jub refrance ko kisi element mian jod diya jata hai. to hum "ref.current" se us element ko access easly kar sakte hai.

/*//For example
humare pass ek input hai usko hume "ctrl+L / click" karke access karna chahate hai. 
to hum useRef ka use karke directly access kar sakte hai. niche uska example diya hai.*/

Note: import { useWindowEvent } from '@mantine/hooks';
import { useRef } from 'react';

function Header() {
  const inputRef = useRef();

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyK' && event.ctrlKey) {
      event.preventDefault();
      inputRef.current.focus();
    }
  });

  return <input ref={inputRef} />;
}
