//const user:string[]=[];
const user:Array<string>=[] // same as above
user.push('kk')

type animal={
    name:String,
    spice?:String, // optional value
    age:number
}[]; // it say array that contain objects

const cat:animal=[]
cat.push({name:'cat',age:4})


const arr1:number[]=[1,2,3];
const str2:string[]=["1","2","3"]

// str conatin either array of string or array of number but not mixed values
const str:string[] | number[]=[1,2,3] 

// use case : we need  array contain both number and string, for this we union
//we need mixed value string and number then used

const str1:(string | number)[]=[1,2,"3"] // it means str1 contain both string and number also

export {}

