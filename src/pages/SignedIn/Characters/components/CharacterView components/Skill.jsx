import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Skill({ skill_name, skill_ref, abilities, character, setCharacter }) {

    const [skill, setSkill] = useState(skill_ref);
    const [alteration, setAlteration] = useState(false);

    async function updateSkill() {
        try {
            const jwtToken = Cookies.get('jwt');

            await fetch(`https://localhost:7256/character/Skill/${skill.id}`, {
                method: 'PUT',
                headers: {
                    'accept': "*/*",
                    'Authorization': `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(skill)
            }
            ).then(res => res.json());

        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    let prof_value = 2;
    let exp_value = 2;

    let skill_value = abilities[skill.attribute.toLowerCase()].value;

    // inverts checkbox
    const change = (event) => {
        const { name } = event.target;
        let objectToChange = { ...character };
        objectToChange.skills[skill_name][name] = !skill[name];
        setCharacter(objectToChange);
        setSkill({ ...skill, [name]: !skill[name] })
        setAlteration(true);
    }

    useEffect(() => {
        // do not update if alteration has not been made
        if (alteration) {
            updateSkill();
            setAlteration(false);
        }
    }, [alteration])

    return (
        <div className="row skill-row">
            <div className="column skill-left">{Math.floor((skill_value - 10) / 2 + prof_value * skill.prof + exp_value * skill.exp)} {skill_name} ({skill.attribute.slice(0, 3)}) </div>
            <div className="column skill-right">
                <input type="checkbox" name="prof" checked={skill.prof} onChange={(event) => change(event)} />
                <input type="checkbox" name="exp" checked={skill.exp} onChange={(event) => change(event)} />
            </div>
        </div>
    );
}