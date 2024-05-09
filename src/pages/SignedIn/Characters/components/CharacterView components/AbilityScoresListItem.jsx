import { useEffect, useState, useContext } from "react";
import { StyleContext } from "../../../../../App";
import Cookies from "js-cookie";

export default function AbilityScoresListItem({ ability_ref, index, setCharacter, character }) {

    const { color } = useContext(StyleContext)

    let prof_value = 2;

    const [ability, setAbility] = useState(ability_ref);

    const changeAbility = (event) => {
        console.log(index);
        const { name, value } = event.target;
        let objectToChange = { ...character };
        if (name == "prof") {
            let valueToChange = objectToChange.abilities[index].prof;
            objectToChange.abilities[index].prof = !valueToChange;
        } else if (name == "value" && !isNaN(value)) {
            objectToChange.abilities[index].value = Number(value);
            if (value > 30) {
                objectToChange.abilities[index].value = 30;
            } else if (value < 0) {
                objectToChange.abilities[index].value = 0;
            }
        }
        else
            return;
        setCharacter(objectToChange);
        setAbility(objectToChange.abilities[index]);
    }

    return (
        <div className="row score-row no-wrap">
            <div className="column score-column">
                <input type="text" name="value" value={ability.value} onChange={(event) => changeAbility(event)} />
                <div>Score</div>
            </div>
            <div className="column text-center size-3">
                <div className={`value score-name ${color === "color" ? ability.name.toLowerCase() : ""}`}>{ability.name.slice(0, 1).toUpperCase() + ability.name.slice(1, 3)}</div>
                <div>{ability.name.slice(0, 1).toUpperCase() + ability.name.slice(1)}</div>
            </div>
            <div className="column text-center">
                <div className="value">{Math.floor((ability.value - 10) / 2)}</div>
                <div>Mod</div>
            </div>
            <div className="column text-center">
                <div className="value"><input type="checkbox" name="prof" checked={ability.prof} onChange={(event) => changeAbility(event)} /></div>
                <div>Prof</div>
            </div>
            <div className="column text-center">
                <div className="value">0</div>
                <div>Misc</div>
            </div>
            <div className="column text-center">
                <div className="value">{Math.floor((ability.value - 10) / 2 + prof_value * ability.prof)}</div>
                <div>Save</div>
            </div>
        </div>
    );
}