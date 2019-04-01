import React from 'react'
import {Link,HashRouter,Route,Switch} from 'react-router-dom'
import Main from './Main'
import About from './About'
import Topic from './Topic'

export default class Home extends React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>main</Link>
                        </li>
                        <li>
                            <Link to='/about'>about</Link>
                        </li>
                        <li>
                            <Link to='/topic'>topic</Link>
                        </li>
                        <hr/>
                        <Switch>
                            <Route exact path='/' component={Main}></Route>
                            <Route path='/about' component={About}></Route>
                            <Route path='/topic' component={Topic}></Route>
                        </Switch>
                    </ul>
                </div>
            </HashRouter>
        )
    }
}