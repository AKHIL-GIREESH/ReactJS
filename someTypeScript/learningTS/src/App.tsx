import './App.css'

function App() {
  const user: string = "Hello World" //In this case, need not add the type as we are directly initialising the variable and TS can automatically detect the type unlike JS and hence not overusing TS.
  console.log(user)


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

  const objSalary = (): {
    name: string,
    salary: number
  } => {
    return {
      name:"idk",
      salary: 0
    }
  }

  objSalary()

  return (
    <>
    </>
  )
}

export default App