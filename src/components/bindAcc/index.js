import React from 'react';
import {Tooltip, Button, Form, Input, Icon, TreeSelect} from 'antd';
import "./index.less"
const FormItem = Form.Item;

class Binding extends React.Component {

    render (){
        return(
            <div className='bindingForm'>
                <div className="bindTitle">
                    账号绑定
                </div>
                <div className="formGroup">
                    <div className="logo">
                        <Icon type="wechat" style={{ fontSize: '46px', color: '#7dd33c' }} theme="outlined" />
                    </div>
                    <div className="bindDes">
                        <div>绑定微信</div>
                        <div>当前未绑定微信账号</div>
                    </div>
                    <div style={{flex:1}}></div>
                    <div className="bindBtn">
                        绑定
                    </div>
                </div>
                <div className="formGroup">
                    <div className="logo">
                        <Icon type="alipay" style={{ fontSize: '46px', color: '#1d82fe' }} theme="outlined" />
                    </div>
                    <div className="bindDes">
                        <div>绑定微信</div>
                        <div>当前未绑定微信账号</div>
                    </div>
                    <div style={{flex:1}}></div>
                    <div className="bindBtn">
                        绑定
                    </div>
                </div>
                <div className="formGroup">
                    <div className="logo">
                        <Icon type="qq" style={{ fontSize: '46px', color: '#f9ad08' }} theme="outlined" />
                    </div>
                    <div className="bindDes">
                        <div>绑定微信</div>
                        <div>当前未绑定微信账号</div>
                    </div>
                    <div style={{flex:1}}></div>
                    <div className="bindBtn">
                        绑定
                    </div>
                </div>
                <div className="formGroup">
                    <div className="logo">
                        <Icon type="twitter" style={{ fontSize: '46px', color: '#7dd33c' }} theme="outlined" />
                    </div>
                    <div className="bindDes">
                        <div>绑定微信</div>
                        <div>当前未绑定微信账号</div>
                    </div>
                    <div style={{flex:1}}></div>
                    <div className="bindBtn">
                        绑定
                    </div>
                </div>
            </div>
        )
    }


}
export default Form.create()(Binding);