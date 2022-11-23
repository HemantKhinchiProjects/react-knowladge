// Humara component ek tarha se ek function hi hai. bus iski importent this ye hai ki ye hume JSX provide karta hai.to function hone kiwajha se React ise call  karta hai. but hum ise call nahi karte. bus hum ise HTML ki tarha use karte hai. par undar se ye function ki tarha hi hai. to jab hume ki or function ko call karte hai. to wo hume react ko batana hota hai. isliye jub bhi hume DOM (Document object module ) ko change or update karna hota hai. to hooks ki jarurat hoti hai. react mai bina hooks ke hum DOM change & update nahi kar sakte. ye sabhi index.js file se start hota hai.

/*React hooks impotent rules:-

1. that you must only call react hooks in react functions.

2. The second important rule is that you must only call react hooks at the top level of your react component functions

3.And that's the use effect hook there make sure that you always add everything you refer to inside of use effect as a dependency unless there is a good reason not to do that.*/

//UseState
/*is hooks ka use hum value ko update karne ke liye karte hai. ye usi component ko update karega jusko hum update karana chahate hai. dusare component pe iska effect nahi hoga. hum multipal Usestate use kar sakte hai. jub hum ise call karte hai to humare pass 2 argument hote hai,
1. varble hota hai junha hume batana hota hai ki hume kon se value update karni hai.
2. dusara function hota hai jiski help se hum number 1 var ki value update/change kar sakte hai.
*/
// Note: aksar hum state ko value update karne ke liye onclick ka use karte hai. but esa jaruri nahi hai ki hum ise click event pe hi update karye. bina click ke bhi hum ye kar sakte hai.humare pass koi bhi karan ho hum update kar sakte hai. for example HTTP Request update.
//Example:
import React, { useState } from 'react';

function ExpenseItem(props) {
  //new var  function          existing var value
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('click'); // update value function
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2> //Update var value
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}
//state can be update in many way
