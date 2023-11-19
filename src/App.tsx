import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { characterRepository } from './modules/characters/infrastructure/ApiCourseRepository';
import { CharactersList } from './sections/characters/CharactersList';
import './App.css';
import { CharactersContextProvider } from './sections/characters/CharactersContext';

const queryClient = new QueryClient();

function App() {
  const repository = characterRepository();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div>
        <CharactersContextProvider repository={repository}>
          <CharactersList />
        </CharactersContextProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
