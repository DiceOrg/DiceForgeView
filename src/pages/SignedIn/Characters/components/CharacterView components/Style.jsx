import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

export default function Style({ character, setCharacter }) {


    const [style, setStyle] = useState(character.style);
    const [alteration, setAlteration] = useState(false);

    async function updateStyle() {
        try {
            const jwtToken = Cookies.get('jwt');

            const result = await fetch(`https://localhost:7256/character/Style/${style.id}`, {
                method: 'PUT',
                headers: {
                    'accept': "*/*",
                    'Authorization': `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(style)
            }
            ).then(res => res.json());
            console.log(result)

        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    useEffect(() => {
        if (alteration) {
            updateStyle();
            setAlteration(false);
            console.log("put was done");
        }
    }, [alteration])

    const changeStyle = (event) => {
        const { name, value } = event.target;
        if (name == "age" && isNaN(value)) {
            return;
        }
        let styleToChange = { ...style };
        styleToChange[name] = value;
        setCharacter({ ...character, style: styleToChange });
        setStyle(styleToChange);
        setAlteration(true);
        console.log(styleToChange);
    }



    return (
        <>
            <h2 className='no-margin'>Style</h2>
            <div className="row style-labelline">
                <div className="column text-center">
                    <input type="text" name="age" value={style.age} onChange={(event) => changeStyle(event)}></input>
                    <div>Age</div>
                </div>
                <div className="column text-center">
                    <input type="text" name="height" value={style.height} onChange={(event) => changeStyle(event)}></input>
                    <div>Height</div>
                </div>
                <div className="column text-center">
                    <input type="text" name="width" value={style.width} onChange={(event) => changeStyle(event)}></input>
                    <div>Weight</div>
                </div>
                <div className="column text-center">
                    <input type="text" name="eyes" value={style.eyes} onChange={(event) => changeStyle(event)}></input>
                    <div>Eyes</div>
                </div>
                <div className="column text-center">
                    <input type="text" name="hair" value={style.hair} onChange={(event) => changeStyle(event)}></input>
                    <div>Hair</div>
                </div>
                <div className="column text-center">
                    <input type="text" name="skin" value={style.skin} onChange={(event) => changeStyle(event)}></input>
                    <div>Skin</div>
                </div>
            </div>
            <div className="row">
                <div className="column text-center">
                    <input type="text" name="name" value={style.name} onChange={(event) => changeStyle(event)}></input>
                    <div>Name</div>
                </div>
                <div className="column text-center">
                    <input type="text" name="race" value={style.race} onChange={(event) => changeStyle(event)}></input>
                    <div>Race</div>
                </div>
                <div className="column text-center">
                    <input type="text" name="class_" value={style.class_} onChange={(event) => changeStyle(event)}></input>
                    <div>Class</div>
                </div>
                <div className="column text-center">
                    <input type="text" name="alignment" value={style.alignment} onChange={(event) => changeStyle(event)}></input>
                    <div>Alignment</div>
                </div>
                <div className="column text-center">
                    <input type="text" name="background" value={style.background} onChange={(event) => changeStyle(event)}></input>
                    <div>Background</div>
                </div>
                <div className="column text-center">
                    <input type="text" name="level" value="20"></input>
                    <div>Level</div>
                </div>
            </div>
        </>
    )
}