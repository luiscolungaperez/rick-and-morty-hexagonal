import { Character } from '../../domain/Character';
import { CharacterRepository } from '../../domain/CharacterRepository';

export const getAllCharacters = async (
  characterRepository: CharacterRepository,
): Promise<Character[]> => {
  return characterRepository.getAll();
};
