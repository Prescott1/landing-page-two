const addUp = (a = 30, b = 40) =>  a + b;

const FIRSTNAMEARRAY = ["Jordan","Akiya","Jamie","Robert"]

const FIRSTANDLASTNAMES = ["Prescott", "Thompson", "Prescott", "Prescott", ...FIRSTNAMEARRAY] // Using spread to operator to spread the FIRSTNAMEARRAY to the FIRSTANDLASTNAMES arrays.

FIRSTANDLASTNAMES.push("Hello") //  I pushed Hello on to the FIRSTANDLASTNAMES array.

const objectUserInfo = {
    password: "RedGreenLL",
    userName: "yellowBull",
    age: 10000,
    height: 5.8
}

const {userName,age} = objectUserInfo

const {userName: myUserName} = objectUserInfo

const nestedObject = {
    today: {lw: 50, hg:55},
    tomorrow: {lw: 38, hg: 49}
}

const {today:{lw:low}} = nestedObject
console.log(low)




const OBJECTLIST = (name, age, height) => ({name, age, height}) // this creates an object 


const NEWOBJECT = (car, city, state) => ({car, city, state}) // this created a object where you input the data after you call it.

const THISARRAY = [OBJECTLIST, NEWOBJECT,nestedObject];


const OBJECTWITHARRAY = {
    myUserName: "REdBlueYellow",
    myPassword: "GreenPurple",
    myAge: 10000,
    likes: ["riding","hiking","walking","running","video games", "coding"]
}


