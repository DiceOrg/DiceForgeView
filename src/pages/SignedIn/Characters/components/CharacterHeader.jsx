import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function CharacterHeader({character, setCharacter}) {
  const [speed, setSpeed] = useState('');

  async function updateSpeed() {
    try {
      const jwtToken = Cookies.get('jwt');

      const response = await fetch(`https://localhost:7256/character/Speed/${character.speed.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({value: speed}),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Speed changed:', data)
        //setSpeed(speed)
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  useEffect(() => {
    updateSpeed
  }, [speed])

  const changeSpeed = async (event) => {
    try {
      const { value } = event.target;
      console.log(value);
  
      // Update the speed state
      setSpeed(value);
  
      // Send PUT request to update speed in the API
      await updateSpeed();
    } catch (error) {
      console.error('Error updating speed:', error);
    }
  };
  return (
    <>
      <div className="character-header">
        <div className="hit-points">
          <div className="hp">
            <button>+</button>
            <button>-</button>
            <h2>50</h2>
            <p>HP</p>
          </div>
          <div>
            <p>36</p>
            <p>Current</p>
          </div>
          <div>
            <p>50</p>
            <p>Max</p>
          </div>
          <div>
            <p>0</p>
            <p>temp</p>
          </div>
        </div>
        <div className="Character-header-right">
          <div>
            <p>16</p>
            <p>AC</p>
          </div>
          <div>
            <p>3</p>
            <p>Initiativ</p>
          </div>
          <div>
            <input
            name="value"
            value={speed}
            onChange={changeSpeed}
            />
            
            <p>Speed</p>
            <p>{speed}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterHeader;
