import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function CharacterHeader({ character, setCharacter }) {
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
        body: JSON.stringify({ value: speed }),
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
        await updateSpeed();
      } catch (error) {
        console.error('Error updating speed:', error);
      }
    }

    if (speed !== character.speed.value) {
      updateSpeedEffect();
    }
  }, [speed]);



  return (
    <>
      <div className="character-header-container">
        <div className="column">
          <div className="row">
            <div className="column text-center size-3">
              <h1 className="center no-margin text-center">{hitPoints}</h1>
            </div>
            <div className="row size-4">
              <div className="column text-center">
                <input type="text" name="value" value="s"></input>
                <div>Current</div>
              </div>
              <div className="column text-center">
                <div className="value">0</div>
                <div>Max</div>
              </div>
              <div className="column text-center">
                <div className="value">0</div>
                <div>Temp</div>
              </div>
            </div>
          </div>
          <div className="character-header-labelline text-center">Hit Points</div>
        </div>

        <div className="column text-center size-6">
          <input type="text" name="value" value="s"></input>
          <div>AC</div>
        </div>
        <div className="column text-center size-6">
          <input type="text" name="value" value="s"></input>
          <div>Initiative</div>
        </div>
        <div className="column text-center size-6">
          <input type="text" name="value" value={speed} onChange={changeSpeed}></input>
          <div>Speed</div>
        </div>
      </div>
    </>
  );
}

export default CharacterHeader;
