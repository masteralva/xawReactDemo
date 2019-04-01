import React from 'react';
import {Input,Form} from "antd";
const FormItem = Form.Item;
class EditableText extends React.Component {
    state={
        userName:this.props.userName,
        userNameShow:true,
        rules:this.props.rules,
        placeholder:this.props.placeholder
    }
    edit=()=>{
        this.setState({
            userNameShow:false
        })
    }
    unedit=()=>{
        this.setState({
            userNameShow:true
        })
    }
    modify=()=>{
        let newUserName = this.props.form.getFieldsValue(["userName"])
        this.setState({
            userName:newUserName.userName,
            userNameShow:true
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {userName,rules,placeholder} = this.state
        return (
            <div>
                {this.state.userNameShow?
                <div className={this.props.className} onClick={this.edit}>
                    {userName}
                </div>:
                <FormItem >
                    {
                        getFieldDecorator('userName', {
                            initialValue: '',
                            rules
                        })(
                            <div className='edit'>
                                <Input autoFocus placeholder={placeholder} onPressEnter={this.modify} onBlur={this.unedit} />
                                {/*<Button type="primary" onClick={this.modify}>确认</Button>*/}
                            </div>
                        )
                    }
                </FormItem>}
            </div>
        )
    }
}

export default Form.create()(EditableText);