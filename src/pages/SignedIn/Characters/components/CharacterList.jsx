import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../../../App";
import CharacterListItem from "./CharacterListItem";

function CharacterList() {
    const { fetchAllCharacters } = useContext(DataContext)
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchAllCharacters(setCharacters)
        console.log(characters)
    }, [])

    if (!characters) return <p>loading...</p>


    return (
        <>
            <div className="row characters-row">
                {characters.map((character, index) => (
                    <CharacterListItem character={character} key={index}/>
                ))}
            </div>
        </>
    );
}

export default CharacterList;
