import "./index.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import {BrowserRouter,Switch, Route} from "react-router-dom"
import Details from "./components/Details";

//Display our website

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/details" exact component={Details}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
