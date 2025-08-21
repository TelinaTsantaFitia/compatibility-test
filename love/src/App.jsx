import React, { useState } from 'react';
import './App.css';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(null);

  const calculateCompatibility = () => {
    if (name1.trim() && name2.trim()) {
      const score = Math.floor(Math.random() * 101);
      setResult(`Compatibilité entre ${name1} et ${name2} : ${score}%`);
    } else {
      setResult('Veuillez entrer les deux noms.');
    }
  };

  return (
    <div className="container">
      <h1>Test de Compatibilité Amoureuse</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nom 1"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          className="input"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nom 2"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          className="input"
        />
      </div>
      <button onClick={calculateCompatibility} className="button">
        Calculer
      </button>
      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default App;