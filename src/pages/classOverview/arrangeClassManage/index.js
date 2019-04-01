import React from 'react';
import "./index.less"
import {Link} from "react-router-dom"
import { Card,Input,DatePicker,List,Button,Tag,Divider,Popover} from "antd";
import Mytag from "./../../../components/myTag"
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        img:"/assets/userPic.jpeg",
        name: `小学生 ${i}`,
        labels: ["会读会写","聪明伶俐","注意力不太集中"],
        nations:`西班牙`,
        available:["周二上午八点","周五晚上9点","周末全天","周四8：30am","周三可能有空"]
    });
}


export default class ArrangeClassManage extends React.Component {

    render() {
        return (
            <div className="arrangeClass">
                <Card style={{marginBottom:"25px"}}>
                    <div className="arrangeHeader">
                        <div className="arrangeHeaderItem forBorderOnly">
                            <div className="arrangeHeaderItemTit">试读课</div>
                            <div className="arrangeHeaderItemNum">280</div>
                        </div>
                        <div className="arrangeHeaderItem forBorderOnly">
                            <div className="arrangeHeaderItemTit">1对1</div>
                            <div className="arrangeHeaderItemNum">80</div>
                        </div>
                        <div className="arrangeHeaderItem forBorderOnly">
                            <div className="arrangeHeaderItemTit">1对3</div>
                            <div className="arrangeHeaderItemNum">500</div>
                        </div>
                        <div className="arrangeHeaderItem">
                            <div className="arrangeHeaderItemTit">1对6</div>
                            <div className="arrangeHeaderItemNum">10200</div>
                        </div>
                    </div>
                </Card>
                <Card style={{marginBottom:"25px"}}>
                    <div className="arrangeFilter">
                        <span className="arrangeFilterTitle">班型：</span>
                        <Mytag>1对1</Mytag>
                        <Mytag>1对3</Mytag>
                        <Mytag>1对6</Mytag>
                    </div>
                    <Divider dashed/>
                    <div className="arrangeFilter">
                        <span className="arrangeFilterTitle">课程：</span>
                        <Mytag>《从零到一》</Mytag>
                        <Mytag>人教版《语文》</Mytag>
                        <Mytag>《轻松学中文》</Mytag>
                        <Mytag>专项写作训练</Mytag>
                    </div>
                    <Divider dashed/>
                    <div className="arrangeFilter">
                        <span className="arrangeFilterTitle">时间：</span>
                        <RangePicker
                            showTime
                            className="searchBox"
                            placeholder={['开始时间', '结束时间']}
                            format={dateFormat}
                            onOk={(e)=>console.log(e)}
                        />
                    </div>
                </Card>
                <Card className="arrangeListCard">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 10,
                        }}
                        dataSource={listData}
                        renderItem={(item,index) => (
                            <List.Item className="listItem" key={item.title}>
                                <div className="listContent">
                                    <div className="listFlexImg">
                                        <img src={item.img} className="listContentPic" alt="暂无头像"/>
                                    </div>
                                    <div className="flexCol">
                                        <div style={{fontSize:"14px",fontWeight:"bold"}}>{item.name}</div>
                                        <div className="flexRow">
                                            {
                                                item.labels.map((it)=>{
                                                    return(
                                                        <Tag>
                                                            {it}
                                                        </Tag>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="listNation">
                                        {item.nations}
                                    </div>
                                    <div className="availableTime">
                                        <Popover title="可排课时间" content={
                                            item.available.map((it)=>
                                                <div style={{fontWeight:"bold"}}>
                                                    {it}
                                                </div>
                                            )
                                        }>
                                            <div className="availableTimeFont">可排课时间</div>
                                        </Popover>
                                    </div>
                                    <div className="arrangeClassBtn">
                                        <Link to="/chooseTeacher">
                                            <Button>排课</Button>
                                        </Link>

                                    </div>
                                </div>
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        )
    }
}