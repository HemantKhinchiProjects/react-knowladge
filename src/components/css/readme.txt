External css
//normaly jab bhi hum koi new component banate hai to us component ki style file sath mai banate hai. folder ki css hum niche bataye example ki tarha eccess kar sakte hai.

External Example 1:
import './ExpenseDate.css';

Example 2 ( with object name):
import Classes from './filename.css';

Example 3: (Multipal class name add)
<header className={`${classes.header} ${classes.blink_me}`}>

/*Whay we use css module, what is benifit?*
css module ka use karne se hum class name ko overwrite karne se rokate hai. generally hum jab css banate hai to name dete time jyada dhyan nahi dete or agar humne koi css name kisi component ke liye banaya hai or wo hi name humne humari root style mai bhi use kar liya to humari component class root class se overwrite ho jaye gi. isse bachane ke liye css module ka use kiya jata hai. example mai dikhaya us tarha. 

import rfs from './App.module.css';

Example:
export default function App() {
  return (
    <div className={rfs.text}>
      <h1>Hello StackBlitz!</h1>
      <Test />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

Inline css
style={{"left":"71.2%"}}

