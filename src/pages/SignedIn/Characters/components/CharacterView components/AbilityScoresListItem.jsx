import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function AbilityScoresListItem({ ability_name, ability_ref, setCharacter, character }) {

    let prof_value = 2;

    const [ability, setAbility] = useState(ability_ref);

    async function updateAbility() {
        try {
            console.log("started")
          const jwtToken = Cookies.get('jwt');
    
          const response = await fetch(`https://localhost:7256/character/Ability/${ability.id}`, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${jwtToken}`,
              'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(ability),
          });
          console.log("finished", response);
    
          if (response.ok) {
            const data = await response.json();
            console.log('Data, abliity:', data, ability);
          } else {
            console.error('Failed to fetch data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
    }

    useEffect(() => {
        updateAbility();
    }, [ability])

    const change = (event) => {
    const { name, value } = event.target;
        let objectToChange = { ...character };
        if (name == "prof"){
            objectToChange.abilities[ability_name].prof ^= true;
        }else if (name == "value" && !isNaN(value)){
            objectToChange.abilities[ability_name].value = value;
            if ( value > 30){
                objectToChange.abilities[ability_name].value = 30;
            }else if (value < 0){
                objectToChange.abilities[ability_name].value = 0;
            }
        }
        else
            return;
        setCharacter(objectToChange);
        setAbility(objectToChange.abilities[ability_name]);
        console.log("change", objectToChange.abilities[ability_name])
    }

    return (
        <div className="row no-wrap">
            <div className="column">
                <input name="value" value={ability.value} onChange={(event) => change(event)} />
                <div>Score</div>
            </div>
            <div className="column text-center size-3">
                <div>{ability_name.slice(0, 1).toUpperCase() + ability_name.slice(1, 3)}</div>
                <div>{ability_name.slice(0, 1).toUpperCase() + ability_name.slice(1)}</div>
            </div>
            <div className="column text-center">
                <div>{Math.floor((ability.value - 10) / 2)}</div>
                <div>Mod</div>
            </div>
            <div className="column text-center">
                <input type="checkbox" name="prof" checked={ability.prof} onChange={(event) => change(event)} />
                <div>Prof</div>
            </div>
            <div className="column text-center">
                <div>0</div>
                <div>Misc</div>
            </div>
            <div className="column text-center">
                <div>{Math.floor((ability.value - 10) / 2 + prof_value * ability.prof)}</div>
                <div>Save</div>
            </div>
        </div>
    );
}