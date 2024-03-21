import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

export default function CharacterStyleHeader({character, setCharacter}) {
    
    const [style, setStyle] = useState(character.style);

    useEffect(() => {
        setStyle(character.style);
    }, [character.style])

    return (
        <>
            <h1>{style.name}</h1>
            <h4>{style.race} {style.class_}</h4>
        </>
    )
}