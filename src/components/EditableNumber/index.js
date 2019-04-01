import React from 'react';
import {Input,Form,InputNumber} from "antd";
const FormItem = Form.Item;

class EditableNumber extends React.Component {
    state={        
        number:this.props.number,
        numberShow:true,
        rules:this.props.rules,
        placeholder:this.props.placeholder
    }
    edit=()=>{
        this.setState({
            numberShow:false
        })
    }

    modify=()=>{
        let newNumber = this.props.form.getFieldsValue(["number"])
        this.setState({
            number:newNumber.number,
            numberShow:true
        })
    }
    unedit=()=>{
        this.setState({
            numberShow:true
        })
    }
    handleNumberChange = (value) => {
        this.setState({
            number: value
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {number,rules} = this.state
        return (
            <div>
                {this.state.numberShow?
                <div className={this.props.className} onClick={this.edit}>
                    {number}
                </div>:
                <FormItem >
                    {
                        getFieldDecorator('number', {
                            initialValue: '',
                            rules
                        })(
                            <div className='edit'>

                                <InputNumber
                                    autoFocus={true}
                                    min={1}
                                    max={10}
                                    value={this.state.number}
                                    onChange={this.handleNumberChange}
                                    onBlur={this.unedit}
                                />

                                {/*<Input autoFocus placeholder={placeholder} onPressEnter={this.modify} onBlur={this.unedit} />*/}
                                {/*<Button type="primary" onClick={this.modify}>确认</Button>*/}
                            </div>
                        )
                    }
                </FormItem>}
            </div>
        )
    }
}

export default Form.create()(EditableNumber);