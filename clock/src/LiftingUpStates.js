import { useState } from 'react';


function App() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <ChildA count={count} setCount={setCount} />
        <ChildB count={count} setCount={setCount} />
      </div>
    );
  }
  
  function ChildA({ count, setCount }) {
    return (
      <div>
        <p>Child A: {count}</p>
        <button onClick={() => setCount(count + 1) && console.log(count)}>Increase Count</button>
      </div>
    );
  }
  
  function ChildB({ count, setCount }) {
    return (
      <div>
        <p>Child B: {count}</p>
        <button onClick={() => setCount(count + 1) && console.log(count)}>Increase Count</button>
      </div>
    );
  }
export default App  