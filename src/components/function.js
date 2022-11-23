//jab bhi hum function define karte hai to name dete hai, name main handler ka use karna chiye taki pata chale ye function name hai.
const clickHandler = () => {
  console.log('click');
};
/*nameing convenstion*/
Handler;

// kisi bhi event main function assign karnge to () use nahi karna hai, isse function direct exicute ho jaye ga. becouse wo paha le se hi JSX function mai hai. hume sirf name hi dena hai for example. is se ye tab hi work kare ga jab hum function call karenge.

<button onClick={clickHandler}>Change title</button>;
