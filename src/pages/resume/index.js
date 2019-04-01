import React from 'react'
import {Card,Form,Button,Input,Icon,message} from 'antd'
import './index.less'



export default class Resume extends React.Component {
    state = {

    };



    render(){
        return(
            <div style={{minWidth:'50%',width:"100%",padding: "40px 40px"}}>
                <Form layout="horizontal">
                    <div className="basicInfo">
                        <div className='title'>
                            个人信息
                        </div>
                        <div className='basicInfoContainer'>
                            <img className="userPic" src="/assets/userPic.jpeg" alt="图片加载失败"/>
                            <div className='column-wrapper'>
                                <div className="row-wrapper">
                                    26岁
                                    <span>|</span>男
                                    <span>|</span>本科
                                    <span>|</span>1年工作经验
                                </div>
                                <div className="row-wrapper">
                                    <Icon className="icon" type="phone" theme="outlined" />
                                    15669969921
                                    <span>|</span>
                                    <Icon className="icon" type="mail" theme="outlined" />
                                    wamhm@126.com
                                    <span>|</span>
                                    <Icon className="icon" type="wechat" theme="filled" />
                                    ihatooChinese
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='education'>
                        <div className='title'>
                            教育背景
                        </div>
                        <div className="educationContainer">
                            <div className='row'>
                                <div className='pair'>
                                    <span>就读院校：</span>
                                    <span>山东蓝翔技校</span>
                                </div>
                                <div className='pair'>
                                    <span>专业：</span>
                                    <span>挖掘机、汽修、美容美发</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='pair'>
                                    <span>学位：</span>
                                    <span>大学专科</span>
                                </div>
                                <div className='pair'>
                                    <span>在读时间：</span>
                                    <span>1999-2009</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair bold">
                                    在校经历：
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair">
                                    例如：<br/>
                                    1、汽修大赛第一名；<br/>
                                    2、挖掘机专业技能满分，哪里不爽挖哪里；<br/>
                                    3、几须三番钟完成洗剪吹；
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair bold">
                                    培训经历：
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair">
                                    例如：<br/>
                                    1、汽修大赛第一名；<br/>
                                    2、挖掘机专业技能满分，哪里不爽挖哪里；<br/>
                                    3、几须三番钟完成洗剪吹；
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='workingExp'>
                        <div className='title'>
                            工作经历
                        </div>
                        <div className="workingExpContainer">
                            <div className='row'>
                                <div className='pair'>
                                    <span>公司名称：</span>
                                    <span>哈兔中文网</span>
                                </div>
                                <div className='pair'>
                                    <span>所属行业：</span>
                                    <span>教育</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='pair'>
                                    <span>职位名称：</span>
                                    <span>首席高级中文教师</span>
                                </div>
                                <div className='pair'>
                                    <span>在职时间：</span>
                                    <span>2010-2018</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair bold">
                                    工作内容：
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair">
                                    例如：<br/>
                                    1、主要负责新员工入职培训；<br/>
                                    2、分析制定员工每个月个人销售业绩；<br/>
                                    3、帮助员工提高每日客单价，整体店面管理等工作；
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair bold">
                                    工作业绩：
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair">
                                    例如：<br/>
                                    1.取得的成绩…<br/>
                                    2.实现的突破…<br/>
                                    3.获得的表彰…
                                </div>
                            </div>
                        </div>

                    </div>
                </Form>
            </div>
        )
    }
}
