const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gift){
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl`);
        debugger;
    }


return gifts;
}
wrapGifts(gifts);

const names = ["barry", "dash", "jacob"];
const event = "birthday"

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
      console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
}

writeCards(names,Event );

let i = 0
function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--;
    }
}
countDown(10);