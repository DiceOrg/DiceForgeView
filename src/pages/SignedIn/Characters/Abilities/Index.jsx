export default function Abilities({ability_name, ability, setCharacter, character}) {

    if ( ability_name == "id")
        return <></>

    // I cannot recall if this changes or not, we can pass this as a prop or make change if it is dependent on lvl. 
    let prof_value = 2;
    

    // invert checkbox or change value
    const change = (event) => {
        const {name, value} = event.target;
        let objectToChange = {...character};
        if ( name == "prof")
            objectToChange.abilities[ability_name].prof ^= true;
        else if ( name == "value" && !isNaN(value))
            objectToChange.abilities[ability_name].value = value;
        else    
            return;
        setCharacter(objectToChange);
        // fetch, put
    }

    return (
        <div className="row">
        <div className="column">
            <input name="value" value={ability.value} onChange={(event) => change(event)}/>
            <div>Score</div>
        </div>
        <div className="column">
            <div>{ability_name.slice(0, 1).toUpperCase() + ability_name.slice(1, 3)}</div>
            <div>{ability_name.slice(0, 1).toUpperCase() + ability_name.slice(1)}</div>
        </div>
        <div className="column">
            <div>{Math.floor((ability.value - 10) / 2 + prof_value*ability.prof)}</div>
            <div>Mod</div>
        </div>
        <div className="column">
            <input type="checkbox" name="prof" checked={ability.prof} onChange={(event) => change(event)}/>
            <div>Prof</div>
        </div>
        <div className="column">
            <div>0</div>
            <div>Misc</div>
        </div>
    </div>
    );
  }