import { SearchProvider } from "./contexts/Searchcontext";
import Header from "./assets/components/header-sections/Header";
import Main from "./assets/components/main-sections/Main";

function App() {
  return (
    <SearchProvider>
      <Header></Header>
      <Main></Main>
    </SearchProvider>
  );
}

export default App;
