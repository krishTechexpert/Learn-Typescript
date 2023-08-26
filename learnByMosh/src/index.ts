console.log('start to typescript from 8/23 ')

let age:number=20;

if(age<50){
    age +=10
}
console.log(age)

// enum

// const small=1;
// const medium=2;
// const large=3;

const enum size{small=1,medium,large};
const mySize:size=size.medium;
console.log(mySize)

// Function

function calculate(tax:number,year=2023):number{
    if(year <=2023){
        return tax * 1.2
    }
    else {
        return tax * 1.3
    }
    
}

calculate(1000)

