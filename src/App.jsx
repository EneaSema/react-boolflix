import { SearchProvider } from "./contexts/Searchcontext";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";

function App() {
  return (
    <SearchProvider>
      <Header></Header>
      <Main></Main>
    </SearchProvider>
  );
}

export default App;
