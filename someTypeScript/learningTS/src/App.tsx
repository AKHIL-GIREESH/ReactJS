import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "../node_modules/@tanstack/react-query/build/legacy/useQuery";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [display,setDisplay] = useState(false)

  const allUsers = useQuery({
    queryFn:() => fetch("http://localhost:3000/api/v1/")
  })

  console.log(allUsers)

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setDisplay(state => !state) }>{"Hello"}</button>
    </QueryClientProvider>
  );
}

export default App;