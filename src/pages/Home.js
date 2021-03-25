import Search from '../components/Search';
import {useState} from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Movies from '../components/Movies';
import Subtitle from '../components/Subtitle';
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
                <Logo />
                <Navigation  />
            </header>
            <main>
                <Search handleInput={handleInput} />
                <Subtitle/>
                <Movies />
            </main>
      </div>

    )

}
export default Home;