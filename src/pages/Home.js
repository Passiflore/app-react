import Search from '../components/Search'
import Results from '../components/Results'
import axios from 'axios'
import {useState} from 'react';
import Navigation from '../components/Navigation'
import Logo from '../components/Logo';
import Movies from '../components/Movies';
import SearchGendra from '../components/SearchGendra'

const Home = () => {

    const [state, setState] = useState({
      s:"",
      results:[],
      selected: {}
    });


    const apiurl = "https://api.themoviedb.org/3/movie/upcoming?api_key=2f071489721e98854152263cf924a450"

    const search =(e) =>{
      if (e.key === "Enter") {
        axios(apiurl + '&s=' + state.s).then(({data}) =>{
          let results = data.results

          setState(prevState =>{
            return {...prevState, results: results}
          })
          console.log(data)
        })

      }


    }



      
      const handleInput = (e) => {
        let s =e.target.value;
    
        setState(prevState => {
          return {...prevState, s: s }
        });
        console.log(state.s);
      }

    return (
        <div className="container">
            <header>
                <Logo />
                <Navigation  />
                <SearchGendra />
            </header>
            <main>
                <Search handleInput={handleInput} search={search} />
                <Results results={state.results} />
                <Movies />
            </main>
      </div>

    )

}
export default Home;
