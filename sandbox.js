// 1=>BASICS=>==================================================
var rolnumbr = 55;
// rolnumbr = '5';
var cric = function (diameter) {
    return diameter * Math.PI;
};
var result = cric(6);
// console.log(result);
// 2=>ARRAYS & OBJECTS =========================================
var names = ['yoshi', 'chunli', 'rehan'];
// names.push(10);
var someMixed = ['chunli', 20, 'johar', 40];
someMixed[0] = 1;
someMixed.push('joshi');
var team = {
    name: 'arena',
    shirtcolor: 'blue',
    number: 50
};
// team.shirtcolor = 04;
team.shirtcolor = 'red';
// team.play = 'cricket';
team = {
    name: 'arena',
    shirtcolor: 'blue',
    number: 50
};
// 3=>EXPLICIT TYPES=============================================
var job;
var jobNo;
job = 'duty';
jobNo = false;
// FOR ARRAY
var players = [];
// players.push(44);
players[0] = '34';
// console.log(players)
// FOR MIXED DATATYPE ARRAY
var multipleTypes = [];
multipleTypes.push(false);
// console.log(multipleTypes)
// FOR OBJECTS
var userOne;
userOne = { name: 'fahad', age: 20 };
var userTwo;
userTwo = {
    name: 'chand',
    age: 20
};
// 4=>DYNAMIC (ANY)==============================================
var wireter;
wireter = false;
// let member: any[];
// member.push('chunli');
var members;
members = ['lugin', 'chunli', 1, false];
// console.log(members);
var someUser;
someUser = {
    name: 'johar',
    age: 39,
    title: false
};
// 5=>TUPLES=====================================================
var jobs;
jobs = ['chunli', 'johar', 33, false];
// console.log(jobs);
var mySelf;
mySelf = ['f', 'f', 2, false];
// console.log(mySelf);
var yourSelf;
yourSelf = [2, 2, 's', 2];
// console.log(yourSelf);
//====SOME INOF====
var man;
var manTwo;
var manThree;
var manFour;
// 6=>FUNCTION BASICS============================================
var we;
we = function (a, b, c) {
    // console.log(`you are ${a} and i am ${b} we are ${c}`);
};
we('john', 'chand');
var add;
add = function (a, b, c) {
    return (a + b);
};
var myFunc;
myFunc = function (item, id) {
    return ("Now the item is " + item + " and the id of item is " + id);
};
var worker = {
    item: 'table',
    id: 3
};
var myFunc2;
myFunc2 = function (user) {
    console.log(user.item);
};
var carDetails = {
    color: 'pink',
    modal: 2017,
    number: 'LLB654'
};
var myFunc3 = function (car) {
    console.log("The Color of Car is " + car.color + "... The Modal of Car is " + car.modal + "... The Number of Car is " + car.number + "...");
};
// myFunc3(carDetails);
// 8=>FUNCTION SIGNATURES=========================================
// example=1
var greet;
greet = function (time, name) {
    console.log("Good " + time + " " + name);
};
// greet('Morning', 'chunli');
// example=2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
var runner = {
    name: 'johar',
    age: 33
};
var logDetails;
logDetails = function (user) {
    console.log("The age of " + user.name + " is " + user.age);
};
// logDetails(runner);
// example=4
var jobDetails;
jobDetails = function (a, b, c) {
    console.log("The Job is " + a + " and " + b + " so the pay is " + c + ".");
};
// jobDetails('Uniqe', 'Best', 30000);
// 9=>ENUMS=====================================================
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["DIRECTOR"] = 2] = "DIRECTOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
})(ResourceType || (ResourceType = {}));
var docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'Fahad', age: 20 }
};
var docTwo = {
    uid: 10,
    resourceType: ResourceType.DIRECTOR,
    data: { name: 'Johar', age: 10 }
};
// console.log(docOne, docTwo);
// example=2
var computerHardwares;
(function (computerHardwares) {
    computerHardwares[computerHardwares["RAM"] = 0] = "RAM";
    computerHardwares[computerHardwares["HDD"] = 1] = "HDD";
    computerHardwares[computerHardwares["MOUSE"] = 2] = "MOUSE";
    computerHardwares[computerHardwares["KEYBOARD"] = 3] = "KEYBOARD";
    computerHardwares[computerHardwares["LCD"] = 4] = "LCD";
})(computerHardwares || (computerHardwares = {}));
;
var customer = {
    uid: 10,
    computerHardwares: computerHardwares.RAM,
    data: { name: 'johar', age: 20 }
};
// console.log(customer);
// example=3
var classRoom;
(function (classRoom) {
    classRoom[classRoom["TABLES"] = 0] = "TABLES";
    classRoom[classRoom["CHAIRS"] = 1] = "CHAIRS";
    classRoom[classRoom["STUDENTS"] = 2] = "STUDENTS";
    classRoom[classRoom["TEACHER"] = 3] = "TEACHER";
})(classRoom || (classRoom = {}));
var viewer = {
    totalStudents: 35,
    classRoom: classRoom.STUDENTS,
    data: { teacherName: 'Majid', teacherAge: 30 }
};
// console.log(viewer);
