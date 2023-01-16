import './App.css';
import { useState } from 'react';

function App() {

  const [val,setVal] = useState({
    firstName:'',
    lastName:''
  })
  const [fullName,setFullName] =  useState("")

  const modifyName = (event) => {

    setVal((prev) => {
      if(event.target.name === "firstName"){
        return {
          firstName: event.target.value,
          lastName: prev.lastName
        }
      }
      return {
        firstName: prev.firstName,
        lastName: event.target.value
      }
    })
  }

  const submitName = () => {
    setFullName(val.firstName + " " + val.lastName)
    setVal({
      firstName:'',
      lastName:''
    })
  }
  return (
    <div className='mainDiv'>
      <p>Hello {fullName}</p>
      <input type="text" placeholder='Enter the fristName' onChange={modifyName} value={val.firstName} name="firstName"/>
      <input type="text" placeholder="Enter the lastName" onChange={modifyName} value={val.lastName} name="lastName"/>
      <button onClick={submitName}>Submit</button>
    </div>
  );
}

export default App;