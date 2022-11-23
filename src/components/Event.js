https://reactjs.org/docs/events.html#clipboard-events
Clipboard Events
onCopy 
onCut 
onPaste

Keyboard Events
onKeyDown 
onKeyPress 
onKeyUp

Focus Events
onFocus
onBlur

function Example() {
  return (
    <input
      onBlur={(e) => {
        console.log('Triggered because this input lost focus');
      }}
      placeholder="onBlur is triggered when you click this input and then you click outside of it."
    />
  )
}
