
let name1:string='krish';
console.log(name1)

function sum(a:number,b=10):number{
    return a+b
}
console.log(sum(3))
/* ++++++++++++++++++++++++++++++++*/

// array
 const guest:string[]=['one','two','three']
 guest.push('four')
 console.log(guest)

 const score:number[]=[10,20,30.40]
 console.log(score)

 /* ++++++++++++++++++++++++++++++++*/

 // Tuples vs array

 // tuples = define type of each element in array , size define kerna padtah ahi
// order matters
 const ab1:[number,string]=[1,'b'] // two element defined ker diya 3rd element add nhi ker sekty errror  d dega i.e tuple
//size=2 hai ab1 array ka

 // here position of arguments does not matter, yha per boolean ko pheli position per bi rek sekty ho
 // number of arguments kam bi ho sekty hai, koi error nhi show hogi matlab define kiye hai 3 argu and value di hai only for 2 argu
 
 let mixedArray:(string | boolean | number)[]=['string',100,true];
 //mixedArray[0]=false;
 mixedArray.push('ind')
 console.log(mixedArray)

 // but agar hum chaty hai ki position of argument matter 
 //then we used Tuple which is more  strict than array
// jitny type defined kiya hai utny hi value defined kerni hogi with same order 
// matlab ki 3 type define kiya hai and passed only 2 value the show error
// const myTuple:[string, boolean, number]=['string',true] show error
// const myTuple:[string, boolean, number]=['string',100,true] show error b'coz position/order changed
 let myTuple:[string, boolean, number]=['string',true,100]

 //work well
 mixedArray=myTuple
 mixedArray.push('krish')
 console.log("mixed",mixedArray)
 console.log("mytuple",myTuple)

 // not work error as tuple is more strict
//myTuple=mixedArray;

/* ++++++++++++++++++++++++++++++++*/

//Object

let myObj:Object={};
console.log("object",typeof(myObj)) // object
myObj=[]
console.log(typeof(myObj)) // object

const exampleObj={
    name:'krish',
    age:20
}
exampleObj.name='kk2'
console.log(exampleObj)

type personProps = {
    name:string,
    age:number,
    isActive?:boolean
}

function Greet(user:personProps){
    return `hello ${user.name} and ${user.age}`
}

const res =Greet({name:'rahul',age:20})
console.log(res)


type Sum = (a:number,b:number) => number

let sumCalculation:Sum =(a,b) => a+b;
console.log(sumCalculation(10,20))
 /* ++++++++++++++++++++++++++++++++*/


//enum

// it will asign automatically value increment bydepend on first value such as pending=0
enum Status{
    pending=10,
    rejected,
    fullfiled
}

console.log(Status.pending)

 /* ++++++++++++++++++++++++++++++++*/


// function

type addFn=(a:number,b:number) => number

let add:addFn = function(a,b) {
    return a+b;
}

let mul:addFn = function(a,b){
    return a*b;
}

console.log("sum=",add(10,5))
console.log("multiply=",mul(4,3))

 /* ++++++++++++++++++++++++++++++++*/


// interface mostly used with classes and object 
//ek bar interface create ker diya usky baad bi we can update interface
// but type is similar to interface , and ek bar type create ker diya then we can not update type

interface subtract{
    (a:number,b:number):number
}

let sub:subtract = function(a,b){
    return a-b
}

console.log("subtract=",sub(20,10))

 /* ++++++++++++++++++++++++++++++++*/

// optional parameters

const addAll = function(a:number,b:number,c?:number):number{
    if(c !== undefined){
        return a+b+c
    }
    return a+b
}
console.log("Add all with all argusments=",addAll(10,15,10))
console.log("Add with 2 argusments=",addAll(10,15)) 

// here we can used default value concept no need to write check condition
//and default value will not work with function defined by type signature
const mulAll = function(a:number,b:number,c=1):number{
    return a*b*c
}
console.log("Multiply with 2 argusments=",mulAll(10,15)) 

 /* ++++++++++++++++++++++++++++++++*/


// Rest parameters
const total=function(a:number,b:number,...nums:number[]):number{
    return a + b + nums.reduce((prev,curr) => prev + curr,0)
}
console.log("Total is=",total(10,5,4,5))

 /* ++++++++++++++++++++++++++++++++*/


// Never : if function retrun some error or may be you are using some infinite loop then we used never type

let createError = function(message:string):never{
    throw new Error('Something went to wrong!')
}

let infinteLoop = function(num:number):never{
    
        let i:number=1;
        while(true){
            i++
        }
    
}

 /* ++++++++++++++++++++++++++++++++*/


// Type Assertion (as)

const addOrConcat = function(a:number,b:number,c:'add' | 'concat'):number | string{
    if(c==='add') return a+b
    return ""+a+b
}

let myString:string=addOrConcat(2,2,'concat') as string;
console.log("string concat=",myString)

let myNumber:number=addOrConcat(2,2,'add') as number;
console.log("add number=",myNumber)


// 10 as string
//(10 as unknown)as string // forcasting or two asertion used here


 /* ++++++++++++++++++++++++++++++++*/


// DOM element
//! means not null assertion when we are null value kabi nhi aye gi
//const img = document.getElementById('img')!
const img1 = document.getElementById('img')as HTMLElement
const img2 = <HTMLElement>document.getElementById('img')

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
const yearTag= document.getElementById('year') as HTMLSpanElement;
const currentyear:string = new Date().getFullYear().toString();
yearTag.setAttribute("year",currentyear)!;
yearTag.textContent=currentyear;


 /* ++++++++++++++++++++++++++++++++*/

// How class used typescript

class Student{

    constructor(public readonly rollNo:number,
        public name:string,
        private age:number,
        protected lang:string='reactjs')
        {
        this.name=name;
        this.rollNo=rollNo;
        this.age=age;
        this.lang=lang;
    }
    // by default all method are public
    public getAge(){
        return `hello I am ${this.age}`
    }
}

//const std1=new Student(101,'raj',20,'reactjs')
const std1=new Student(101,'raj',20)
console.log(std1,std1.getAge())

class Teacher extends Student {
    constructor(public subject:string,rollNo:number,name:string,age:number){
        super(rollNo,name,age)
        this.subject=subject;
    }
    public getLang(){
        return `I teach ${this.lang}`
    }
}
const t1=new Teacher('frontend',1001,'rahul',30,)
console.log(t1,t1.getLang())

 /* ++++++++++++++++++++++++++++++++*/


/// how interface defined with typescript in class


interface Flim{
    name:string,
    rating:number,
    earning:number,
    status:string,
    getFlimDetails(day:number):string
}

class Bollywood implements Flim{

    name:string;
    rating:number;
    earning:number;
    status:string;

    constructor(name:string,rating:number,earning:number,status:string){
        this.name=name;
        this.rating=rating;
        this.earning=earning;
        this.status=status
    }

     getFlimDetails(day:number){
        return `${this.name} Flim is running from ${day} days and it earn ${this.earning}cr and
        ${this.status} and agency give rating ${this.rating}`
    }
}

const b1=new Bollywood('gadar2',5,100,'Super Hit')
console.log(b1)
console.log(b1.getFlimDetails(20))

// static method in class

class ScoreCard {
    static score:number=0;
    static getScore():number{
        return ScoreCard.score
    }
    public id:number;
    constructor(public name:string){
        this.name = name;
        this.id = ++ScoreCard.score;
    }
}
const sachin = new ScoreCard('sachin tendular')
const virat = new ScoreCard('virat kholi')
const rahul = new ScoreCard('rahul dravid')

console.log(virat.id)
console.log(ScoreCard.getScore())

// getter and setter method in class with typescript when we try to access private value then this is also way

class NameOfMonth {
    private month:string[];

    constructor(){
        this.month=[]
    }
    public get insertMonth():string[]{
        return this.month
    }
    public set insertMonth(val:string[]){
        if(Array.isArray(val) && val.every(e1 => typeof e1 === 'string')) {
            this.month= val
            return
            } else {
                throw new Error('arguments is not array of string')
            }
    }
}

const m1=new NameOfMonth();
m1.insertMonth=['jan','feb','mar'] // yha per value set ker di hai using set method
console.log(m1.insertMonth); //and yha s get ker rehy hai using get method

 /* ++++++++++++++++++++++++++++++++*/

 //Assigning Dynamic keys to an object then you can used Record,Index signature etc

    //example 

    interface Cache{
        [key:number]:string
    }

    function CacheStore(){
        // one way record [easier way]
        const cache:Record<number,string> = {};
        //cache[100] = 'valueHere'

        // second way index signatre
        //const cache:{[key:number]:string} ={} // here key van be any name

        // third way interface with dynamic keys
        //const cache:Cache={}

        const add1 = (id:number,value:string) => {
          cache[id]=value;
          return cache
        }
      
        const remove = (id:number) => {
          delete cache[id]
        }
        return  {
          cache,add1,remove
        }
      }
      
      const {add1,remove,cache} = CacheStore();
      
      console.log(add1(101,'kk'))
      //console.log(remove(101))
      console.log(cache)

      // index signature example
      type DynamicObject = {
        [key: string]: any; // Allow keys to be strings with any value
      };
      
      const obj: DynamicObject = {};
      obj["name"] = "Alice";
      obj["age"] = 30;
      
      console.log(obj); // { name: 'Alice', age: 30 }
      
      // . Using a Function to Add Dynamic Keys

      function addDynamicKey<T extends object,K extends string,V>(obj:T,key:K,value:V):T & Record<K,V>{
        return {...obj,[key]:value}
      }

      const baseObject = { id: 1 };
        const updatedObject = addDynamicKey(baseObject, "name", "Alice");

    console.log(updatedObject); // { id: 1, name: 'Alice' }

    //5. Example with Type-Safe Dynamic Keys
    interface Config {
        [key: string]: string | number | boolean; // Limit value types
      }
      
      const settings: Config = {};
      
      settings["theme"] = "dark";
      settings["notifications"] = true;
      settings["fontSize"] = 14;
      
      console.log(settings); // { theme: 'dark', notifications: true, fontSize: 14 }

     // 6. Practical Use Case Example
     //Dynamic keys are often used in scenarios like building a query object or mapping data.
     type QueryObject = {
        [key: string]: string | number;
      };
      
      function buildQuery(params: Record<string, string | number>): QueryObject {
        const query: QueryObject = {};
        for (const [key, value] of Object.entries(params)) {
          query[key] = value;
        }
        return query;
      }
      
      const params = { userId: 123, search: "TypeScript", limit: 10 };
      const query = buildQuery(params);
      
      console.log(query); // { userId: 123, search: 'TypeScript', limit: 10 }
      
     

 // index signature (suppose jab object ki property backend s dynamic aa rehi hai tab humko uska type define kerna hoga )
// obj[props]

// interface price {
//     books:number,
//     toys:number,
//     mobile:number
// }

const priceDetails:price={
    books:100,
    toys:200,
    mobile:12000
}

console.log(priceDetails.books) // 100
console.log(priceDetails['books'])// 100

// but what happend when we calculate all price total amount inwhich we need to check property 
// such as priceDetails[props]// yha per we need index signature let see
// problem below like
// let prop:string='mobile'
// console.log(priceDetails[prop])

//Now comment interface price above on line 315 to impelment index signature

interface price{
    readonly [index:string]:number // key should be string and value should be number we are using here index signature concept
     books:number,
     toys:number,
     mobile:number
}
// note key should be string or number not boolean
const calculatePrice = function(priceItem:price):number{
    let sum=0;
    for(const key in priceItem){
        sum = sum + priceItem[key]
    }
    return sum;
}
console.log("total amount",calculatePrice(priceDetails))

// another example without using [index:string] index signatute
// the we can used assertion as keyof price 
// and if you don't know that type of price we can used also as keyof typeof price

// let see another example

interface Employee {
   // [key:string]:string | number | string[] | undefined  // make comment here and check other sol below
    name:string,
    salary:number,
    deviceAssign:string[]
}

const emp:Employee={
    name:'krish',
    salary:1000,
    deviceAssign:['laptop','mobile','ipad','mouse']
}

// we used as keyof instead of index signature
for(const key in emp){
    console.log(`${key}:${emp[key as keyof Employee]}`)
}

// when we don't know the type of emp so another solution here
Object.keys(emp).map(key => {
    console.log(`${key}:${emp[key as keyof typeof emp]}`)
})

// another example in case of function

const logEmpKey = (emp:Employee,key:keyof Employee):void => {
    console.log(`log employee details: ${key}:${emp[key]}`)
}
logEmpKey(emp,'deviceAssign')

 /* ++++++++++++++++++++++++++++++++*/


// Record Utility concept also used in index signature see example when we provide literal types such as SourceOfIncome
// index signture parameter type can not be literal type or generic type then we should used also Record Utility

// interface Incomes{
//     [key:string | number]:number // key may be string or number check, another way for Record
//        pizza:string
    //[key:'salary']:number // this defined literal type as key string
// }

type SourceOfIncome = 'salary' | 'stockmarket'| 'freelancing' | 'youTube';

type Incomes = Record<SourceOfIncome,number | string>

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


const monthlyIncomes:Incomes = {
    salary:100,
    stockmarket:200,
    freelancing:300,
    youTube:400
}

for(const revenue in monthlyIncomes){
    console.log(`${revenue}:${monthlyIncomes[revenue as keyof Incomes]}`)
}

// another example for Record


 /* ++++++++++++++++++++++++++++++++*/


// Generices
//const strEcho = (parameters:string):string => parameters;

//now this function only work for string only we need to make some comomn generic that takes any type of arguments with return type then we used generics

// this is the generic type
const Echo = <T>(parameters:T):T => parameters;

const arr1:number[]=[];
const arr2:Array<number>=[]; //yha bi genric used ho rehy hai

function createPair<S,T>(v1:S,v2:T):[S,T]{
    return [v1,v2]
}
console.log(createPair<string,number>('hello',42)) // y approach better hai b'coz we told the type of S and T sothat user can easily understand

// this is very cumbersome , we need to mke some generic solutions
function data(val:number | string | boolean | string[] | {name:string,age:number}):number | string | boolean | string[]| {}{
    return val
}
console.log(data(10))
console.log(data('10'))
console.log(data(true))
console.log(data(['one','two','three']))
console.log(data({name:'reactjs',age:20}))

// one line solutions generic power
function data1<T>(args:T):T{
    return args
}
console.log('------generic----------')
console.log(data1<number>(10))
console.log(data1<string>('10'))
console.log(data1<boolean>(true))
console.log(data1(['one','two','three',1,2,true])) // complier automatically add below type inside <> bracket
console.log(data1<Array<number | string | boolean>>(['one','two','three',1,2,true]))
console.log(data1(<Object>{name:'reactjs',age:20}))

// another example
function printData<X,Y>(val1:X,val2:Y):[X,Y]{
    return [val1,val2]
}

console.log(printData("hello","world"))
console.log(printData({name:'kk',age:20},[1,2,'3']))

// Generic with interface

interface createUser<X,Y,Z>{
    name:X,
    rollNo:Y,
    isPaid:Z
}

const user1:createUser<string,number,boolean>={
    name:'kk',
    rollNo:10,
    isPaid:true
}

//another example generic with type

type Car = {
    name:string,
    brand:string,
    color:string,
    price:number
}

function showcarDetails<T>(val:T):T{
    const update:T = {...val,speed:'200km'};
    return update
}

const car1:Car={
    name:'belano',
    brand:'Maruti',
    color:'red',
    price:1000000
}

console.log(showcarDetails<Car>(car1))

// another example of extends in generic

// extends means inherit + add another information

type FullName={
    firstName:string,
    lastName:string
}

const person:FullName = {
    firstName:'sachin',
    lastName:'tendulkar'
}

type EmpName={
    firstName:string,
    lastName:string,
    email:string
}

const person2:EmpName ={
    firstName:'rahul',
    lastName:'dravid',
    email:'rahul.dravid@gmail.com'
}

// t ki bi property l lo and s ki bi kuch add ker do
function getName<T, S extends T>(str1:T,str2:S):{str1:T,str2:S}{
    return  {str1,str2}
}
const ans =getName(person,person2)
console.log(ans.str1)
console.log(ans.str2)

// example without generic

type products = {
   // readonly[index:string]:string | number | boolean,
    name:string,
    price:number,
    inStock:boolean
}

const myProduct:products[]=[
    {
        name:'laptop',
        price:25000,
        inStock:true
    },
    {
        name:'mobile',
        price:12000,
        inStock:true
    },
    {
    name:'ipad',
    price:8000,
    inStock:false
    },
    {
        name:'PC',
        price:80000,
        inStock:false
        },
        {
            name:'keypad',
            price:800,
            inStock:true
            }
]

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

function SearchProduct<T,Key extends keyof T>(product:T[],property:Key,value:T[Key]):T[]{
    return product.filter(item => item[property] === value)
}
const filterproduct =SearchProduct(myProduct,'inStock',true) 
console.log(filterproduct)



// write down some generic code if we passed only argument as object then retrun true otherwise return false
const isObj = <T>(args:T):boolean => {
    return (typeof args === 'object' && !Array.isArray(args) && args !== null)
}

console.log(isObj(true)) //false
console.log(isObj('john')) // false
console.log(isObj({name:'kk',age:10})) // true
console.log(isObj([1,2,3])) //false
console.log(isObj(null)) // false

// generic with class

class Fruits<T>{
    private myFavourite:T;
    constructor(value:T){
        this.myFavourite=value
    }
    get fruitsList():T{
        return this.myFavourite
    }
    set fruitList(value:T){
        this.myFavourite=value
    }
}

const f1=new Fruits(['apple','orange'])
console.log(f1.fruitsList)

const f2 = new Fruits({fav1:'grave',fav2:'mango'})
console.log(f2.fruitsList)

const f3 = new Fruits<(string | boolean | number)[]>(['bannana',20,true])
console.log(f3.fruitsList)

 /* ++++++++++++++++++++++++++++++++*/


// Utlity type

//Partial changes all the properties in an object to be optional.
// kisi bi type ki proprty ko optional bna deta hai

interface Assignment {
    studentId:number,
    title:string,
    grade:number,
    verified?:boolean
}

const assign1:Assignment={
    studentId:101,
    title:'project done',
    grade:0
}

function updateAssignment(assign:Assignment,propsToUpdate:Partial<Assignment>):Assignment{
    return {...assign,...propsToUpdate}
}

const assignGrade:Assignment = updateAssignment(assign1,{grade:95})
console.log(assignGrade)

// second example

type FBUser = {
    name:string,
    email:string
}

type TWUser = Partial<FBUser>

//Required changes all the properties in an object to be required.
// oposite of partial

const recordAssignment = (assign:Required<Assignment>):Assignment =>{
    return assign
}
console.log(recordAssignment({...assignGrade,verified:true}))

type CreateAccount = {
    photo?:string
}
//create account bnaty samay photo optional ti but when upload some document then photo ko required ker diya humy
type PictureUpload = Required<CreateAccount>

// Readonly: makes every property readonly

const newAccount:Readonly<TWUser>={
    name:'krish',
    email:'ll@gmail.com'
}
//newAccount.name='kk'

//Record
//Record is a shortcut to defining an object type with a specific key type and value type.
//Record<string, number> is equivalent to { [key: string]: number }

const hexColorMap:Record<string,string>={
    red:"FF0000",
    green:"00FF00",
    blue:"0000FF"
}

// literal type with Record
type Students = 'john' | "venky";
type Grade= "A" | "B" | "C" | "D" | "U"

const finalGrade:Record<Students,Grade>={
    john:"A",
    venky:"D"
}

interface Grades{
    assign1:number,
    assign2:number
}

const gradeData:Record<Students,Grades>={
    john:{assign1:50,assign2:79},
    venky:{assign1:90,assign2:87}  
}

//another record example

interface Game{
    score:number
}

type playerName = 'max'| 'john' | 'kali' | 'menal'

//output: max : {score:100}

const playerList:Record<playerName,Game>={
    max:{score:100},
    john:{score:20},
    kali:{score:80},
    menal:{score:100}
}
console.log("my game player",playerList)

//Pick removes all but the specified keys from an object type.

type AssignResult=Pick<Assignment, "studentId" | "grade">;

const score1:AssignResult ={
    studentId:203,
    grade:90
}

//Omit removes keys from an object type.

type AssignmentPreview = Omit<Assignment,"grade" | "verified">
const preview:AssignmentPreview = {
    studentId:203,
    title:'CS'
}

//Exclude removes types from a union. work on only union types
type adjustedGrade = Exclude<Grade,"U">;

// Extract whatever value you need from a union,work on only union types
type HighGrades = Extract<Grade,"A"|"B">;


//Nonnullable

type AllPosibleGrades = 'ram'| 'laxman'| null | undefined;

type nameOnly=NonNullable<AllPosibleGrades>


// Return Type

type newAssign={title:string,point:number}

const createNewAssign = (title:string,point:number):newAssign => {
    return {title,point}
}
//yha per return type newAssign hai but what if agar function ko chnage kerna pada toh 
//return type bi chnage kerna hoga

//kuch asa hona chiya ki function ko in future chnage 
//kerty toh automatically return type bi chnage ho jye

// tab Return type ka concept aya hai used kro

const createNewAssign1 = (title:string,point:number) => {
    return {title,point}
}

type newAssign1 = ReturnType<typeof createNewAssign1>

const tsAssign:newAssign1 =createNewAssign1("Utility types",100);
console.log(tsAssign)

// Parameters extracts the parameter types of a function type as an array.
// some times say tuple
// automatically extreact parameters

type AssignParams= Parameters<typeof createNewAssign1> // [title:string,point:number]

const assignArgs:AssignParams = ["reactjs",18]

const tsAssign2:newAssign1 =createNewAssign1(...assignArgs);
console.log(tsAssign2)

// another example

const sumOfTwo = (a:number,b:number):number => a+b

type getParametersValue = Parameters<typeof sumOfTwo> // [a:number,b:number]


// ConstructorParameters

class BankAccount{
     private readonly accountId:number;
    constructor(public name:string,public branch:string){
        this.accountId=123
    }
}
 type Bank = ConstructorParameters<typeof BankAccount>; // [name:string,branch:string]

// InstanceType<type>
class BankAccount1{
    private readonly accountId?:number;
   constructor(public name:string,public branch:string){
       this.accountId=123
   }
}

type bank2 = InstanceType<typeof BankAccount1>

const newBank:bank2 = {
    name:'hfdc',
    branch:'delhi'
}


// Awaited -- helps us with the ReturnType of a Promise

interface User{
    id:number,
    name:string,
    username:string,
    email:string
}

const fetchUsers= async():Promise<User[]> => {

   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return data
}

type FetchUsersReturnType =  ReturnType<typeof fetchUsers> // Promise<User[]>
//type FetchUsersReturnType1 = Awaited<ReturnType<typeof fetchUsers>> // User[]
// so this is difference for awaited

const me:FetchUsersReturnType = fetchUsers();
console.log(me.then(data => console.log(data)))

//type FetchUsersReturnType1 = Awaited<ReturnType<typeof fetchUsers>> // User[]
//const me2:FetchUsersReturnType1 = fetchUsers();
//console.log(me2) // show all users

//fetchUsers().then(data => console.log(data));


//Function with Object demo

interface Product{
    name:string,
    price:number,
    photo:string,
    stock:number,
    isAvailable:boolean
}

type buyProductType = (product:Product) => void

const buyProduct:buyProductType = (product) => console.log(product)

const p1:Product = {
    name:'laptop',
    price:35000,
    photo:'sample.jpg',
    stock:20,
    isAvailable:true
}

console.log(buyProduct(p1))


// Type assertion DOM manipulation
const btn1 = document.getElementById('btn')!; //we are sure null nhi ayega
const btn2 = document.getElementById('btn') as HTMLElement;
const btn3 = <HTMLElement>document.getElementById('btn');

const myForm =document.getElementById('myForm') as HTMLFormElement;
const input =document.querySelector('form > input') as HTMLInputElement;

myForm.onsubmit = (e) => {
    e.preventDefault();
    const value = input.value;
    const h2=document.createElement('h2')
    h2.textContent =value;
    const body = document.querySelector('body') as HTMLBodyElement;
    body.append(h2)
}


// generic type another example

// type generic

type DataStorage<T> = {
    storage:T[]; // storage can contain any type of data at run time
    add:(data:T) => void
  }
  
  const textStorage:DataStorage<string> = {
    storage:[],
    add(data) {this.push(data)}
  }
  
  const userStorage:DataStorage<User2> = {
    storage:[],
    add(user){}
  }
  
  function merge<T,U>(a:T,b:U){
    return {
      ...a,
      ...b
    }
  }
  
  const newUser = merge<{name:string},{score:number}>({name:'krish'},{score:100});
  console.log(newUser)