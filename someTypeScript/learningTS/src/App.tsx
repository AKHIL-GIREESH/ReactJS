import './App.css'

function App() {
  const user: string = "Hello World" //In this case, need not add the type as we are directly initialising the variable and TS can automatically detect the type unlike JS and hence not overusing TS.
  console.log(user)

  const isLoggedIn :boolean = true
  console.log(isLoggedIn)  

  return (
    <>
    </>
  )
}

export default App
