import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Spells({character}) {
    const [spellsRef, setSpellsRef] = useState(character.spells);
    const [spells, setSpells] = useState([]);
    const [totalSpells, setTotalSpells] = useState([]);
    
    const getSpellDetails = () => {
      console.log("ref", spellsRef);
      const getDetails = async (element, spellArray) => {
        const result = await fetch(`https://www.dnd5eapi.co/api/spells/${element.index}`)
        const res = await result.json();
        await spellArray.push(res);
      }

      let spellArray = [];

      spellsRef.forEach(element => {
        try{
          getDetails(element, spellArray);
        } catch (error){
          console.error("Login failed:", error.message);
        }
      });
      setSpells(spellArray);
    }

    const getSpells = async () => {
        try {
          const response = await fetch("https://www.dnd5eapi.co/api/spells")
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            
            setTotalSpells(data.results);
            // shuffeling array go get 10 random spells 
            // const shuffledSpells = shuffleArray(data.results);
            // setSpells(shuffledSpells.slice(0, 10));
            
          } else {
            // Handle error response
            console.error("Login failed:", response.statusText);
          }
        } catch (error) {
          console.error("Login failed:", error.message);
        }
    };

    console.log("spell id", character.id)
    const addSpell = async (spell) => {
      console.log("add", spell);
      try {
        const jwtToken = Cookies.get('jwt');
        await fetch(
          `https://localhost:7256/character/${character.id}/Spells`, {
          method: 'POST', 
                headers: {
                    'accept': "*/*",
                    'Authorization': `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(spell)
        }).then(res => res.json()).then(res => setSpellsRef([...spellsRef, res]));

      } catch (error){
        console.error('Error fetching data:', error.message);
      }
    }

    useEffect(() =>{
        getSpells();
    }, [])

    useEffect(() => {
        console.log("STATE:", spellsRef)
        getSpellDetails()

    }, [spellsRef])

    const [searchSpells, setSearchSpells] = useState([]);
    const [focus, setFocus] = useState(false);
    const adaptiveChange = (event) => {
      const {value} = event.target;
      setSearchSpells(totalSpells.
        filter(spell => spell.name.toLowerCase().
          includes(value.toLowerCase())));
    }

    console.log("total", totalSpells);


    console.log("spells", spells);

    return (
        <>
        <div className="spell-box">
          <input type="text" 
            id="myInput"
            onChange={(elm) => adaptiveChange(elm)}
            placeholder="Search for spells.."
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/>
            <ul className="spellSearch">
            {/* This might be an illegal way of doing this, 
            but it works for the time being*/
            (focus || searchSpells.length < 10) && 
              searchSpells.map((spell, key) => 
              <li key={key} 
              onClick={() => addSpell(spell)}>
                {spell.name}
              </li>
            )}
            </ul>
            <ul>
              {spells.map(spell => (
                <li key={spell.index} >
                  {spell.name} {spell.concentation ? "(C)" : ""}
                </li>
              ))}
            </ul>
        </div>
        </>
    );
  }