import React from 'react'
import {Link,HashRouter as Router,Route,Switch} from 'react-router-dom'
import About from "../route1/About";
export default class Main extends React.Component{
    render(){
        return(

                <div>
                    this is Main page
                    <Link to='/123/a'>123</Link>
                    <Route path="/123/a" component={About}/>
                    {this.props.children}
                </div>

        )
    }
}