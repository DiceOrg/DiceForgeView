import React from 'react'
import Skill from "./Skill.jsx"

export default function SkillList({setCharacter, character}) {

    console.log("skills:", character.skills.sort((a, b) =>{
      if ( a.name < b.name)
       return -1;
      else 
       return 1;
      }));

    return (
        <>
        {character.skills.sort((a, b) =>{
          if ( a.name < b.name)
          return -1;
          else 
          return 1;
          }).map((skill, key) => 
        <>
            <Skill
              skill_ref={skill}
              skill_name={skill.name}
              key={key}
              abilities={character.abilities}
              setCharacter={setCharacter}
              character={character}
            />
            </>
          )}
        </>
    )
}
