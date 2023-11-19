import { Character } from '../../domain/Character';
import { CharacterRepository } from '../../domain/CharacterRepository';

export const getCourse = async (
  characterRepository: CharacterRepository,
  id: number,
): Promise<Character | null> => {
  return characterRepository.get(id);
};
