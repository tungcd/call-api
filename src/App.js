import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routers from './routers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className='row'>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <Menu />
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <Switch>
                                {this.ShowContentMenu(routers)}
                            </Switch>
                        </div>
                    </div>
                </div >
            </Router>
        );
    }

    ShowContentMenu = (routers) => {
        var result = null;
        result = routers.map((router, index) => {
            return (
                <Route
                    key={index}
                    path={router.path}
                    exact={router.exact}
                    component={router.main}
                />
            )
        })
        return result;
    }
}

export default App;
