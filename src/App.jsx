import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // 2. Una vez que tenga la info, tengo que actualizar el estado con la info recuperada

    // 1. Hago el pedido externo
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        setCharacters(response.data.results);
      });
  }, []);

  return (
    <>
      <h1>Probando axios</h1>
      {characters.map((character) => {
        return (
          <div className='card'>
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </>
  );
}

export default App;
