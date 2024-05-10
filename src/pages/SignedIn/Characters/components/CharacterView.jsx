import { useState, useEffect, useContext, useRef } from "react";
import { useParams } from 'react-router-dom';
import { DataContext } from "../../../../App";
import SkillList from "./CharacterView components/SkillList";
import CharacterStyleHeader from "./CharacterView components/CharacterStyleHeader";
import CharacterHeader from "./CharacterView components/CharacterHeader";
import AbilityScoresList from "./CharacterView components/AbilityScoresList";
import Style from "./CharacterView components/Style";
import Spells from "../../Spells";
import Equipment from "../Equipment/Equipment";
import Cookies from "js-cookie";

export default function CharacterView() {
  const { id } = useParams();
  const { fetchCharacter } = useContext(DataContext)
  const [character, setCharacter] = useState();
  const [loadingText, setLoadingText] = useState('Loading...');
  const [saved, setSaved] = useState(true);

  // timer for put requests
  // when inactive for 5 seconds update form
  const INACTIVITY_TIMEOUT = 5*1000;
  const inactivityTimer = useRef(null);


  useEffect(() => {
    resetInactivityTimer();
    setSaved(false);

    return () => clearTimeout(inactivityTimer.current);
  }, [character])

  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimer.current);

    inactivityTimer.current = setTimeout(
      () => {
        updateCharacter(character);
        setSaved(true);
      }, 
      INACTIVITY_TIMEOUT
    );
  }

  const updateCharacter = async (character) => {
    const jwtToken = Cookies.get('jwt');

    await fetch(`https://localhost:7256/character/${character.id}`, {
        method: 'PUT',
        headers: {
            'accept': "*/*",
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
    }
    ).then(res => res.json()).then(console.log());
  }

  useEffect(() => {
    fetchCharacter(id, setCharacter);
  }, [])


  // Loading interface
  useEffect(() => {
    let interval;
    if (!character) {
      interval = setInterval(() => {
        setLoadingText(prevText => {
          const dots = prevText.length - "Loading".length;
          return `Loading${'.'.repeat(dots % 3 + 1)}`;
        });
      }, 1000);
    } else {
      setLoadingText('Loading complete!');
    }

    return () => clearInterval(interval);
  }, [character]); 

  if(!character) return (
    <p>{loadingText}</p>
);

  return (
    <div className="container">
      {!saved && <p>Not saved</p>}
      {saved && <p>saved</p>}
      <div className="row character-header-row">
        <div className="column size-3">
          <div className="title-box">
            <CharacterStyleHeader character={character} setCharacter={setCharacter}/>
          </div>
        </div>
        <div className="column size-4">
          <CharacterHeader character={character} setCharacter={setCharacter}/>
        </div>
      </div>
      <div className="row style-container">
        <Style character={character} setCharacter={setCharacter} />
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
            </header>
            <Equipment/>
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
            <Spells character={character}/>
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
