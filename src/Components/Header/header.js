

import React, {Component} from 'react';
import '../Header/header.css';

import bg from '../assets/desktop.jpg'

export default class Header extends Component {
    render() {
        return(
        <header id="landingPage" style={{backgroundImage: `url(${bg})`}}>
            <div className="Header-box">
                <div className="Header-content">
                    <strong> 
                        Aprenda a programar assistindo!
                    </strong>                    
                    <h5>
                    veja como desenvolvedores experientes resolvem problemas em tempo-real.
                    Assistir a tutoriais com script é ótimo, 
                    mas entender como os desenvolvedores pensam é inestimável.    
                    </h5>                   
                </div>  
                            
            </div>                              
        </header>
        );
    }
}