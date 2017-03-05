import React, {Component} from 'react';
import logo from '../../img/logo.svg';

import '../../css/Footer.css';

class Footer extends Component {
   render() {
      return (
         <div className="footer">
            <img src={logo} className="App-logo" alt="logo"/>
         </div>
      );
   }
}

export default Footer;
