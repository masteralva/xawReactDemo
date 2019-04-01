import React from 'react';
import {Modal} from 'antd';
export default class Name extends React.Component {
    state={
        visible:false
    }
    componentDidMount (){
        if(this.props.visible){
            this.setState({visible:this.props.visible})
        }
    }
    render() {
        return (
            <Modal
                visible={this.state.visible}
            >
                {this.props.children}
            </Modal>
        )
    }
}