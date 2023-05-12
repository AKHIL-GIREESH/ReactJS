import Panel from './panel';
import './App.css';
import { useState } from 'react';

function App() {

  const [open,setOpen] = useState(0)

  return (
    <div className="App">
      <h1>Almaty, Kazakhstan</h1>
      <Panel 
      heading="About"
      content="With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
      status={open === 0}
      modifyStatus = {() => setOpen(0)}
      />

      <Panel 
      heading="Etymology"
      content="The name comes from алма, the Kazakh word for 'apple' and is often translated as 'full of apples'. In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple."
      status={open === 1}
      modifyStatus = {() => setOpen(1)}
      />

      <Panel 
      heading="About2"
      content="With a population of about 5 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
      status={open === 2}
      modifyStatus = {() => setOpen(2)}
      />
    </div>
  );
}

export default App;
