import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import {BrowserRouter,Switch, Route} from "react-router-dom"
import Details from "./components/Details";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/details" exact component={Details}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
