import foods from "./foods";
import { choice, remove } from "./helpers";

let fruit = choice(foods);
console.log(`I'd like one ${fruit}, please.`);
console.log(`Here is a ${fruit} for you!`);
console.log(`Delicious! May I have another?`);


let leftovers = remove(foods, fruit);

console.log(`I'm sorry we only have ${leftovers}`);
