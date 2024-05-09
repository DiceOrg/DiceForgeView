import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function CharacterHeader({ character, setCharacter }) {
  const [speed, setSpeed] = useState(character.speed);
  const [health, setHitPoints] = useState(character.health);

  const changeSpeed = async (event) => {
    try {
      const { value } = event.target;

      if (isNaN(value))
        return;

      const newSpeed = value > 0 ? Number(value) : 0;

      setSpeed(newSpeed);
      setCharacter({...character, speed: newSpeed});
    } catch (error) {
      console.error("Error updating speed:", error);
    }
  };

  const changeHitPoint = (event) => {
    const { name, value } = event.target;
    let objectToChange = { ...character };
    console.log("hitpoints", objectToChange.health);
    if ( !isNaN(value)) {
      objectToChange.health[name] = Number(value);
    }
    else
        return;
    setCharacter(objectToChange);
    setHitPoints(objectToChange.health);
}

  return (
    <>
      <div className="character-header-container">
        <div className="column">
          <div className="row">
            <div className="column text-center size-3">
              <h1 className="center no-margin text-center">{character.health.current + character.health.temp}</h1>
            </div>
            <div className="row size-4">
              <div className="column text-center">
                <input
                  type="text"
                  name="current"
                  value={character.health.current}
                  onChange={(event) => changeHitPoint(event)}
                ></input>
                <div>Current</div>
              </div>
              <div className="column text-center">
                <input
                  type="text"
                  name="max"
                  value={character.health.max}
                  onChange={(event) => changeHitPoint(event)}
                ></input>
                <div>Max</div>
              </div>
              <div className="column text-center">
                <input
                  type="text"
                  name="temp"
                  value={character.health.temp}
                  onChange={(event) => changeHitPoint(event)}
                ></input>
                <div>Temp</div>
              </div>
            </div>
          </div>
          <div className="character-header-labelline text-center">
            Hit Points
          </div>
        </div>

        <div className="column text-center size-6">
          <input type="text" name="value" placeholder="0"></input>
          <div>AC</div>
        </div>
        <div className="column text-center size-6">
          <input type="text" name="value" placeholder="0"></input>
          <div>Initiative</div>
        </div>
        <div className="column text-center size-6">
          <input
            type="text"
            name="value"
            value={speed}
            onChange={changeSpeed}
          ></input>
          <div>Speed</div>
        </div>
      </div>
    </>
  );
}

export default CharacterHeader;
