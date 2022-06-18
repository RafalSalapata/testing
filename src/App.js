import { useState } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState('')
  const [code, setCode] = useState('')
  const [charCode, setCharCode] = useState('')

  const handleEnterPress = (e) => {
    setCharCode(e.charCode)
    setCode(e.code)
}

  return (
    <div className="App">
      <input 
        type="number"
        name="questionsNo"
        value={answer}
        autoFocus
        onChange={(e) => setAnswer(e.target.value)}
        onKeyPress={handleEnterPress}
      />
      <p>{code}</p>
      <p>{charCode}</p>
    </div>
  );
}

export default App;
