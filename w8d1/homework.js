// function mysteryScoping1() {
//   var x = "out of block";
//   if (true) {
//     var x = "in block";
//     console.log(x);
//   }
//   console.log(x);
// }

// function mysteryScoping2() {
//   const x = "out of block";
//   if (true) {
//     const x = "in block";
//     console.log(x);
//   }
//   console.log(x);
// }

// function mysteryScoping3() {
//   const x = "out of block";
//   if (true) {
//     var x = "in block";
//     console.log(x);
//   }
//   console.log(x);
// }

// function mysteryScoping4() {
//   let x = "out of block";
//   if (true) {
//     let x = "in block";
//     console.log(x);
//   }
//   console.log(x);
// }

// function mysteryScoping5() {
//   let x = "out of block";
//   if (true) {
//     let x = "in block";
//     console.log(x);
//   }
//   let x = "out of block again";
//   console.log(x);
// }

const madLib = (verb, adjective, noun) => {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`;
};

const isSubstring = (searchString, subString) => {
  return searchString.includes(subString);
};

const fizzBuzz = (arr) => {
  let res = [];
  for (const el of arr) {
    if (!(el % 3) ^ !(el % 5)) res.push(el);
  }
  return res;
};

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i++) {
    if (!(number % i)) return false;
  }
  return true;
};

const sumOfNPrimes = (num) => {
  let res = 0;
  let i = 2;
  while (num) {
    if (isPrime(i)) {
      res += i;
      num--;
    }
    i++;
  }
  return res;
};
