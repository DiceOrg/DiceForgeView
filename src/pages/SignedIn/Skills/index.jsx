export default function Skills({skill_name, skill, abilities, character, setCharacter}) {



    if ( skill_name == "id" ) return <></>;

    let prof_value = 2;
    let exp_value = 2;

    let skill_value = abilities[skill.attribute.toLowerCase()].value;

    // inverts checkbox
    const change = (event) => {
        const {name} = event.target;
        let objectToChange = {...character};
        objectToChange.skills[skill_name][name] ^= true;
        setCharacter(objectToChange);
        // fetch, put
    }

    return (
        <div className="row">
            <span>
                {Math.floor((skill_value - 10)/2 + prof_value*skill.prof + exp_value*skill.exp)} {skill_name} ({skill.attribute.slice(0, 3)}) 
                Prof: <input type="checkbox" name="prof" checked={skill.prof} onChange={(event) => change(event)}/>
                Exp: <input type="checkbox" name="exp" checked={skill.exp} onChange={(event) => change(event)}/>
            </span>
        </div>
    );
  }