import React from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;
export default class MyTag extends React.Component {
    state = { checked: false };

    handleChange = (checked) => {
        this.setState({ checked });
    }
    componentDidMount(){
        if(this.props.defaultValue){
            this.setState({
                checked:true
            })
        }
    }
    render() {
        return <CheckableTag style={{userSelect:"none",padding:"0 8px",
            marginRight: "24px", fontSize: "14px"}} {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
    }
}