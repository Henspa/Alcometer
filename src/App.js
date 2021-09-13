import React, {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;

    let remain = grams - (burning * time);

    let alco = 0;
    if (gender === 'male') {
      alco = remain / (weight * 0.7);
    }
    else {
      alco = remain / (weight * 0.6);
    }

    if (alco < 0.00) {
      setResult (0);
    }  
    else {
      setResult(alco);
    }
  }

  return (
    <div>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label><br></br>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label><br></br>
          <input id="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div>
          <label>Time</label><br></br>
          <input id="time" type="number" value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
