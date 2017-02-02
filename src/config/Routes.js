import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';

import FlightDetail from '../components/flight/FlightDetail';

class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/flightdetail" component={FlightDetail} />
            </Router>
        )
    }
}

export default Routes