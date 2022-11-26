//Scenario
/*1: App
2:Expenses
3:New_Expenses
*/
// Jub humne data "New_Expenses" component mai generat kiya hai. lekin us deta ki jarurat "Expenses" component  ko hai. to is condistion mai hum data "App" component ko use karte huye "Expenses" component ko pass karenge. kyo ki humare pass 2 sublings ke bich koi direct connection nahi hota hai.data hum direct nahi bhej sakte.is condistion main hum data [closest parent component]ki help se bhej sakte hai, is pattren ko [state lifting] bolte hai. 
