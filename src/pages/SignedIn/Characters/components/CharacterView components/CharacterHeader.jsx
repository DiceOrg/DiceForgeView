import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function CharacterHeader({ character, setCharacter }) {
  const [speed, setSpeed] = useState(character.speed.value);
  const [hitPoints, setHitPoints] = useState(character.hitPoints);

  async function updateSpeed() {
    try {
      const jwtToken = Cookies.get("jwt");

      const response = await fetch(
        `https://localhost:7256/character/Speed/${character.speed.id}`,
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

    if (speed !== character.speed.value) {
      updateSpeedEffect();
    }
  }, [speed]);


  async function updateHealth() {
    try {
      const jwtToken = Cookies.get("jwt");
      console.log("hitpoints", hitPoints)

      const response = await fetch(
        `https://localhost:7256/character/HitPoints/${character.hitPoints.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hitPoints),
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

    if (hitPoints !== character.hitPoints) {
      updateHitPoints();
    }
  }, [hitPoints]);

  const changeHitPoint = (event) => {
    const { name, value } = event.target;
    let objectToChange = { ...character };
    console.log("hitpoints", objectToChange.hitPoints);
    if ( !isNaN(value)) {
      objectToChange.hitPoints[name] = Number(value);
    }
    else
        return;
    setCharacter(objectToChange);
    setHitPoints(objectToChange.hitPoints);
}

  return (
    <>
      <div className="character-header-container">
        <div className="column">
          <div className="row">
            <div className="column text-center size-3">
              <h1 className="center no-margin text-center">{character.hitPoints.current + character.hitPoints.temp}</h1>
            </div>
            <div className="row size-4">
              <div className="column text-center">
                <input
                  type="text"
                  name="current"
                  value={character.hitPoints.current}
                  onChange={(event) => changeHitPoint(event)}
                ></input>
                <div>Current</div>
              </div>
              <div className="column text-center">
                <input
                  type="text"
                  name="max"
                  value={character.hitPoints.max}
                  onChange={(event) => changeHitPoint(event)}
                ></input>
                <div>Max</div>
              </div>
              <div className="column text-center">
                <input
                  type="text"
                  name="temp"
                  value={character.hitPoints.temp}
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
