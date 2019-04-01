import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchMenu } from './../../redux/action';
import MenuConfig from './../../config/menuConfig';
import './index.less';
const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component{
    state={
        currentKey:''
    }
    componentWillMount(){
        const menuTreeNode =  this.renderMenu(MenuConfig)
        let currentKey = window.location.hash.replace(/#|\?.*$/g,'')
        this.setState({
            currentKey,
            menuTreeNode
        })
    }

    //菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
                        <NavLink to={item.key}>{item.title}</NavLink>
                    </Menu.Item>
        })
    }

    render(){
        return(
            <div className='navLeft'>
                <div className='logo'>
                    <NavLink to="/admin" className='img'>
                        <img style={{height:"100%",width:"100%"}} src="/assets/hatu_logo.png" alt=""/>
                    </NavLink>
                </div>
                <div className='navContent'>
                    <Menu
                        seclectedkeys={this.state.currentKey}
                        theme="dark"
                    >
                        { this.state.menuTreeNode }
                    </Menu>
                </div>

            </div>
        )
    }
}
export default connect()(NavLeft);