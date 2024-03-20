import React, { useEffect, useState } from "react";
import CharacterListItem from "./CharacterListItem";
import Cookies from "js-cookie";

function CharacterList() {
  
  return (
    <>
      <ul className="character-list">
        {characters.map((character, index) => (
          <li key={index} className="character-card">
            <h2>{character.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CharacterList;
