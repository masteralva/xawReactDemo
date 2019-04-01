import React from 'react'
import {Button,Input} from 'antd'
import './index.less';
export default class extends React.Component {
    state = {
        count:0
    }

    render () {
        return(
            <div className="content">
                <p>React生命周期</p>
                <Input type="text"/>
                <button onClick ={()=>{this.setState({
                    count: this.state.count+1
                })}}>点击一下</button>
                <Button onClick ={()=>{this.setState({
                    count: this.state.count+1
                })}}>点击一下</Button>
                <p>{this.state.count}</p>

            </div>
        )
    }
}