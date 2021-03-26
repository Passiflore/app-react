import Search from '../components/Search'
import Results from '../components/Results'
import axios from 'axios'
import {useState} from 'react';
import NavBar from '../components/Navigation'
import Movies from '../components/Movies';
import Footer from '../components/Footer'

//Website homepage

const Home = () => {

    const [state, setState] = useState({
      s:"",
      results:[],
      selected: {}
    });

    const apiurl = "https://api.themoviedb.org/3/search/movie?api_key=2f071489721e98854152263cf924a450"

    const search =(e) =>{
      if (e.key === "Enter") {
        axios(apiurl + '&query=' + state.s + '&language=en-US&page=1&include_adult=false').then(({data}) =>{
          let results = data.results

          setState(prevState =>{
            return {...prevState, results: results}
          })
          console.log(results)
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
                <NavBar  />
            </header>
            <main className="mainContainer">
                <Search handleInput={handleInput} search={search} />
                <Results results={state.results} />
                <Movies />
            </main>
            <footer>
              <Footer />
            </footer>
      </div>

    )

}

export default Home;