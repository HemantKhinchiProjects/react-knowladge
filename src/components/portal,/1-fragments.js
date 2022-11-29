React mko chiye ki sabhi return element ek singal parent component main ho. react main 2 subling element rea=turn nahi kar sakte. 

// this syntax is invalid
function MyComponent() {
  return (
    <h1>My header</h1>
    </p>My paragraph</p>
  );
} 
React fragment ko hum. 2 type se likha sakte hai.
// valid syntax
function MyComponent() {
  return (
    <>
      <h1>My header</h1>
      </p>My paragraph</p>
    </>
  );
} 
Type 1.
<React.fragment>
....
</React.fragment>
Type 2.
<fragment>...</fragment>
Type 3.
<>...</> // mostely and commenly use and handy