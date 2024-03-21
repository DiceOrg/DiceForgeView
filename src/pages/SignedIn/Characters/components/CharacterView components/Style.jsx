import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

export function Style({character, setCharacter}) {
    
    
    const [style, setStyle] = useState(character.style);
    const [alteration, setAlteration] = useState(false);

    async function updateCharacter(value) {
        try {
          const jwtToken = Cookies.get('jwt');
    
          await fetch(`https://localhost:7256/character/${character.id}`, {
            method: 'PUT',
            headers: {
              'accept': "*/*",
              'Authorization': `Bearer ${jwtToken}`,
              'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({name: value})
        }
        ).then(res => res.json());

        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
    }

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

    const changeName = (event) => {
        const { name, value } = event.target;
        setCharacter({...character, [name]: value})
        updateCharacter(value);
    }

    useEffect(() => {
        if ( alteration ){
            updateStyle();
            setAlteration(false);
            console.log("put was done");
        }
    }, [alteration])

    const changeStyle = (event) => {
        const { name, value } = event.target;
        if ( value.length == 0)
            return;
        if ( name == "age" && isNaN(value)){
            return;
        }
        let styleToChange = { ...style };
        styleToChange[name] = value;
        setCharacter({...character, style: styleToChange});
        setStyle(styleToChange);
        setAlteration(true);
        console.log(styleToChange);
    }



    return (
        <>
            <input name="name" value={style.name} onChange={(event) => changeStyle(event)}></input>
            <input name="race" value={style.race} onChange={(event) => changeStyle(event)}></input>
            <input name="class_" value={style.class_} onChange={(event) => changeStyle(event)}></input>
            <input name="alignment" value={style.alignment} onChange={(event) => changeStyle(event)}></input>
            <input name="background" value={style.background} onChange={(event) => changeStyle(event)}></input>
            <div className='hideable'>
                Hideable
                <input name="description" value={style.description} onChange={(event) => changeStyle(event)}></input>
                <input name="age" value={style.age} onChange={(event) => changeStyle(event)}></input>
                <input name="height" value={style.height} onChange={(event) => changeStyle(event)}></input>
                <input name="width" value={style.width} onChange={(event) => changeStyle(event)}></input>
                <input name="eyes" value={style.eyes} onChange={(event) => changeStyle(event)}></input>
                <input name="hair" value={style.hair} onChange={(event) => changeStyle(event)}></input>
                <input name="skin" value={style.skin} onChange={(event) => changeStyle(event)}></input>
            </div>
        </>
    )
}