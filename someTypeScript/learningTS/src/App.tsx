import './App.css'

function App() {
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

  return (
    <>
    </>
  )
}

export default App