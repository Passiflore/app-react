import React, {Component} from 'react';
import mainLogo from'../img/icon_app.svg';

//Getting our logo so we can use it in our Navigation bar

class Logo extends Component {
    render() {
      return (
        <nav>
          <div className="logo">
            <img src={mainLogo}/>
            <h1 className="logoTitle">The Shrimp Cocktail</h1>
          </div>
        </nav>
      );
    }
  }

export default Logo;