import {users} from "./data.js";






function addUser(arr, name, lastname, age, job, email, password) {
  let newUser = {
    id:users.length==0 ? 1 : users.at(-1).id+1,
    name,
    lastname,
    age,
    job,
    email,
    password,
  };

  return users.push(newUser);
}


  addUser(
    "john doe",
    "macgregor",
    34,
    "boxer",
    "johndoe@gmail.com",
    "1234",
  ),

console.log(users);




const masalalar = {
    m100: str => str.split('*')[0].repeat(Number(str.split('*')[1])),
    m101: n => (n * (n + 1)) / 2,
    m102: (num, obj) => num >= obj.min && num <= obj.max,
    m103: n => String(n ** 2).endsWith(String(n)),
    m104: arr => arr.map((val, idx) => val + idx),
    m105: drinks => drinks.filter(d => !["cola", "fanta"].includes(d)),
    m106: n => String(Math.abs(n)).length,
    m107: n => Number(String(n).split('').sort((a, b) => b - a).join('')),
    m108: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    m109: n => [...String(n)].reduce((sum, d) => sum + Math.pow(Number(d), String(n).length), 0) === n,
    m110: str => (str.match(/[A-Z]/g) || []).length
};

console.log(masalalar.m100("div*2"));                  // "divdiv"
console.log(masalalar.m101(10));                       // 55
console.log(masalalar.m102(4, { min: 0, max: 5 }));    // true
console.log(masalalar.m103(6));                        // true
console.log(masalalar.m104([1, 2, 3, 4, 5]));          // [1, 3, 5, 7, 9]
console.log(masalalar.m105(["fanta", "cola", "water"])); // ["water"]
console.log(masalalar.m106(123));                      // 3
console.log(masalalar.m107(123));                      // 321
console.log(masalalar.m108(5, 9));                     // 5 va 9 oralig'idagi random son
console.log(masalalar.m109(153));                      // true
console.log(masalalar.m110("fvLzpxmgXSDrobbgMVrc"));   // 6