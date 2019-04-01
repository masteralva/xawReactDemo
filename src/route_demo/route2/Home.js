import React from 'react'
import {Link} from 'react-router-dom'


export default class Home extends React.Component{
    render(){
        return(
                <div>
                    router2
                    <ul>
                        <li>
                            <Link to='/123'>main</Link>
                        </li>
                        <li>
                            <Link to='/about'>about</Link>
                        </li>
                        <li>
                            <Link to='/topic'>topic</Link>
                        </li>
                        <hr/>
                        {this.props.children}
                    </ul>
                </div>
        )
    }
}