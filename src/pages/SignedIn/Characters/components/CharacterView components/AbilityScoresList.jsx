import AbilityScoresListItem from "./AbilityScoresListItem";

export default function AbilityScoresList({ abilities, character, setCharacter }) {

    return (
        <>
            {
                abilities.map((ability, key) => 
                <>
                    <AbilityScoresListItem 
                    index = {key}
                    ability_ref={ability} 
                    setCharacter={setCharacter} 
                    character={character}
                    key = {key}
                    />
                </>)
            }
        </>
    );
}