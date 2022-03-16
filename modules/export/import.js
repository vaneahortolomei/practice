//class example for import/export
import {add, sub, random, user as admin, users} from "./calc.js";

import {calc, users as persons} from "./helper.js";

console.log(add(2));
console.log(sub(2));
console.log(random(2));

console.log(admin(users));

console.log(`Total: ${calc(persons)}$`);

