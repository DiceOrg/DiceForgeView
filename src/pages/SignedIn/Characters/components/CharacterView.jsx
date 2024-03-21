import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { DataContext } from "../../../../App";
import SkillList from "./CharacterView components/SkillList";
import CharacterHeader from "./CharacterView components/CharacterHeader";
import AbilityScoresList from "./CharacterView components/AbilityScoresList";
import Spells from "../../Spells";
import Equipment from "../Equipment/Equipment";

export default function CharacterView() {
  const { id } = useParams();
  const { fetchCharacter } = useContext(DataContext)
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetchCharacter(id, setCharacter);
  }, [])

  if (character == null)
    return <>loading...</>

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
          <CharacterHeader />
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
            <div className="content ability-scores">
              <AbilityScoresList abilities={character.abilities} character={character} setCharacter={setCharacter} />
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
              <Equipment/>
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
              <Spells/>
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
            <header className="box-header skill-header">
              <h5 className="title">Skills</h5>
              <div className="row skill-title-row">
                <div className="column">
                  Prof
                </div>
                <div className="column">
                  Exp
                </div>
              </div>
            </header>
            <div className="content">
              <SkillList character={character} setCharacter={setCharacter} />
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
