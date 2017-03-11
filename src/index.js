import React from 'react';
import ReactDOM from 'react-dom';
import Requests from './js/components/Requests';
import PrayerList from './js/components/PrayerList';
import NewRequest from './js/components/NewRequest';
import Home from './js/components/Home';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
   <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Home}/>
         <Route path="home" component={Home}/>
         <Route path="requests" component={Requests}/>
         <Route path="prayer-list" component={PrayerList}/>
         <Route path="new-request" component={NewRequest}/>
      </Route>
   </Router>,
   document.getElementById('root')
);