import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  // const [display,setDisplay] = useState(false)

  // const allUsers = useQuery({
  //   queryFn:() => fetch("http://localhost:3000/api/v1/").then(resp => resp.json()).catch(err => console.log(err))
  // })


  // const signUp = useMutation({
  //   mutationFn:() => fetch("http://localhost:3000/api/v1/",{method:"POST",body: JSON.stringify({
  //     username:"John Doe 2.0",
  //     password:"againNotPassword"
  //   }),headers: {
  //     "Content-Type": "application/json"
  //   }}).then(resp => resp.json()).catch(err => console.log(err)),
  //   onSuccess: () => console.log("Works"),
  //   onError: (error) => console.error('Error during sign-up:', error)
  //   })


  // console.log(allUsers?.data)
  

  // return (
  //   <>
  //     <h1>Hello</h1>
  //     <button onClick={() => signUp.mutate}>Click</button>
  //   </>
  // );

  const onChange = (value) => {
    console.log(value)
  }

  return(
    <ReCAPTCHA
    sitekey="6Leqq6gpAAAAAL617ua6e5nwhGkvEFkT_cAEv4dP"
    onChange={onChange}
  />
  )
}

export default App;