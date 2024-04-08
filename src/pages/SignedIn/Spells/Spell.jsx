import React from 'react'

export default function Spell({spell}) {
    

    return (
        <>
        <li>
            {spell.name} {spell.concentration ? "(C)" : ""}
        </li>
        </>
    )
}
