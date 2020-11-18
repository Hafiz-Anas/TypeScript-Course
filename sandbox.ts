// 1=>BASICS=>==================================================
let rolnumbr = 55;
// rolnumbr = '5';
 
const cric = (diameter: number) => {
  return diameter * Math.PI;
}
let result = cric(6);
// console.log(result);


// 2=>ARRAYS & OBJECTS =========================================
let names = ['yoshi', 'chunli', 'rehan'];
// names.push(10);
let someMixed = ['chunli', 20, 'johar', 40];
someMixed[0] = 1;
someMixed.push('joshi');

let team ={
  name: 'arena',
  shirtcolor: 'blue',
  number: 50
}
// team.shirtcolor = 04;
team.shirtcolor = 'red';
// team.play = 'cricket';
team = {
  name: 'arena',
  shirtcolor: 'blue',
  number: 50,
  // play: 'cricket'
}

// 3=>EXPLICIT TYPES=============================================
let job: string;
let jobNo: number|string|boolean;
job = 'duty';
jobNo = false;

// FOR ARRAY
let players: string[] = [];
// players.push(44);
players[0] = '34';
// console.log(players)

// FOR MIXED DATATYPE ARRAY
let multipleTypes: (string|number|Boolean)[] = [];
multipleTypes.push(false);
// console.log(multipleTypes)

// FOR OBJECTS
let userOne: {};
userOne = {name: 'fahad', age: 20};

let userTwo: {
  name: string,
  age: number
}
userTwo = {
  name: 'chand',
  age: 20
}

// 4=>DYNAMIC (ANY)==============================================
let wireter : boolean|number;
wireter = false;
// let member: any[];
// member.push('chunli');
let members: any[];
members = ['lugin', 'chunli', 1, false];
// console.log(members);

let someUser: {
  name: string,
  age: number,
  title: any
};
someUser = {
  name: 'johar',
  age: 39,
  title: false
}


// 5=>TUPLES=====================================================
let jobs: [string, string, number, boolean];
jobs = ['chunli', 'johar', 33, false];
// console.log(jobs);

let mySelf: [string, string, number, boolean];
mySelf = ['f', 'f', 2, false];
// console.log(mySelf);

let yourSelf: [number, number, string, number];
yourSelf = [2,2,'s',2];
// console.log(yourSelf);

//====SOME INOF====
let man: string[];
let manTwo: (string|number)[];
let manThree: any[];
let manFour: [string, number, boolean, string];


// 6=>FUNCTION BASICS============================================
let we: Function;
we = (a: string, b: string, c?: any) => {
  // console.log(`you are ${a} and i am ${b} we are ${c}`);
}
we('john','chand');

let add: Function;
add = (a: number, b: number, c?: number) => {
  return( a + b);
}
// console.log(add(10, 10))


// 7=>TYPE ALIASES===============================================
// example=1
type numorStr = string|number;
let myFunc: Function;
myFunc = (item: string, id: number|string) => {
  return(`Now the item is ${item} and the id of item is ${id}`)
}
// console.log(myFunc('Desktop', 22));

// example=2
type urObj = {item: string, id: numorStr}
let worker = {
  item: 'table',
  id: 3
}
let myFunc2: Function;
myFunc2 = (user: urObj) => {
  console.log(user.item);
}
// myFunc2(worker);

// example=3
type carObj = {color: string, modal: number, number: string};
let carDetails = {
  color: 'pink',
  modal: 2017,
  number: 'LLB654'
}
let myFunc3 = (car: carObj) => {
  console.log(`The Color of Car is ${car.color}... The Modal of Car is ${car.modal}... The Number of Car is ${car.number}...`);
}
// myFunc3(carDetails);


// 8=>FUNCTION SIGNATURES=========================================
// example=1
let greet : (a: string, b: string) => void;
greet = (time: string, name: string,)=> {
  console.log(`Good ${time} ${name}`);
}
// greet('Morning', 'chunli');
// example=2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example=3
type myObj = {name: string, age: number};
let runner = {
  name: 'johar',
  age: 33
}
let logDetails: (user: myObj) => void;
logDetails = (user: myObj) => {
  console.log(`The age of ${user.name} is ${user.age}`);
}
// logDetails(runner);

// example=4
let jobDetails: (a: string, b:string, c:number)=> void;
jobDetails = (a: string, b: string, c:number)=> {
  console.log(`The Job is ${a} and ${b} so the pay is ${c}.`);
}
// jobDetails('Uniqe', 'Best', 30000);

// 9=>ENUMS=====================================================
enum ResourceType {BOOK, AUTHOR, DIRECTOR, FILM}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}
const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: {name: 'Fahad', age: 20}
}
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: {name: 'Johar', age: 10}
}
// console.log(docOne, docTwo);

// example=2
enum computerHardwares {RAM, HDD, MOUSE, KEYBOARD, LCD};

interface computer<T> {
  uid: number;
  computerHardwares: computerHardwares;
  data: T;
}
const customer: computer<object> = {
  uid: 10,
  computerHardwares: computerHardwares.RAM,
  data: {name: 'johar', age: 20}
}
// console.log(customer);

// example=3
enum classRoom {TABLES, CHAIRS, STUDENTS, TEACHER}

interface room<T> {
  totalStudents: number;
  classRoom: classRoom;
  data: T
}
const viewer: room<object> = {
  totalStudents: 35,
  classRoom: classRoom.STUDENTS,
  data: {teacherName: 'Majid', teacherAge: 30}
}
// console.log(viewer);