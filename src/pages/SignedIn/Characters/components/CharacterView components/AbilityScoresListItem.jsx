import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function AbilityScoresListItem({ ability_name, ability_ref, setCharacter, character }) {

    let prof_value = 2;

    const [ability, setAbility] = useState(ability_ref);
    const [alteration, setAlteration] = useState(false);

    async function updateAbility() {
        try {
          const jwtToken = Cookies.get('jwt');
    
          await fetch(`https://localhost:7256/character/Ability/${ability.id}`, {
            method: 'PUT',
            headers: {
              'accept': "*/*",
              'Authorization': `Bearer ${jwtToken}`,
              'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(ability)
        }
        ).then(res => res.json());

        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
    }

    useEffect(() => {
        // do not update with empty string, and if alteration has been made
        if ( alteration && ability.value.length != 0 ){
            updateAbility();
            setAlteration(false);
        }
    }, [alteration])

    const changeAbility = (event) => {
    const { name, value } = event.target;
        let objectToChange = { ...character };
        if (name == "prof"){
            let valueToChange = objectToChange.abilities[ability_name].prof;
            objectToChange.abilities[ability_name].prof = !valueToChange;
        }else if (name == "value" && !isNaN(value)){
            objectToChange.abilities[ability_name].value = Number(value);
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
        setAlteration(true);
    }

    return (
        <div className="row no-wrap">
            <div className="column">
                <input name="value" value={ability.value} onChange={(event) => changeAbility(event)} />
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
                <input type="checkbox" name="prof" checked={ability.prof} onChange={(event) => changeAbility(event)} />
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