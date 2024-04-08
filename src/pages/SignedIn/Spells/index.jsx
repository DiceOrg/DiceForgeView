import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Spell from "./Spell";

export default function Spells({character}) {
    const [spellsRef, setSpellsRef] = useState(character.spells);
    const [spells, setSpells] = useState([]);
    const [totalSpells, setTotalSpells] = useState([]);

    const getDetails = async (element) => {
      console.log("details", element)
      return fetch(`https://www.dnd5eapi.co/api/spells/${element.index}`)
    }

    const fetchData = async () => {
      const responses = await Promise.all(
        spellsRef.map(s => getDetails(s))
      );

      const data = await Promise.all(responses.map(response => response.json()));

      setSpells(data.sort(elm => elm.name));
    }

    useEffect(() => {

      fetchData();

    }, [spellsRef]);

    const getAllSpells = async () => {
        try {
          const response = await fetch("https://www.dnd5eapi.co/api/spells")
          if (response.ok) {
            const data = await response.json();
            
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

    const addSpell = async (spell) => {
      console.log("add", spell);
      try {
        const jwtToken = Cookies.get('jwt');
        const data = await fetch(
          `https://localhost:7256/character/${character.id}/Spells`, {
          method: 'POST', 
                headers: {
                    'accept': "*/*",
                    'Authorization': `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(spell)
        }).then(res => res.json());

        console.log("add details", data);
        const spellDetails = getDetails(data);

        setSpellsRef([...spellsRef, data]);
        setSpells([...spells, spellDetails].sort(elm => elm.name));


      } catch (error){
        console.error('Error fetching data:', error.message);
      }
    }

    useEffect(() =>{
        getAllSpells();
    }, [])

    const [searchSpells, setSearchSpells] = useState([]);
    const [focus, setFocus] = useState(false);
    const adaptiveChange = (event) => {
      const {value} = event.target;
      setSearchSpells(totalSpells.
        filter(spell => spell.name.toLowerCase().
          includes(value.toLowerCase())));
    }

    console.log("spells", spells);

    const spellLevels = [...new Set(spells.map(spell => spell.level))].sort()
    console.log("levels", spellLevels)

    if(spellLevels.length == 0)
      return <>Loading...</>

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
              {spellLevels.map((level, key) => (
                <div key={key}>
                  <h1 className="spell title" key={key}>{level == 0 ? "Cantrips" : level + ". level spells"}</h1>
                  {spells.filter(spell => spell.level == level).map((spell, alt_key) => (
                    <Spell key={alt_key} spell={spell}/>
                  ))}
                </div>
              ))}
            </ul>
        </div>
        </>
    );
  }