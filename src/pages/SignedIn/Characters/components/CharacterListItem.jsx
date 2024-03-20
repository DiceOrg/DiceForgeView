export default function CharacterListItem({ character }) {
    const name = character.name;
    const race = character.race;
    const class_ = character.class_;

    return (
        <div className="column character-column">
            <div className="character-card">
              <h2>{name}</h2>
              <h4>{race ? race : "Raceless"} {class_ ? class_ : "Classless"}</h4>
            </div>
        </div>
    );
  }