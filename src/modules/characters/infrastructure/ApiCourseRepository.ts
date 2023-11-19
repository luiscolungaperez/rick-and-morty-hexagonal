import { Character } from '../domain/Character';
import { CharacterRepository } from '../domain/CharacterRepository';

export const characterRepository = (): CharacterRepository => {
  return {
    get,
    getAll,
  };
};

const fetchCharacters = async (): Promise<Character[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const { results }: { results: Character[] } = await response.json();

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return results;
};

async function get(id: number): Promise<Character | null> {
  return await Promise.resolve({ id, image: 'sd', species: 'as', name: 'as', status: 'as' });
}

async function getAll(): Promise<Character[]> {
  const characters = await fetchCharacters();

  return characters;
}
