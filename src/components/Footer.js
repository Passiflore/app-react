import React from 'react';
import LogoF from '../img/LogoL.svg'
import LogoI from '../img/LogoI.svg'

const footer = () => {
    return (
        <div  className="footer">
            <p class="social">Nos reseaux</p>
            <div className="Logo">
                <img src={LogoF}></img>
                <img src={LogoI}></img>
            </div>

            <p className="footerText"> 
                    The Shrimp Cocktail © 2021 - Tous droits réservés ®
            </p>
            <p className="footerText2">
                H2-G2 &#x1F90D;
            </p>
       

            
            
        </div>
    );
};

export default footer;