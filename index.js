// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 return gifts;
}

wrapGifts(gifts);

function writeCards (names,eventName){
//We have just created our writeCards function
let messages = [];
// We just created an empty Array
for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    debugger;
    //iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;
    messages.push(message);}
 return messages;


}
writeCards(["Charlie", "Samip", "Ali"], "birthday");



    // We are adding the for loop to iterate: To execute the code once for each item in the Array.
    // We are using i as our counter variable: keeps track of the number of times this piece of code is executed.
    // This piece of code is saying that our counter is 0 and that it'll increment until it reaches the amounf of the array
//The writeCards() function will now iterate over the names array, build custom 'thank you' messages for each name, add them to the messages array, and finally return the array.
 




// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]




function countDown(number) {
    while (number >= 0) {
      console.log(number--);
    }
  }

