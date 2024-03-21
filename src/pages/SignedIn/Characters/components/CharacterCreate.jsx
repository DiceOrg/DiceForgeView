import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

export default function CharacterCreate() {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    async function createCharacter() {
        try {
            console.log(name);
            const jwtToken = Cookies.get('jwt');

            await fetch(`https://localhost:7256/character/?name=${name}`, {
                method: 'PUT',
                headers: {
                    'accept': "*/*",
                    'Authorization': `Bearer ${jwtToken}`,
                }
            }
            ).then(res => res.json());
            
            navigate("/Characters");

        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    const changeName = (event) => {
        setName(event.target.value);
    }

    return (
        <div className="characters-container">
            <h1>Create New Character</h1>
            <span>
                Name: <input type="text" onChange={(event) => changeName(event)}></input>
            </span>
            <button onClick={() => createCharacter()}>Create</button>
        </div>
    );
  }