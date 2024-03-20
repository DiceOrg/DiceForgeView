import Skills from "../../Skills";
import Abilities from "../Abilities/Index";

export default function CharacterView({ character, setCharacter }) {

    if ( character == null )
        return <>loading...</>

    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    <div className="box">Container 1 - Box 1
                    <CharacterList/>
                    </div>
                </div>
                <div className="column">
                    <div className="box">Container 1 - Box 1</div>
                </div>
            </div>
            <div className="row">
                <div className="column size-1">
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Trackables</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Ability Scores</h5>
                        </header>
                        <div className="content">
                            {Object.keys(character.abilities).map((ability_name, key) => (
                                <Abilities ability_name={ability_name} ability={character.abilities[ability_name]} key={key} setCharacter={setCharacter} character={character}/>
                            ))}
                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Defenses</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Equipment</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Notes</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                </div>
                <div className="column size-2">
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Actions</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Spells</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Abilities</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Feats</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                </div>
                <div className="column size-3">
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Skills</h5>
                        </header>
                        <div className="content">
                            {Object.keys(character.skills).map((skill, key) => (
                                    <Skills skill={character.skills[skill]} skill_name={skill} key={key} abilities={character.abilities} 
                                    setCharacter={setCharacter} character={character}/>
                                ))}
                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Proficiency</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Languages</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                    <div className="box">
                        <header className="box-header">
                            <h5 className="title">Proficiencies</h5>
                        </header>
                        <div className="content">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}