import Search from '../components/Search'
import {useState} from 'react';
import Navigation from '../components/Navigation'

const Home = () => {
    const [state, setState] = useState({
        s:"",
        results:[],
        selected: {}
    
      });
      
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
                <h1>The shrimp cocktail</h1>
                <Navigation  />
            </header>
            <main>
                <Search handleInput={handleInput} />
            </main>
      </div>

    )

}
export default Home;