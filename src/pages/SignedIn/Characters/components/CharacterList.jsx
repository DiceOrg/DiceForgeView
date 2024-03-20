import React, { useEffect, useState } from "react";
import CharacterListItem from "./CharacterListItem";
import Cookies from "js-cookie";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  async function fetchCharacterData() {
    try {
      // Get JWT token from wherever it's stored (e.g., localStorage, cookie)
      const jwtToken = Cookies.get('jwt');
  
      const response = await fetch('https://localhost:7256/character', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        setCharacters(data);
        console.log('Data:', data);
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(() => {
    fetchCharacterData()
    console.log(characters)
  }, [])
  if(!characters) return <p>loading...</p>

  
  return (
    <>
      <ul className="character-list">
        {characters.map((character, index) => (
          <li key={index} className="character-card">
            <h2>{character.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CharacterList;
