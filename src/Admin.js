import React from 'react'
import {Row,Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft/index2'
import './style/common.less'
export default class Admin extends React.Component {
    state={
        width:"256px"
    }
    handle=(event)=>{
        this.setState({width: event});
    }
    render(){
        return(
            <div className="container">
                <div  className="nav-left">
                    <NavLeft callback={this.handle}/>
                </div>
                <div style={{paddingLeft:this.state.width}} className="main">
                    <Header />
                    <Row className="content">
                            {this.props.children}

                    </Row>
                    <Footer/>
                </div>
            </div>
        )
    }
}