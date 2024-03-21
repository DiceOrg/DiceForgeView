import { useEffect } from "react";

export default function CharacterCreate() {


    return (
        <div className="characters-container">
            <h1>Create New Character</h1>
            <span>
                Name: <input type="text" name="name" ></input>
            </span>
            <button>Create</button>
        </div>
    );
  }