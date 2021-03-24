import './App.css';
import Home from "./pages/Home";
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import {BrowserRouter,Switch, Route} from "react-router-dom"


// api_key: "2f071489721e98854152263cf924a450"
// api_URL: "https://api.themoviedb.org/3/movie/550?"
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
