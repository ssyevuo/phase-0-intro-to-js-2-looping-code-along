// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(names = ["Guadalupe", "Ollie", "Aki"], birthday) {
    const messages = [];
    
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
    }
    
    return messages;
  }

  //while loop
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  
