"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let name1 = 'krish';
console.log(name1);
function sum(a, b = 10) {
    return a + b;
}
console.log(sum(3));
/* ++++++++++++++++++++++++++++++++*/
// array
const guest = ['one', 'two', 'three'];
guest.push('four');
console.log(guest);
const score = [10, 20, 30.40];
console.log(score);
/* ++++++++++++++++++++++++++++++++*/
// Tuples vs array
// tuples = define type of each element in array , size define kerna padtah ahi
// order matters
const ab1 = [1, 'b']; // two element defined ker diya 3rd element add nhi ker sekty errror  d dega i.e tuple
//size=2 hai ab1 array ka
// here position of arguments does not matter, yha per boolean ko pheli position per bi rek sekty ho
// number of arguments kam bi ho sekty hai, koi error nhi show hogi matlab define kiye hai 3 argu and value di hai only for 2 argu
let mixedArray = ['string', 100, true];
//mixedArray[0]=false;
mixedArray.push('ind');
console.log(mixedArray);
// but agar hum chaty hai ki position of argument matter 
//then we used Tuple which is more  strict than array
// jitny type defined kiya hai utny hi value defined kerni hogi with same order 
// matlab ki 3 type define kiya hai and passed only 2 value the show error
// const myTuple:[string, boolean, number]=['string',true] show error
// const myTuple:[string, boolean, number]=['string',100,true] show error b'coz position/order changed
let myTuple = ['string', true, 100];
//work well
mixedArray = myTuple;
mixedArray.push('krish');
console.log("mixed", mixedArray);
console.log("mytuple", myTuple);
// not work error as tuple is more strict
//myTuple=mixedArray;
/* ++++++++++++++++++++++++++++++++*/
//Object
let myObj = {};
console.log("object", typeof (myObj)); // object
myObj = [];
console.log(typeof (myObj)); // object
const exampleObj = {
    name: 'krish',
    age: 20
};
exampleObj.name = 'kk2';
console.log(exampleObj);
function Greet(user) {
    return `hello ${user.name} and ${user.age}`;
}
const res = Greet({ name: 'rahul', age: 20 });
console.log(res);
let sumCalculation = (a, b) => a + b;
console.log(sumCalculation(10, 20));
/* ++++++++++++++++++++++++++++++++*/
//enum
// it will asign automatically value increment bydepend on first value such as pending=0
var Status;
(function (Status) {
    Status[Status["pending"] = 10] = "pending";
    Status[Status["rejected"] = 11] = "rejected";
    Status[Status["fullfiled"] = 12] = "fullfiled";
})(Status || (Status = {}));
console.log(Status.pending);
let add = function (a, b) {
    return a + b;
};
let mul = function (a, b) {
    return a * b;
};
console.log("sum=", add(10, 5));
console.log("multiply=", mul(4, 3));
let sub = function (a, b) {
    return a - b;
};
console.log("subtract=", sub(20, 10));
/* ++++++++++++++++++++++++++++++++*/
// optional parameters
const addAll = function (a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
console.log("Add all with all argusments=", addAll(10, 15, 10));
console.log("Add with 2 argusments=", addAll(10, 15));
// here we can used default value concept no need to write check condition
//and default value will not work with function defined by type signature
const mulAll = function (a, b, c = 1) {
    return a * b * c;
};
console.log("Multiply with 2 argusments=", mulAll(10, 15));
/* ++++++++++++++++++++++++++++++++*/
// Rest parameters
const total = function (a, b, ...nums) {
    return a + b + nums.reduce((prev, curr) => prev + curr, 0);
};
console.log("Total is=", total(10, 5, 4, 5));
/* ++++++++++++++++++++++++++++++++*/
// Never : if function retrun some error or may be you are using some infinite loop then we used never type
let createError = function (message) {
    throw new Error('Something went to wrong!');
};
let infinteLoop = function (num) {
    let i = 1;
    while (true) {
        i++;
    }
};
/* ++++++++++++++++++++++++++++++++*/
// Type Assertion (as)
const addOrConcat = function (a, b, c) {
    if (c === 'add')
        return a + b;
    return "" + a + b;
};
let myString = addOrConcat(2, 2, 'concat');
console.log("string concat=", myString);
let myNumber = addOrConcat(2, 2, 'add');
console.log("add number=", myNumber);
// 10 as string
//(10 as unknown)as string // forcasting or two asertion used here
/* ++++++++++++++++++++++++++++++++*/
// DOM element
//! means not null assertion when we are null value kabi nhi aye gi
//const img = document.getElementById('img')!
const img1 = document.getElementById('img');
const img2 = document.getElementById('img');
// Original JS code
// let yearTag =document.getElementById('year');
// let currentyear = new Date().getFullYear();
// yearTag.setAttribute("year",currentyear);
// yearTag.textContent=currentyear;
// way 1 for beginner learning purpose we can used 
// let yearTag:HTMLElement | null;
// yearTag =document.getElementById('year');
// let currentyear:string = new Date().getFullYear().toString();
// if(yearTag){ // saying safe guard but is not good practice check another way
//     yearTag.setAttribute("year",currentyear)!;
//     yearTag.textContent=currentyear;
// }
// way 2 using type assertion (as) this is best 
const yearTag = document.getElementById('year');
const currentyear = new Date().getFullYear().toString();
yearTag.setAttribute("year", currentyear);
yearTag.textContent = currentyear;
/* ++++++++++++++++++++++++++++++++*/
// How class used typescript
class Student {
    constructor(rollNo, name, age, lang = 'reactjs') {
        this.rollNo = rollNo;
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.rollNo = rollNo;
        this.age = age;
        this.lang = lang;
    }
    // by default all method are public
    getAge() {
        return `hello I am ${this.age}`;
    }
}
//const std1=new Student(101,'raj',20,'reactjs')
const std1 = new Student(101, 'raj', 20);
console.log(std1, std1.getAge());
class Teacher extends Student {
    constructor(subject, rollNo, name, age) {
        super(rollNo, name, age);
        this.subject = subject;
        this.subject = subject;
    }
    getLang() {
        return `I teach ${this.lang}`;
    }
}
const t1 = new Teacher('frontend', 1001, 'rahul', 30);
console.log(t1, t1.getLang());
class Bollywood {
    constructor(name, rating, earning, status) {
        this.name = name;
        this.rating = rating;
        this.earning = earning;
        this.status = status;
    }
    getFlimDetails(day) {
        return `${this.name} Flim is running from ${day} days and it earn ${this.earning}cr and
        ${this.status} and agency give rating ${this.rating}`;
    }
}
const b1 = new Bollywood('gadar2', 5, 100, 'Super Hit');
console.log(b1);
console.log(b1.getFlimDetails(20));
// static method in class
class ScoreCard {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++ScoreCard.score;
    }
    static getScore() {
        return ScoreCard.score;
    }
}
ScoreCard.score = 0;
const sachin = new ScoreCard('sachin tendular');
const virat = new ScoreCard('virat kholi');
const rahul = new ScoreCard('rahul dravid');
console.log(virat.id);
console.log(ScoreCard.getScore());
// getter and setter method in class with typescript when we try to access private value then this is also way
class NameOfMonth {
    constructor() {
        this.month = [];
    }
    get insertMonth() {
        return this.month;
    }
    set insertMonth(val) {
        if (Array.isArray(val) && val.every(e1 => typeof e1 === 'string')) {
            this.month = val;
            return;
        }
        else {
            throw new Error('arguments is not array of string');
        }
    }
}
const m1 = new NameOfMonth();
m1.insertMonth = ['jan', 'feb', 'mar']; // yha per value set ker di hai using set method
console.log(m1.insertMonth); //and yha s get ker rehy hai using get method
/* ++++++++++++++++++++++++++++++++*/
// index signature (suppose jab object ki property backend s dynamic aa rehi hai tab humko uska type define kerna hoga )
// obj[props]
// interface price {
//     books:number,
//     toys:number,
//     mobile:number
// }
const priceDetails = {
    books: 100,
    toys: 200,
    mobile: 12000
};
console.log(priceDetails.books); // 100
console.log(priceDetails['books']); // 100
// note key should be string or number not boolean
const calculatePrice = function (priceItem) {
    let sum = 0;
    for (const key in priceItem) {
        sum = sum + priceItem[key];
    }
    return sum;
};
console.log("total amount", calculatePrice(priceDetails));
const emp = {
    name: 'krish',
    salary: 1000,
    deviceAssign: ['laptop', 'mobile', 'ipad', 'mouse']
};
// we used as keyof instead of index signature
for (const key in emp) {
    console.log(`${key}:${emp[key]}`);
}
// when we don't know the type of emp so another solution here
Object.keys(emp).map(key => {
    console.log(`${key}:${emp[key]}`);
});
// another example in case of function
const logEmpKey = (emp, key) => {
    console.log(`log employee details: ${key}:${emp[key]}`);
};
logEmpKey(emp, 'deviceAssign');
// we are not saying that
//salary not always number
//stockmarket not always string
// instead we are saying that using Record
//here describe
//it means salary can be number or string
//it means stockmarket can be number or string
//it means freelancing can be number or string
//it means youTube can be number or string
// Right
const monthlyIncomes = {
    salary: 100,
    stockmarket: 200,
    freelancing: 300,
    youTube: 400
};
for (const revenue in monthlyIncomes) {
    console.log(`${revenue}:${monthlyIncomes[revenue]}`);
}
/* ++++++++++++++++++++++++++++++++*/
// Generices
//const strEcho = (parameters:string):string => parameters;
//now this function only work for string only we need to make some comomn generic that takes any type of arguments with return type then we used generics
// this is the generic type
const Echo = (parameters) => parameters;
const arr1 = [];
const arr2 = []; //yha bi genric used ho rehy hai
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // y approach better hai b'coz we told the type of S and T sothat user can easily understand
// this is very cumbersome , we need to mke some generic solutions
function data(val) {
    return val;
}
console.log(data(10));
console.log(data('10'));
console.log(data(true));
console.log(data(['one', 'two', 'three']));
console.log(data({ name: 'reactjs', age: 20 }));
// one line solutions generic power
function data1(args) {
    return args;
}
console.log('------generic----------');
console.log(data1(10));
console.log(data1('10'));
console.log(data1(true));
console.log(data1(['one', 'two', 'three', 1, 2, true])); // complier automatically add below type inside <> bracket
console.log(data1(['one', 'two', 'three', 1, 2, true]));
console.log(data1({ name: 'reactjs', age: 20 }));
// another example
function printData(val1, val2) {
    return [val1, val2];
}
console.log(printData("hello", "world"));
console.log(printData({ name: 'kk', age: 20 }, [1, 2, '3']));
const user1 = {
    name: 'kk',
    rollNo: 10,
    isPaid: true
};
function showcarDetails(val) {
    const update = Object.assign(Object.assign({}, val), { speed: '200km' });
    return update;
}
const car1 = {
    name: 'belano',
    brand: 'Maruti',
    color: 'red',
    price: 1000000
};
console.log(showcarDetails(car1));
const person = {
    firstName: 'sachin',
    lastName: 'tendulkar'
};
const person2 = {
    firstName: 'rahul',
    lastName: 'dravid',
    email: 'rahul.dravid@gmail.com'
};
// t ki bi property l lo and s ki bi kuch add ker do
function getName(str1, str2) {
    return { str1, str2 };
}
const ans = getName(person, person2);
console.log(ans.str1);
console.log(ans.str2);
const myProduct = [
    {
        name: 'laptop',
        price: 25000,
        inStock: true
    },
    {
        name: 'mobile',
        price: 12000,
        inStock: true
    },
    {
        name: 'ipad',
        price: 8000,
        inStock: false
    },
    {
        name: 'PC',
        price: 80000,
        inStock: false
    },
    {
        name: 'keypad',
        price: 800,
        inStock: true
    }
];
// search item without generic, agar property boolean used kerni ho toh phir again code likhna hoga we need generic
// function SearchProduct(product:products[],property:string,value:number):products[]{
//     return product.filter(item => item[property] === value)
// }
// const filterproduct =SearchProduct(myProduct,'price',8000) 
// console.log(filterproduct)
//here T => product
// value = T[key]
//key
//console.log(myProduct[0]['name'])
function SearchProduct(product, property, value) {
    return product.filter(item => item[property] === value);
}
const filterproduct = SearchProduct(myProduct, 'inStock', true);
console.log(filterproduct);
// write down some generic code if we passed only argument as object then retrun true otherwise return false
const isObj = (args) => {
    return (typeof args === 'object' && !Array.isArray(args) && args !== null);
};
console.log(isObj(true)); //false
console.log(isObj('john')); // false
console.log(isObj({ name: 'kk', age: 10 })); // true
console.log(isObj([1, 2, 3])); //false
console.log(isObj(null)); // false
// generic with class
class Fruits {
    constructor(value) {
        this.myFavourite = value;
    }
    get fruitsList() {
        return this.myFavourite;
    }
    set fruitList(value) {
        this.myFavourite = value;
    }
}
const f1 = new Fruits(['apple', 'orange']);
console.log(f1.fruitsList);
const f2 = new Fruits({ fav1: 'grave', fav2: 'mango' });
console.log(f2.fruitsList);
const f3 = new Fruits(['bannana', 20, true]);
console.log(f3.fruitsList);
const assign1 = {
    studentId: 101,
    title: 'project done',
    grade: 0
};
function updateAssignment(assign, propsToUpdate) {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
}
const assignGrade = updateAssignment(assign1, { grade: 95 });
console.log(assignGrade);
//Required changes all the properties in an object to be required.
// oposite of partial
const recordAssignment = (assign) => {
    return assign;
};
console.log(recordAssignment(Object.assign(Object.assign({}, assignGrade), { verified: true })));
// Readonly: makes every property readonly
const newAccount = {
    name: 'krish',
    email: 'll@gmail.com'
};
//newAccount.name='kk'
//Record
//Record is a shortcut to defining an object type with a specific key type and value type.
//Record<string, number> is equivalent to { [key: string]: number }
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrade = {
    john: "A",
    venky: "D"
};
const gradeData = {
    john: { assign1: 50, assign2: 79 },
    venky: { assign1: 90, assign2: 87 }
};
//output: max : {score:100}
const playerList = {
    max: { score: 100 },
    john: { score: 20 },
    kali: { score: 80 },
    menal: { score: 100 }
};
console.log("my game player", playerList);
const score1 = {
    studentId: 203,
    grade: 90
};
const preview = {
    studentId: 203,
    title: 'CS'
};
const createNewAssign = (title, point) => {
    return { title, point };
};
//yha per return type newAssign hai but what if agar function ko chnage kerna pada toh 
//return type bi chnage kerna hoga
//kuch asa hona chiya ki function ko in future chnage 
//kerty toh automatically return type bi chnage ho jye
// tab Return type ka concept aya hai used kro
const createNewAssign1 = (title, point) => {
    return { title, point };
};
const tsAssign = createNewAssign1("Utility types", 100);
console.log(tsAssign);
const assignArgs = ["reactjs", 18];
const tsAssign2 = createNewAssign1(...assignArgs);
console.log(tsAssign2);
// another example
const sumOfTwo = (a, b) => a + b;
// ConstructorParameters
class BankAccount {
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
        this.accountId = 123;
    }
}
// InstanceType<type>
class BankAccount1 {
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
        this.accountId = 123;
    }
}
const newBank = {
    name: 'hfdc',
    branch: 'delhi'
};
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield response.json();
    return data;
});
//type FetchUsersReturnType1 = Awaited<ReturnType<typeof fetchUsers>> // User[]
// so this is difference for awaited
const me = fetchUsers();
console.log(me.then(data => console.log(data)));
const buyProduct = (product) => console.log(product);
const p1 = {
    name: 'laptop',
    price: 35000,
    photo: 'sample.jpg',
    stock: 20,
    isAvailable: true
};
console.log(buyProduct(p1));
// Type assertion DOM manipulation
const btn1 = document.getElementById('btn'); //we are sure null nhi ayega
const btn2 = document.getElementById('btn');
const btn3 = document.getElementById('btn');
const myForm = document.getElementById('myForm');
const input = document.querySelector('form > input');
myForm.onsubmit = (e) => {
    e.preventDefault();
    const value = input.value;
    const h2 = document.createElement('h2');
    h2.textContent = value;
    const body = document.querySelector('body');
    body.append(h2);
};
