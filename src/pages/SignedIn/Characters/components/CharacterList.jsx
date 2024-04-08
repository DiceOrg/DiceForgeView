import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../../../App";
import CharacterListItem from "./CharacterListItem";

function CharacterList() {
    const { fetchAllCharacters } = useContext(DataContext)
    const [characters, setCharacters] = useState();
    const [loadingText, setLoadingText] = useState('Loading...');

    useEffect(() => {
        fetchAllCharacters(setCharacters) 
    }, [])

    useEffect(() => {
      let interval;
      console.log(characters)
      if (!characters) {

        interval = setInterval(() => {
          setLoadingText(prevText => {
            const dots = prevText.length - "Loading".length;
            return `Loading${'.'.repeat(dots % 3 + 1)}`;
          });
        }, 1000);
      } else {
        setLoadingText('Loading complete!');
      }
  
      return () => clearInterval(interval);
    }, [characters]); 

    if(!characters) return (
        <p>{loadingText}</p>
    );

    return (
        <>
            <div className="characters-row">
                {characters.map((character, index) => (
                    <CharacterListItem character={character} key={index}/>
                ))}
            </div>
        </>
    );
}

export default CharacterList;
