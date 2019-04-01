import React from 'react';
import {Link,HashRouter as Router,Route,Switch} from 'react-router-dom'
import Main from "../route1/Main";
import About from "../route1/About";
import Topic from "../route1/Topic";
import Home from './Home'
export default class IRouter extends React.Component{

    render () {
        return(
            <Router>
                <Home>
                    <Route path='/123' component={Main}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/topic' component={Topic}></Route>
                </Home>
            </Router>
        )

    }

}