import { Header, PaginationPage, IntersectionPage, Home } from "./pages";
import { Switch, Redirect, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/pagination" component={PaginationPage}/>
        <Route path="/intersection" component={IntersectionPage}/>
        <Redirect to="/" component={Home} exact/>
      </Switch>
    </div>
  );
}

export default App;
