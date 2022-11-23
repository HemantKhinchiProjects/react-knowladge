What is Props.children (Composition)?

Jab hume ‘A’ component mai ‘B’ component ko use karte hai to hum Props.children ka use karte hai.
Example: agar “A” component mai B component ko Access kiya hai to child component ki css bhi Access karne ke liye hume is tarha se likhana hoga. Tabhi hume child component ki css ka effect mil paye ga.
function Card(props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}
 Or jo humne component use kitya hai uske liye {Props.children} ka use karke ek component ko multiple time use kar sakte hai. Taki hume bar bar css nahi likhani pade.
