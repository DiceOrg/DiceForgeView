import React, { useState } from 'react';

export default function Spell({spell, level}) {
    
    const [popup, setPopup] = useState(false);


    let cantripLevel = 1;
    if ( spell.damage && spell.damage.damage_at_character_level ){
        cantripLevel = Math.max(
            ...Object.keys(spell.damage.damage_at_character_level)
                .filter(i => i <= level)
                .map(number => parseInt(number))
        );
    }

    return (
        <>
        <li onClick={() => setPopup(true)}>
            {spell.name} {spell.concentration ? "(C) " : ""} {spell.components && spell.components.includes("M") ? "(M) " : "" }
            Range: {spell.range + " "}
            {spell.area_of_effect ? 
                "AOE: " + spell.area_of_effect.size + " feet " + spell.area_of_effect.type + " " : 
                " "
            }
            {spell.damage ? "Damage: " +
                (spell.damage.damage_at_slot_level ? 
                    spell.damage.damage_at_slot_level[spell.level] : 
                    spell.damage.damage_at_character_level[cantripLevel]
                ) + " " + spell.damage.damage_type.name + " "
                : " "
            }
            {spell.attack_type ? spell.attack_type + " attack" : ""}
            {spell.dc ? "Save: " + spell.dc.dc_type.name : ""}
        </li>



        {popup && (<div className='popup'>
                <h3>{spell.name} ({spell.components.join(", ")})</h3>
                <p>Concentration: {spell.concentration ? "true" : "false"}</p>
                <p>Level: {spell.level}</p>
                <p>School: {spell.school.name}</p>
                {spell.material ? <p>Material: {spell.material}</p> : ""}

                <p>Range: {spell.range}</p>
                {spell.attack_type ? <p>Attack type: {spell.attack_type}</p> : ""}
                {spell.dc ? <p>DC: {spell.dc.dc_type.name} On save: {spell.dc.dc_success} damage</p> : ""}
                {spell.area_of_effect ? <p>AOE: {spell.area_of_effect.size + " feet " + spell.area_of_effect.type}</p> : ""}
                {spell.damage ? 
                    <p>
                        Damage: &nbsp;
                        {spell.damage.damage_at_slot_level ? 
                            spell.damage.damage_at_slot_level[spell.level] : 
                            spell.damage.damage_at_character_level[cantripLevel] 
                        } &nbsp;
                        {spell.damage.damage_type.name}
                    </p> : ""
                }

                {spell.desc.map((desc, key) => (
                    <p key={key }>{desc}</p>
                ))}

                {spell.higher_level.length > 0 ? <p>Higher level: {spell.higher_level.map(up => up)}</p> : ""}

                <p>Class: {spell.classes.map(c => c.name).join(", ")}</p>
                {spell.subclasses.length > 0 ? <p>Subclass: {spell.subclasses.map(s => s.name).join(", ")}</p> : ""}

                <button onClick={() => setPopup(false)}>Close</button>
        </div>)}
        </>
    )
}
