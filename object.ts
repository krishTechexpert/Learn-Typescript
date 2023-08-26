
function createUser(name:string,email:string,age:number):{name:string,email:string,age:number}{
    return {name,email,age}
}

console.log(createUser('krish','kk@gmail.com',30))

// type alias

type User={
    name:string,
    readonly _id?:string,
    age:number,
    isActive?:boolean
}

type JobDetails= {
    company:string,
    salary:number,
    role:string,
    isActive:boolean
}

// combine all type into one type
type empDetails = User & JobDetails & {
   department:string
}

const personDetails:empDetails = {
    name:'krish',
    age:30,
    company:'kaara',
    salary:10000,
    role:'UI',
    isActive:true,
    department:'web development'

}
console.log(personDetails)


export {}