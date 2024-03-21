import React from 'react'
import Skill from "./Skill.jsx"

export default function SkillList({setCharacter, character}) {
    

    console.log("skill", character.skills)

    return (
        <>
        {Object.keys(character.skills).map((skill, key) => 
        <>
            {skill != "id" ? <Skill
              skill_ref={character.skills[skill]}
              skill_name={skill}
              key={key}
              abilities={character.abilities}
              setCharacter={setCharacter}
              character={character}
            /> : <></>}
            </>
          )}
        </>
    )
}
