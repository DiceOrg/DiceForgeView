import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function CharacterHeader({character, setCharacter}) {
  const [speed, setSpeed] = useState(character.speed.value);
  const [hitPoints, setHitPoints] = useState(30)

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
        console.log('Chaaaaange')
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  const changeSpeed = async (event) => {
    try {
      const { value } = event.target;

      const newSpeed = value === '' ? 0 : parseInt(value, 10);

      setSpeed(newSpeed);

    } catch (error) {
      console.error('Error updating speed:', error);
    }
  };


  useEffect(() => {
    async function updateSpeedEffect() {
      try {
        // Send PUT request to update speed in the API
        await updateSpeed();
      } catch (error) {
        console.error('Error updating speed:', error);
      }
    }
  
    if (speed !== character.speed.value) {
      updateSpeedEffect();
    }
  }, [speed]);

  function Increase() {
    const newHitPoints = hitPoints + 1;
    setHitPoints(newHitPoints);
  }

  function Decrease() {
    if (hitPoints > 0) {
      const newHitPoints = hitPoints - 1;
      setHitPoints(newHitPoints);
    }
  }



  return (
    <>
      <div className="character-header">
        <div className="hit-points">
          <div className="hp">
            <button onClick={Increase}>+</button>
            <button onClick={Decrease}>-</button>
            <h2>{hitPoints}</h2>
            <p>HP</p>
          </div>
          <div>
            <input type="text" />
            <p>Current</p>
          </div>
          <div>
            <input type="text" />
            <p>Max</p>
          </div>
          <div>
          <input type="text" />
            <p>temp</p>
          </div>
        </div>
        <div className="Character-header-right">
          <div>
            <input type="text" />
            <p>AC</p>
          </div>
          <div>
            <input type="text" />
            <p>Initiativ</p>
          </div>
          <div>
            <input
            name="value"
            value={speed}
            onChange={changeSpeed}
            />
            <p>Speed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterHeader;
