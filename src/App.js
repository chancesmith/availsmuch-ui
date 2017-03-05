import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import MainNav from './js/components/Navbar';
import Footer from './js/components/Footer';

import './css/App.css';

class App extends Component {
   render() {
      return (
         <div>

            <MainNav />

            <Jumbotron>
               <div className="content">
                  {this.props.children}
               </div>
            </Jumbotron>

            <Footer/>


         </div>
      );
   }
}

export default App;
