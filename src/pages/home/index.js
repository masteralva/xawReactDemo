import React from 'react';
import {Card , Row,Col,Divider,Tabs,List} from 'antd';
import "./index.less"
import {G2,Chart,Geom,Axis,Tooltip,Coord,Label,Legend,View,Guide,Shape,Facet,Util} from "bizcharts";
import DataSet from '@antv/data-set';
const TabPane = Tabs.TabPane;
export default class Home extends React.Component {
    state={
        tabSwitch:true
    }
    render() {
        const topColResponsiveProps = {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 8,
            xl: 8,
            style: { marginBottom: 24 },
        };

        const data = [
            {
                year: "1月",
                销售额: 38
            },
            {
                year: "2月",
                销售额: 52
            },
            {
                year: "3月",
                销售额: 61
            },
            {
                year: "4月",
                销售额: 145
            },
            {
                year: "5月",
                销售额: 48
            },
            {
                year: "6月",
                销售额: 38
            },
            {
                year: "7月",
                销售额: 41
            },
            {
                year: "8月",
                销售额: 45
            },
            {
                year: "9月",
                销售额: 38
            },
            {
                year: "10月",
                销售额: 95
            },
            {
                year: "11月",
                销售额: 15
            },
            {
                year: "12月",
                销售额: 26
            }
        ];
        const cols = {
            销售额: {
                tickInterval: 20
            }
        };
        const listData = [];
        for (let i = 1; i < 11; i++) {
            listData.push({
                rank:i,
                nations: `德玛西亚 ${i}号店`,
                value:20000+i
            });
        }

        return (
            <div className="homepage">
                <Row gutter={24} className="homepageFirstRow">
                    <Col {...topColResponsiveProps}>
                        <Card>
                            <div>
                                学生概要
                            </div>
                            <div className="totalStudent">
                                <span>总人数：</span>
                                <span>1000</span>
                            </div>
                            <Row className="homePageStudentInfo">
                                <Col span={6} className="dividerVertical">
                                    <div className="homepageFirstRowTitle">已注册</div>
                                    <div className="homepageFirstRowNumber">900</div>
                                </Col>
                                <Col span={6} className="dividerVertical">
                                    <div className="homepageFirstRowTitle">沟通中</div>
                                    <div className="homepageFirstRowNumber">100</div>
                                </Col>
                                <Col span={6} className="dividerVertical">
                                    <div className="homepageFirstRowTitle">试读数</div>
                                    <div className="homepageFirstRowNumber">200</div>
                                </Col>
                                <Col span={6}>
                                    <div className="homepageFirstRowTitle">已缴费</div>
                                    <div className="homepageFirstRowNumber">500</div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <Card>
                            <div>
                                教师概要
                            </div>
                            <div className="totalStudent">
                                <span>总人数：</span>100
                            </div>
                            <Row className="homePageStudentInfo">
                                <Col span={12} className="dividerVertical">
                                    <div className="homepageFirstRowTitle">全职</div>
                                    <div className="homepageFirstRowNumber">50</div>
                                </Col>
                                <Col span={12}>
                                    <div className="homepageFirstRowTitle">兼职</div>
                                    <div className="homepageFirstRowNumber">50</div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col {...topColResponsiveProps}>
                        <Card>
                            <div>
                                班级概要
                            </div>
                            <div className="totalStudent">
                                <span >总班级数：</span>1000
                            </div>
                            <Row className="homePageStudentInfo">
                                <Col span={8} className="dividerVertical">
                                    <div className="homepageFirstRowTitle">1对1</div>
                                    <div className="homepageFirstRowNumber">900</div>
                                </Col>
                                <Col span={8} className="dividerVertical">
                                    <div className="homepageFirstRowTitle">1对3</div>
                                    <div className="homepageFirstRowNumber">100</div>
                                </Col>
                                <Col span={8}>
                                    <div className="homepageFirstRowTitle">1对6</div>
                                    <div className="homepageFirstRowNumber">200</div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <div>
                    <Card className="tabsSaleCard">
                         <Tabs defaultActiveKey="1" size="large" onChange={(key)=>{
                             if(key==1){
                                 this.setState({
                                     tabSwitch:true
                                 })
                             }else{
                                 this.setState({
                                     tabSwitch:false
                                 })
                             }
                         }}>
                            <TabPane tab="销售量" key="1" >
                                <Row gutter={24}>
                                    <Col span={16}>
                                        <div style={{textAlign:"Center",fontWeight:"bold",color:"#8c8c8c"}}>
                                            销售额
                                        </div>
                                        {
                                            this.state.tabSwitch?
                                                <Chart height={400} data={data} scale={cols} forceFit>
                                                    <Axis name="year" />
                                                    <Axis name="销售额" />
                                                    <Tooltip
                                                        crosshairs={{
                                                            type: "y"
                                                        }}
                                                    />
                                                    <Geom type="interval" position="year*销售额" />
                                                </Chart>
                                                :
                                                null
                                        }
                                    </Col>
                                    <Col span={8}>
                                        <div style={{textAlign:"Center",fontWeight:"bold",color:"#8c8c8c"}}>
                                            热销国家排名
                                        </div>
                                        {
                                            listData.map((item,index)=>{
                                                return(
                                                    <div className="listItem">
                                                        <div
                                                            style={
                                                                index<3?
                                                                {backgroundColor:"#314659",color:"#fff",borderRadius:"50%",width:20,height:20,textAlign:'center'}
                                                                :
                                                                {backgroundColor:"#f5f5f5",color:"#8c8c8c",borderRadius:"50%",width:20,height:20,textAlign:'center'}
                                                            }>
                                                            {item.rank}
                                                        </div>
                                                        <div className="listItemNations">{item.nations}</div>
                                                        <div className="listItemValue">{item.value}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="注册量" key="2" >
                                <Row gutter={24}>
                                    <Col span={16}>
                                        <div style={{textAlign:"Center",fontWeight:"bold",color:"#8c8c8c"}}>
                                            注册量
                                        </div>
                                        {
                                            this.state.tabSwitch?null:
                                                <Chart height={400} data={data} scale={cols} forceFit>
                                                    <Axis name="year" />
                                                    <Axis name="销售额" />
                                                    <Tooltip
                                                        crosshairs={{
                                                            type: "y"
                                                        }}
                                                    />
                                                    <Geom type="interval" position="year*销售额" />
                                                </Chart>
                                        }

                                    </Col>
                                    <Col span={8}>
                                        <div style={{textAlign:"Center",fontWeight:"bold",color:"#8c8c8c"}}>
                                            热销国家排名
                                        </div>
                                        {
                                            listData.map((item,index)=>{
                                                return(
                                                    <div className="listItem">
                                                        <div
                                                            style={
                                                                index<3?
                                                                    {backgroundColor:"#314659",color:"#fff",borderRadius:"50%",width:20,height:20,textAlign:'center'}
                                                                    :
                                                                    {backgroundColor:"#f5f5f5",color:"#8c8c8c",borderRadius:"50%",width:20,height:20,textAlign:'center'}
                                                            }>
                                                            {item.rank}
                                                        </div>
                                                        <div className="listItemNations">{item.nations}</div>
                                                        <div className="listItemValue">{item.value}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Col>
                                </Row>
                            </TabPane>
                        </Tabs>
                    </Card>
                </div>
            </div>
        )
    }
}
