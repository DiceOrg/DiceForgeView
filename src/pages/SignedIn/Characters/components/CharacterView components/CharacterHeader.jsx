import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function CharacterHeader({ character, setCharacter }) {
  const [speed, setSpeed] = useState(character.speed);
  const [health, setHitPoints] = useState(character.health);
  const [alteration, setAlteration] = useState(false);

  async function updateSpeed() {
    try {
      const jwtToken = Cookies.get("jwt");

      const response = await fetch(
        `https://localhost:7256/character/Speed/${character.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ value: speed }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Chaaaaange");
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  const changeSpeed = async (event) => {
    try {
      const { value } = event.target;

      const newSpeed = value === "" ? 0 : parseInt(value, 10);

      setSpeed(newSpeed);
    } catch (error) {
      console.error("Error updating speed:", error);
    }
  };

  useEffect(() => {
    async function updateSpeedEffect() {
      try {
        await updateSpeed();
      } catch (error) {
        console.error("Error updating speed:", error);
      }
    }

    if (speed !== character.speed) {
      updateSpeedEffect();
    }
  }, [speed]);


  async function updateHealth() {
    try {
      const jwtToken = Cookies.get("jwt");
      console.log("hitpoints", health)

      const response = await fetch(
        `https://localhost:7256/character/HitPoints/${character.health.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(health),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Chaaaaange");
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  useEffect(() => {
    async function updateHitPoints() {
      try {
        await updateHealth();
      } catch (error) {
        console.error("Error updating speed:", error);
      }
    }

    if (alteration) {
      updateHitPoints();
      setAlteration(false);
    }
  }, [alteration]);

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
    setAlteration(true);
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
