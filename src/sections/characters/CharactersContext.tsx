import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { Character } from '../../modules/characters/domain/Character';
import { CharacterRepository } from '../../modules/characters/domain/CharacterRepository';
import { getAllCharacters } from '../../modules/characters/application/get-all/getAllCharacters';

export interface ContextState {
  characters: Character[];
}

export const CharactersContext = createContext({} as ContextState);

export const CharactersContextProvider = ({
  children,
  repository,
}: PropsWithChildren<{ repository: CharacterRepository }>) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  async function getCharacters() {
    const characters = await getAllCharacters(repository);

    setCharacters(characters);
  }

  useEffect(() => {
    getCharacters().catch((e) => {
      console.error(e);

      throw new Error('Unable to get characters');
    });
  }, []);

  return <CharactersContext.Provider value={{ characters }}>{children}</CharactersContext.Provider>;
};

export const useCharactersContext = () => useContext(CharactersContext);
