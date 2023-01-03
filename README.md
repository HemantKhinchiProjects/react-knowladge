# react-knowladge

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-xauae1)

[Important and commenly use]

1. Condistion
2. for loop and the array map() function
   example:
   const products = [
   { title: 'Cabbage', id: 1 },
   { title: 'Garlic', id: 2 },
   { title: 'Apple', id: 3 },
   ];

const listItems = products.map(product =>

  <li key={product.id}>
    {product.title}
  </li>
);

return (

  <ul>{listItems}</ul>
);
# Updating the screen
