import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../../../App";
import CharacterHeader from "./CharacterHeader";
import AbilityScoresList from "./CharacterView components/AbilityScoresList";
import { SkillList } from "./CharacterView components/SkillList";
import Spells from "../../Spells";
import Equipment from "../Equipment/Equipment";

export default function CharacterView() {
    const { fetchCharacter } = useContext(DataContext)
    const [character, setCharacter] = useState();
    
    useEffect(() => {
        fetchCharacter(1, setCharacter);
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
            <CharacterHeader character={character} setCharacter={setCharacter}/>
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
                <AbilityScoresList abilities={character.abilities} character={character} setCharacter={setCharacter}/>
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
            <header className="box-header">
              <h5 className="title">Skills</h5>
            </header>
            <div className="content">
                <SkillList character={character} setCharacter={setCharacter}/>
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
