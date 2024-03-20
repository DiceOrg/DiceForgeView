export default function AbilityScoresListItem({ ability_name, ability, setCharacter, character }) {

    if (ability_name == "id")
        return <></>

    let prof_value = 2;

    const change = (event) => {
        const { name, value } = event.target;
        let objectToChange = { ...character };
        if (name == "prof")
            objectToChange.abilities[ability_name].prof ^= true;
        else if (name == "value" && !isNaN(value))
            objectToChange.abilities[ability_name].value = value;
        else
            return;
        setCharacter(objectToChange);
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