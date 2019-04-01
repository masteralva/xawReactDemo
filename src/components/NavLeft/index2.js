import React from 'react'
import { Menu, Icon, Button } from 'antd';
import connect from "react-redux/es/connect/connect";
import {NavLink} from "react-router-dom";
import MenuConfig from './../../config/menuConfig';
import "./index.less"
const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
    state = {
        collapsed: false,
        currentKey:'',
        width:'256px'
    }

    toggleCollapsed = () => {
        if(this.state.collapsed){
            this.setState({
               width:'256px'
            });
            this.props.callback('256px')
        }else{
            this.setState({
                width:'80px'
            });
            this.props.callback('80px')
        }
        this.setState({
            collapsed: !this.state.collapsed,
        });

    }

    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={<span><Icon type="mail" /><span>{item.title}</span></span>} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
                <NavLink style={{textDecoration:"none",color:"inherit"}} to={item.key}>
                    <Icon type="pie-chart" />
                    <span >
                        {item.title}
                        </span>
                </NavLink>
            </Menu.Item>
        })
    }
    componentWillMount(){
        const menuTreeNode =  this.renderMenu(MenuConfig)
        let currentKey = window.location.hash.replace(/#|\?.*$/g,'')
        this.setState({
            currentKey,
            menuTreeNode
        })
    }

    render() {
        return (
            <div style={{ width: this.state.width }}>
                <Button onClick={this.toggleCollapsed} style={{ marginBottom: 16,position:"absolute",right:"-67px",top:"16px"}}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <div className="logoArea">
                    {
                        this.state.collapsed?<img src="/logo2.png" style={{height:50}} alt=""/>:<img style={{height:50}} src="/index.png"  alt=""/>
                    }

                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        );
    }
}
export default connect()(NavLeft);