export default function Abilities({name, ability}) {

    if ( name == "id")
        return <></>

    return (
        <div className="row">
        <div className="column">
            <div>{ability.value}</div>
            <div>Score</div>
        </div>
        <div className="column">
            <div>{name.slice(0, 1).toUpperCase() + name.slice(1, 3)}</div>
            <div>{name.slice(0, 1).toUpperCase() + name.slice(1)}</div>
        </div>
        <div className="column">
            <div>{Math.floor((ability.value - 10) / 2)}</div>
            <div>Mod</div>
        </div>
        <div className="column">
            <input type="checkbox" checked={ability.prof}/>
            <div>Prof</div>
        </div>
        <div className="column">
            <div>0</div>
            <div>Misc</div>
        </div>
    </div>
    );
  }