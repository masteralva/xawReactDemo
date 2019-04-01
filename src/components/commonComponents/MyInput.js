import React from 'react';
import {Input} from "antd";

export default class MyInput extends React.Component {
    state={
        placeHolder:''
    }
    render() {
        return (
            <Input style={{width:"160px"}} placeholder={this.state.placeHolder} />
        )
    }
    componentDidMount(){
        this.setState({
            placeHolder:this.props.placeHolder
        })
    }
}