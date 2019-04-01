import React from 'react'
import { Dropdown, Row,Col,Layout, Menu, Breadcrumb,Icon,Button} from 'antd';
import './index.less'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import Utils from '../../utils/utils'
export default class Header extends React.Component{
    static contextTypes = {
        router: PropTypes.object
    }
    //方法定义区
    logout=()=>{
        this.context.router.history.push("/login")
    }

    componentWillMount(){
        this.setState({
            userName:"哈兔大佬"
        })
        setInterval(()=>{
            let time = Utils.formatDate(new Date().getTime())
            this.setState({
                time
            })
        },1000)
        // this.getWeatherAPIData() //国内天气查询
    }

    // getWeatherAPIData(){
    //     let city = '北京';
    //     Axios.jsonp({
    //         url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    //     }).then((res)=>{
    //         if(res.status == 'success'){
    //             let data = res.results[0].weather_data[0];
    //             this.setState({
    //                 dayPictureUrl:data.dayPictureUrl,
    //                 weather:data.weather
    //             })
    //         }
    //     })
    // }

    menu = (
        <Menu>
            <Menu.Item >
                <div className="dropContainer">
                    <div className="dropHeader">
                        <div>
                            <img className="userLogo" alt="一米五的我太矮了" title="一米五的我太矮了"
                                 src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132" />
                        </div>
                        <div className="dropHeaderDes">
                            <div className="nickName">一米五的我太矮了</div>
                            <div>
                                <span className="nation">英国</span>
                                <span className="deposit">余额 300</span>
                            </div>
                        </div>

                    </div>
                    <div className="navBtns">
                        <div className="flexRow">
                            <Link to="/profile/record">
                                <div className="eachBtn">
                                    <Icon type="snippets" theme="outlined" className="icon"/>
                                    <span>课时记录</span>
                                </div>
                            </Link>
                            <Link to="/profile/order">
                                <div className="eachBtn">
                                    <Icon type="snippets" theme="outlined" className="icon"/>
                                    <span>我的订单</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flexRow">
                            <Link to="/profile/discount">
                                <div className="eachBtn">
                                    <Icon type="gift" theme="outlined" className="icon"/>
                                    <span>优惠劵</span>
                                </div>
                            </Link>
                            <Link to="/setting">
                                <div className="eachBtn">
                                    <Icon type="setting" theme="outlined" className="icon"/>
                                    <span>个人设置</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Button onClick={this.logout} type="danger">
                        安全退出
                    </Button>

                </div>
            </Menu.Item>
        </Menu>
    );

    render(){
        return(
            <div className="header">
             <div className="headergap">

             </div>
            <div>
                <span style={{margin:'0 20px'}}>
                   {this.state.time}
               </span>
                <span style={{margin:'0 20px'}}>
                   欢迎，{this.state.userName}！
               </span>
            </div>
            <div className="userSetting" >
               <Link style={{marginRight:"20px"}} to="/questions">
                   <Icon type="question-circle" theme="filled" className="questions"  />
               </Link>
               <Dropdown overlay={this.menu}>
                   <img className="dd-menu-trigger new-dd-menu-trigger" alt="一米五的我太矮了" title="一米五的我太矮了"
                        src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epqFBRicygSkkZhjUMPANl9RkzphTh9icvmib3ItuwrlaMxy9TZuiceRrhHicvkbBXS88FZ1ichNqOJpTMA/132" />
               </Dropdown>
            </div>

            </div>
        )
    }
}