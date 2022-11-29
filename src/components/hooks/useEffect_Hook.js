agar hume react ko bahar ke world se judna chahate hai, jese ki agar hum API use kar rahe hai. then we use the useEffect hook. useEffect hooks ek side effect ki tarha kam karta hai. matlab esa oprastion karna jo humari application ke bahar mojud ho. jiske result ka hum anuman nahi laga sakte hai. 

iska basic syntex main pahala argument ek  function hota hai. or dusara argument  ek Array hota hai.

//Eexample:
import { useEffect } from 'react';

function MyComponent() {
   useEffect(() => {
     // perform side effect here
   }, []);
}
Note: agar hum koi data fatch karna chahate hai to hume useEffect ka use karna chiye. jese koi list lane or dikhane main. agr hume effect se milne wali value ko use karne ki jarurat hai to ise dependencies array mai rakhne ki jarurat hai.



//Eexample:
import { useEffect } from 'react';

function PostList() {
	 const [posts, setPosts] = useState([]);

   useEffect(() => {
	   fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(posts => setPosts(posts));
   }, []);

   return posts.map(post => <Post key={post.id} post={post} />
}
note: agar value change hoti hai to effect function fir se re-executed hota hai.
//For example, here is a bit of code that adds or removes the class “overflow-hidden” to the body element whenever the mobile menu is opened or closed.
function Mobile({ open }) {
  useEffect(() => {
    const body = document.querySelector("#__next");

    if (open) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [open]);
 
  // ...
}