import { useEffect, useState } from "react";

export default function Spells() {
    const [spells, setSpells] = useState([])
    const [spell, setSpell] = useState({
        name: ''
    });

    // function for shuffeling array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    const getSpells = async () => {
        try {
          const response = await fetch("https://www.dnd5eapi.co/api/spells")
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            
            // shuffeling array go get 10 random spells 
            const shuffledSpells = shuffleArray(data.results);
            setSpells(shuffledSpells.slice(0, 10));
            
          } else {
            // Handle error response
            console.error("Login failed:", response.statusText);
          }
        } catch (error) {
          console.error("Login failed:", error.message);
        }
    };

    useEffect(() =>{
        getSpells();
    }, [])

    useEffect(() => {
        console.log("STATE:", spells)
    }, [spells])

    return (
        <>
        <div className="spell-box">
            <ul>
              {spells.map(spell => (
                <li key={spell.index}>{spell.name}</li>
              ))}
            </ul>
        </div>
        </>
    );
  }