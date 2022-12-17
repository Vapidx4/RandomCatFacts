import { useState} from 'react'
import './App.css'
import axios from 'axios';



function App() {
  const [fact, setFact] = useState('');

  function getCatFact() {
    axios.get('https://catfact.ninja/fact')
      .then(response => {
        setFact(response.data.fact);
      })
      .catch(error => {
        console.error(error);
      });
  }
  

  return (
    <div className="App">
      <h1>Random Cat Facts</h1>
      <div className="card">
        <button onClick={getCatFact}>Click to get a random cat fact.</button>
        <p>
          {fact}
        </p>
      </div>
    </div>
  )
}


export default App

