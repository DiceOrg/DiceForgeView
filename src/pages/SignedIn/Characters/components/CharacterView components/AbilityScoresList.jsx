import AbilityScoresListItem from "./AbilityScoresListItem";

export default function AbilityScoresList({ abilities, character, setCharacter }) {

    return (
        <>
            {Object.keys(abilities).map((ability_name, key) => 
                <>
                    {ability_name != "id" ? <AbilityScoresListItem 
                        ability_name={ability_name} 
                        ability={abilities[ability_name]} 
                        key={key} 
                        setCharacter={setCharacter} 
                        character={character} /> 
                        : <></>}
                </>
            )}
        </>
    );
}