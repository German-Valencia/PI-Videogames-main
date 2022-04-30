import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import VideogameCreate from "./components/VideogameCreate/VideogameCreate";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route exact path="/create" component={VideogameCreate} />
          <Route exact path="/about" component={About} />
          <Route exact path="/videogames/:id" component={Detail} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
