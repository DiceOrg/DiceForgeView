import React from "react";
import { useState, useEffect } from "react";

function Equipment() {
  const [equipment, setEquipment] = useState([]);

  // function for shuffeling array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getEquipment = async () => {
    try {
      const response = await fetch("https://www.dnd5eapi.co/api/equipment");
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // shuffeling array go get 10 random spells
        const shuffledEquipment = shuffleArray(data.results);
        setEquipment(shuffledEquipment.slice(0, 10));
      } else {
        // Handle error response
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  useEffect(() => {
    getEquipment();
  }, []);

  return (
    <>
      <div>
        <ul>
          {equipment.map((equip) => (
            <li key={equip.index}>{equip.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Equipment;
