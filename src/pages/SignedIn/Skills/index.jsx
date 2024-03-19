export default function Skills({name, skill, abilities}) {



    if ( name == "id" ) return <></>;

    
    let value = abilities[skill.attribute.toLowerCase()].value;

    console.log("fault", abilities[skill.attribute.toLowerCase()]);

    return (
        <div className="row">
            <span>
                {Math.floor((value - 10)/2)} {name} ({skill.attribute.slice(0, 3)}) 
                Prof: <input type="checkbox" checked={skill.prof}/>
                Exp: <input type="checkbox" checked={skill.exp}/>
            </span>
        </div>
    );
  }