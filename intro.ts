// define variable

let name:string='krish';
name.toUpperCase();

// return type should be either string and boolean
function login(name:string,email:string,isLogin:boolean):string| boolean{
    return isLogin + name
}

login('kk','k@gmail.com',true)

function handleError(errormessage:string):never{
    throw new Error('failed')
}
handleError('fetchApi')

// union
//role can contain either string or number
const role:string | number = 2

export {} // temporary red error remove ker dega