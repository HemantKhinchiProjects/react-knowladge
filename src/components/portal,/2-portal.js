react portal bhi react fragment ki tarha hi hai ye bhi hume cleaner code likhane main help karta hai. mostely iska use overlay component ko present karne ke liye hota hai. like: modal, toggle, alert, toster, notification etc. 

portal ko 2 chijo ki jarurat hoti hai.
1.jagha jnha aap  component ko port karana chahate hai.
2. aap ko component ko iske bare main batana hoga.

// fragment syntax
function MyComponent() {
  return (
    <>
      <myModal/>
      <myInputForm/>
    </>
  );
} 
/* <section>
<h2>Some Other element....</h2>
<div class="my-modal">
  <h2>A modal title</h2>
</div>
<form>
  <label>user name</label>
  <input type="text"/>
<form>
</section>*/ //Technicaly this is fine But this is not Right becouse modal humesh </body> ke pahale close hona chiye. becouse ye page ko overlay ke kaam aata hai. jo ki is syntex main nahi hai.