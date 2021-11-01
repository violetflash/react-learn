import { Header, PaginationPage } from "./pages";
import { Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>

      </Switch>
      <PaginationPage/>
    </div>
  );
}

export default App;
