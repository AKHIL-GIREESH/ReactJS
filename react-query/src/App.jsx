import { useState } from "react";
import { useMutation, useQuery } from "react-query";

function App() {
  const [display,setDisplay] = useState(false)

  const allUsers = useQuery({
    queryFn:() => fetch("http://localhost:3000/api/v1/").then(resp => resp.json()).catch(err => console.log(err))
  })


  const signUp = useMutation({
    mutationFn:() => fetch("http://localhost:3000/api/v1/",{method:"POST",body: JSON.stringify({
      username:"John Doe 2.0",
      password:"againNotPassword"
    }),headers: {
      "Content-Type": "application/json"
    }}).then(resp => resp.json()).catch(err => console.log(err)),
    onSuccess: () => console.log("Works"),
    onError: (error) => console.error('Error during sign-up:', error)
    })


  console.log(allUsers?.data)
  

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => signUp.mutate}>Click</button>
    </>
  );
}

export default App;