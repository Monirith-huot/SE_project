import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Booking from '@/pages/Booking';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/booking' component={Booking} />
      </Switch>
    </Router>
  );
}
