import { useCharactersContext } from './CharactersContext';

export const CharactersList = () => {
  const { characters } = useCharactersContext();

  return (
    <div>
      {characters?.map((character) => (
        <div key={character.id}>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} loading="lazy" />
          <p>{character.status}</p>
          <p>{character.species}</p>
        </div>
      ))}
    </div>
  );
};
