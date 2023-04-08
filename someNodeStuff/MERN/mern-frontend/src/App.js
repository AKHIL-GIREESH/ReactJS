import './App.css';

function App() {

  const APIREQ = () => {
    fetch("https://api.spotify.com/v1/artists/1mYsTxnqsietFxj1OgoGbG")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Playing with APIs</h1>
      <p>API+MERN</p>
      {APIREQ()}
    </div>
  );
}

export default App;