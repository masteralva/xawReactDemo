import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink,Route,Switch,Redirect } from 'react-router-dom';
import './index.less'
import BasicSetting from './../../components/basicSetting'
import Security from './../../components/security'
import Binding from './../../components/bindAcc'


export default class userCentre extends React.Component {
    render() {
        return (
            <div style={{width:"100%"}}>
                <div className="userCentre">
                    <Menu defaultSelectedKeys={["1"]}  style={{width:"200px"}}>
                        <Menu.Item style={{paddingLeft:"24px"}} key="1">
                            <NavLink style={{textDecoration:"none",color:"inherit"}} to={"/setting/basicSetting"}>
                                <span >
                                基本设置
                                </span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item style={{paddingLeft:"24px"}} key="2">
                            <NavLink style={{textDecoration:"none",color:"inherit"}} to={"/setting/securitySetting"}>
                                <span >
                                安全设置
                                </span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item style={{paddingLeft:"24px"}} key="3">
                            <NavLink style={{textDecoration:"none",color:"inherit"}} to={"/setting/binding"}>
                                <span >
                                账号绑定
                                </span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                    <div className="windows">
                        <Route path="/setting" render={()=>
                            <Switch>
                                <Route path='/setting/basicSetting' component={BasicSetting}/>
                                <Route path='/setting/securitySetting' component={Security}/>
                                <Route path='/setting/binding' component={Binding}/>
                                <Redirect to="/setting/basicSetting"/>
                            </Switch>
                        }/>
                    </div>
                </div>
            </div>

        )
    }
}