import React from 'react';
import {Modal, Button, Form, Input, Icon, TreeSelect} from 'antd';
import './index.less'
const FormItem = Form.Item;
const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")
class Security extends React.Component {
    state={
        visible1: false
    }
    // 弹窗1
    showModal = () => {
        this.setState({
            visible1: true,
        });
    }
    handleOk = (e) => {
        // console.log(e);

        if(  reg.test(this.props.form.getFieldsValue(["newEmail"]).newEmail)){
            console.log(this.props.form.getFieldsValue())
            this.setState({
                visible1: false,
            });
            alert("验证已发送")
        }


    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible1: false,
        });
    }

    render (){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form className="securityForm" >
                <div className="basicInfoTitle">安全设置</div>
                <div className="formGroup">
                    <div>
                        <div className="formGroup-title">邮箱</div>
                        <div><span>当前密码强度：</span><span>强</span></div>
                    </div>
                    <div onClick={this.showModal} className='modify'>修改</div>
                    <Modal
                        title="更改邮箱"
                        visible={this.state.visible1}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <FormItem>
                            {
                                getFieldDecorator('newEmail',{
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                        required: true,
                                        message: '邮箱不能为空',
                                    }],
                                })(
                                    <Input prefix={<Icon type="mail"/>} placeholder="新邮箱" />
                                )
                            }
                        </FormItem>
                    </Modal>
                </div>
                <div className="formGroup">
                    <div>
                        <div className="formGroup-title">密保手机</div>
                        <div><span>已绑定手机：</span><span>138****8293</span></div>
                    </div>
                    <div className='modify'>修改</div>
                </div>
                <div className="formGroup">
                    <div>
                        <div className="formGroup-title">密保问题</div>
                        <div><span>未设置密保问题，密保问题可有效保护账户安全</span><span></span></div>
                    </div>
                    <div className='modify'>修改</div>
                </div>
                <div className="formGroup">
                    <div>
                        <div className="formGroup-title">备用邮箱</div>
                        <div><span>已绑定邮箱：</span><span>ant***sign.com</span></div>
                    </div>
                    <div className='modify'>修改</div>
                </div>
                <div className="formGroup">
                    <div>
                        <div className="formGroup-title">MFA 设备</div>
                        <div><span>未绑定 MFA 设备，绑定后，可以进行二次确认</span><span></span></div>
                    </div>
                    <div className='modify'>修改</div>
                </div>

            </Form>
        )
    }


}
export default Form.create()(Security);