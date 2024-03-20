import { useNavigate } from "react-router-dom";

export default function CharacterListItem({ character }) {
    const navigate = useNavigate();

    const id = character.id;
    const name = character.name;
    const race = character.race;
    const class_ = character.class_;

    const handleClick = () => {
        navigate(`/characters/${id}`, { replace: false });
    }

    return (
        <div className="column character-column" onClick={handleClick}>
            <div className="character-card">
              <h2>{name}</h2>
              <h4>{race ? race : "Raceless"} {class_ ? class_ : "Classless"}</h4>
            </div>
        </div>
    );
  }