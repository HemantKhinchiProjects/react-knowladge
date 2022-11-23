What is props?
Props function “Argument” ki tarha kaam karta hai. Props ko HTML mai Attribute ki tarha pass kiya jata hai. Or kisi dusre component mai access kiya jata hai. Ye deta ek component se dusare component main bhejne ke liye use hota hai. Props ko hum property bhi bol sakte hai.
stap 1: jese Expenses component mai data bheja ja raha hai jiska name “Items” diya gaya hai.

export default function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Expenses items={expenses} />
    </div>
Stap 2: niche us props Data ko access kiya ja raha hai. Jiske liye Hume pahale function argument mai (props) likhana jaruri hai. Hum ise direct name se bhi access kar sakte the. Jo name humne component property mai diya tha. See in example 2.
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
}

Example 2:
