import { Character } from './Character';

export interface CharacterRepository {
  get: (id: number) => Character | null | Promise<Character | null>;
  getAll: () => Character[] | Promise<Character[]>;
}
