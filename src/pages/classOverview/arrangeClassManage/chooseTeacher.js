import React from 'react';
import {Button, Card, Icon, List, Tag,Divider} from "antd"
import Ellipsis from "../../../components/Ellipsis";
import './chooseTeacher.less'

const teacherData = [];
for (let i = 0; i < 23; i++) {
    teacherData.push({
        img:"/assets/userPic.jpeg",
        name: `教师 ${i}`,
        type:"全职",
        gender:"女",
        labels: ["主教少儿","韩语授课","专业水平高"],
        nations:`中国`,
        haveClass:10,
        weekTable:[
            {
                date:"周一",
                available:[
                    "8:30-9:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "9:30-10:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00"
                ]
            },{
                date:"周二",
                available:[
                    "8:30-9:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "9:30-10:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00"
                ]
            },{
                date:"周三",
                available:[
                    "8:30-9:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "9:30-10:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "12:30-13:00",
                    "12:30-13:00",
                    "12:30-13:00"
                ]
            },{
                date:"周四",
                available:[
                    "8:30-9:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "9:30-10:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "12:30-13:00",
                    "12:30-13:00",
                    "12:30-13:00"
                ]
            },{
                date:"周五",
                available:[
                    "8:30-9:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "9:30-10:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "12:30-13:00",
                    "12:30-13:00",
                    "12:30-13:00"
                ]
            },{
                date:"周六",
                available:[
                    "8:30-9:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "9:30-10:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "12:30-13:00",
                    "12:30-13:00",
                    "12:30-13:00"
                ]
            },{
                date:"周日",
                available:[
                    "8:30-9:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "9:30-10:00",
                    "9:30-10:00",
                    "10:30-11:00",
                    "11:30-12:00",
                    "12:30-13:00",
                    "12:30-13:00",
                    "12:30-13:00",
                    "12:30-13:00"
                ]
            }

        ]

    });
}
export default class ChooseTeacher extends React.Component {

    render() {
        return (
            <div>
                <List
                    grid={{ gutter: 24, lg: 2, md: 2, sm: 1, xs: 1 }}
                    dataSource={teacherData}
                    renderItem={item =>
                        <List.Item key={item.id}>
                            <Card hoverable
                                  style={{borderRadius:"18px" ,overflow:"hidden"}}
                                  actions={[
                                      <Icon type="phone" />,
                                      <Icon type="edit" />
                                     ]}
                            >
                                <div className="TeacherIntroCard">
                                    <div className="TeacherImgBox">
                                        <img src={item.img} className="TeacherPic" alt="暂无头像"/>
                                        <div className="firstRowType">{item.type}</div>
                                        <div className="firstRowNation">{item.nations}</div>
                                    </div>
                                    <div className="TeacherContentBox">
                                        <div className="firstRow">
                                            <div className="firstRowName">{item.name}</div>
                                            <div className="firstRowGender">{item.gender}</div>

                                        </div>
                                        <div className="secondRow">
                                            <div className="firstRowHaveClass">{item.haveClass}</div>
                                        </div>
                                        <div className="secondRow">
                                            {
                                                item.labels.map((it)=>{
                                                    return(
                                                        <Tag style={{marginBottom:"8px"}}>
                                                            {it}
                                                        </Tag>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>

                                    <div className="showTimes">
                                        {
                                            item.weekTable.map((itemWeek,indexWeek)=>
                                                <div className="itemWeekContainer">
                                                    <div className="itemWeek">
                                                        <div className="itemWeekTitle">
                                                            {itemWeek.date}
                                                        </div>
                                                        <div className="itemWeekTime">
                                                            {itemWeek.available.map((it) =>
                                                                <Tag color="blue" style={{margin:"2px 4px 2px 0"}}>
                                                                    {it}
                                                                </Tag>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </List.Item>
                    }
                />
            </div>
        )
    }
}
                            {/*<Ellipsis style={{height:"64px"}}  lines={3}>*/}
                                {/*{item.des}*/}
                            {/*</Ellipsis>}*/}