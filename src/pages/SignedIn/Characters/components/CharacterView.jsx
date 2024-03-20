import Skills from "../../Skills";
import Abilities from "../Abilities/Index";

export default function CharacterView({ character, setCharacter }) {
  if (character == null) return <>loading...</>;

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="box">
            <h2>{character.name}</h2>
            <h3>{character.style.race}</h3>
          </div>
        </div>
        <div className="column">
          <div className="character-header">
            <div className="hit-points">
              <div className="hp">
                <button>+</button>
                <button>-</button>
                <h2>50</h2>
                <p>HP</p>
              </div>
              <div>
                <p>36</p>
                <p>Current</p>
              </div>
              <div>
                <p>50</p>
                <p>Max</p>
              </div>
              <div>
                <p>0</p>
                <p>temp</p>
              </div>
            </div>
            <div className="Character-header-right">
              <div>
                <p>16</p>
                <p>AC</p>
              </div>
              <div>
                <p>3</p>
                <p>Initiativ</p>
              </div>
              <div>
                <p>45</p>
                <p>Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column size-1">
          <div className="box">
            <header className="box-header">
              <h5 className="title">Trackables</h5>
            </header>
            <div className="content"></div>
          </div>
          <div className="box">
            <header className="box-header">
              <h5 className="title">Ability Scores</h5>
            </header>
            <div className="content">
              {Object.keys(character.abilities).map((ability_name, key) => (
                <Abilities
                  ability_name={ability_name}
                  ability={character.abilities[ability_name]}
                  key={key}
                  setCharacter={setCharacter}
                  character={character}
                />
              ))}
            </div>
          </div>
          <div className="box">
            <header className="box-header">
              <h5 className="title">Defenses</h5>
            </header>
            <div className="content"></div>
          </div>
          <div className="box">
            <header className="box-header">
              <h5 className="title">Equipment</h5>
            </header>
            <div className="content"></div>
          </div>
          <div className="box">
            <header className="box-header">
              <h5 className="title">Notes</h5>
            </header>
            <div className="content"></div>
          </div>
        </div>
        <div className="column size-2">
          <div className="box">
            <header className="box-header">
              <h5 className="title">Actions</h5>
            </header>
            <div className="content"></div>
          </div>
          <div className="box">
            <header className="box-header">
              <h5 className="title">Spells</h5>
            </header>
            <div className="content"></div>
          </div>
          <div className="box">
            <header className="box-header">
              <h5 className="title">Abilities</h5>
            </header>
            <div className="content"></div>
          </div>
          <div className="box">
            <header className="box-header">
              <h5 className="title">Feats</h5>
            </header>
            <div className="content"></div>
          </div>
        </div>
        <div className="column size-3">
          <div className="box">
            <header className="box-header">
              <h5 className="title">Skills</h5>
            </header>
            <div className="content">
              {Object.keys(character.skills).map((skill, key) => (
                <Skills
                  skill={character.skills[skill]}
                  skill_name={skill}
                  key={key}
                  abilities={character.abilities}
                  setCharacter={setCharacter}
                  character={character}
                />
              ))}
            </div>
          </div>
          <div className="box">
            <header className="box-header">
              <h5 className="title">Proficiency</h5>
            </header>
            <div className="content"></div>
          </div>
          <div className="box">
            <header className="box-header">
              <h5 className="title">Languages</h5>
            </header>
            <div className="content"></div>
          </div>
          <div className="box">
            <header className="box-header">
              <h5 className="title">Proficiencies</h5>
            </header>
            <div className="content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
