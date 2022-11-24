/*Two way binding?*/
/*// useState mai hum na kewal input lete hai bulki use update karke wapas bhi karte hai ye hi two-way binding kahalata hai. jesa ki form input 'value' mai humne kiya hai. whener we use 2way binding. we control the component.
Example:*/

const [enterdTitle, SetenterdTitle] = useState('');

const amountChangeHandler = (event) => {
  SetenterdTitle(event.target.value);
};

<input type="number" onChange={amountChangeHandler} value={enterdTitle} />;

/*Listing to user input
//Focus Events
onFocus
onBlur
onChange = change Get on every key strok 
*/
//onSubmit event is the browser default this is help for form submit
