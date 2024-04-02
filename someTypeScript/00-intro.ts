const word: string = "Hello World" //In this case, need not add the type as we are directly initialising the variable and TS can automatically detect the type unlike JS and hence not overusing TS.
console.log(word)


//Functions
//Ex1
const increTwo = (val: number, isPassed: boolean = true): number => { //Checks 
return isPassed ? val+2 : -1
}
console.log(increTwo(2))

//Ex2
let colours = ["red","green","blue"]
colours = colours.map((colour):string => {
return "Primary colour "+colour
})
console.log(colours)

//Objects
//Ex1
const objSalary = (ob: {
name: string,
salary: number
}): {
name: string,
salary: number
} => {
return ob
}
console.log(objSalary({name:"John Doe",salary:100000}))

//Ex2 ( using type )
type User = {
name :string,
age:number
}

const objFunc = (ob: User): User => {
return ob
}

console.log(objFunc({name:"John Doe 2",age:100}))

//Ex3
type User2 = {
readonly _id:string //cannot be modified
name :string
age:number
creditcardDetails?: number //optional
}

const objFunc2 = (ob: User2): User2 => {
return ob
}
console.log(objFunc2({_id:"123",name:"John Doe 2",age:100}))

//Ex4
type User3 = User2 & User & { // combining existing types and adding new params along with it
isSingle: boolean 
}

//Array
const fruits: Array<string> = []
const users: Array<User> = []

//Union
const _user: User | User2 = {_id:"123",name:"John Doe 2",age:100}
const data1: (string | number)[] = ["1",2]

let seatAllotment: "aisle" | "middle" | "window" //seatAllotment could only be the 3 specified values
seatAllotment = "middle"


//Tuple (array but then it is to check the whether the sequence is preserved )
type TupleCheck = [number,string,boolean]

const tup1 : TupleCheck = [1,"2",false] // must be entered in the order

//Flaw ( Tuple )
//https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array

//Interfaces
interface OBJ {
    x1:number
    x2:number
    xFunc:() => string
    xFuncNew(param1:number,param2:string):string
}

interface OBJNew extends OBJ{
    x3:number
}

//Classes

class Eg1{
    email:string
    name:string
    constructor(email : string,name : string){
        this.email = email
        this.name = name
    }
}

const eg1Instance = new Eg1("","")

//Same Above code with some Syntatic Sugar ( Produces the same JS code )

class _Eg1{
    constructor(
        public email:string,
        public name:string
    ){

    }
}

//Usual stuff like getters-setters(cannot set return type for setters), interfaces, abstract classes

//Generics - used when u wonna return the same datatype of the input

const arr1 = <T>(val :T):T => {
    return val
}

const arr2 = <T,>(val :T[]):T => {  //Often put , after T just to indicate that it is not a jsx syntax rather generics.
    return val[0]                   //Since its T[], we could use array operations inside the function on val
}


//Eg of extends in Generics

interface DB{
    connectionString:string
    username:string
    password:string
}

const usingExtends = <T,U extends DB>(val1:T,val2:U) => {

}

//Generics in Class

interface quiz{
    noOfQuestions : number
    domain: string
}

interface course{
    creator:string
    amount:number
    domain:string
}

class Cart<T>{
    cart: T[] = []

    addToCart<T>(item:T){
        this.cart.push(item)
    }
}