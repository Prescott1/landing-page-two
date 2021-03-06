const addUp = (a = 30, b = 40) => a + b;

const FIRSTNAMEARRAY = ["Jordan", "Akiya", "Jamie", "Robert"];

const FIRSTANDLASTNAMES = [
  "Prescott",
  "Thompson",
  "Prescott",
  "Prescott",
  ...FIRSTNAMEARRAY,
]; // Using spread to operator to spread the FIRSTNAMEARRAY to the FIRSTANDLASTNAMES arrays.

FIRSTANDLASTNAMES.push("Hello"); //  I pushed Hello on to the FIRSTANDLASTNAMES array.

const objectUserInfo = {
  password: "RedGreenLL",
  userName: "yellowBull",
  age: 10000,
  height: 5.8,
};

const { userName, age } = objectUserInfo;

const { userName: myUserName } = objectUserInfo;

const nestedObject = {
  today: { lw: 50, hg: 55 },
  tomorrow: { lw: 38, hg: 49 },
};

const {
  today: { lw: low },
} = nestedObject;
console.log(low);

const OBJECTLIST = (name, age, height) => ({ name, age, height }); // this creates an object

const NEWOBJECT = (car, city, state) => ({ car, city, state }); // this created a object where you input the data after you call it.

const THISARRAY = [OBJECTLIST, NEWOBJECT, nestedObject];

const OBJECTWITHARRAY = {
  myUserName: "REdBlueYellow",
  myPassword: "GreenPurple",
  myAge: 10000,
  likes: ["riding", "hiking", "walking", "running", "video games", "coding"],
};

const addThisUp = (sumOne = 20, sumTwo = 75) => sumOne + sumTwo; // A arrow function with fallback values of 20 and 75.

const TOSMALL = "Still to small";
const GOHIGHER = "Go higher";
const THATSRIGHT = "That's right";

const userInput = (sum) => {
  if (sum <= 0) {
    return "WAY TO SMALL";
  } else if (sum <= 5) {
    return TOSMALL;
  } else if (sum <= 10) {
    return GOHIGHER;
  } else {
    return THATSRIGHT;
  }
};

const RESTFUNCTION = (...sums) => sums; // I created a arrow function with the rest parameter of sums.

const ARRAYOFNUMS = [454, 567, 768, 23, 45, 890];

const REDUCARRAYOFNUMS = ARRAYOFNUMS.reduce((total, amount) => total + amount);

const ThisThing = (name, age, gender) => ({ name, age, gender });

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};

bicycle.setGear(10);

console.log(bicycle.gear);

class UserName {
  constructor(name) {
    this.name = name;
  }
}

const name = new UserName("Jordan");

class UserInfo {
  constructor(userName, userPassWord, userDateOfBirth, userLives) {
    this.userName = userName;
    this.userPassWord = userPassWord;
    this.userDateOfBirth = userDateOfBirth;
    this.userLives = userLives;
  }
}

const allInfoForUser = new UserInfo(
  "Let-Archer",
  "GrEEnReDDOne",
  `10/21/73`,
  "Peoria"
);

const someArray = ["me", "that", "this", "seen", "the"];
const someObject = {
  thatName: "Goodbye World",
  thisName: "I want to get good at this",
  WhatImIDoing: "What am i doing wrong.",
  noOne: "I have noone to talk to",
  thatArray: ["yep", "I need to learn", "More", "info", "asap"],
  aRandomFunction() {
    return `Why do I feel like poop, I feel like i can't learn this sometimes. ${this.thisName}`;
  },
};

const { thatName: goodBye } = someObject;
console.log(goodBye);


const oldArray = ["Jordan","Prescott","Akiya","Thompson"];
const newArray = [...oldArray,"Jamie","Prescott"]; // Using the spread operator to share the data from oldArray to newArray.
console.log(newArray);

const randomObject = {
    someName: "Jordan",
    someLastName: "Presscott",
    age: 25
};

const spreadObject = {
    ...randomObject,  // Using the spread operator to share the data from randomObject to the new object to spreadObject.
    likesToDo: ["Coding","Programming","Woodworking","Walking"]
};

console.log(spreadObject);


