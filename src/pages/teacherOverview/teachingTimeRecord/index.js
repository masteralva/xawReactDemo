import React from 'react';
import {Button, Card, DatePicker, Input, List, Select} from "antd";
import './index.less'
import {Link} from "react-router-dom";
const Search = Input.Search;
const { RangePicker } = DatePicker;
const Option = Select.Option;
const dateFormat = 'YYYY/MM/DD';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        id:i,
        courseName: `文化课上下五千年—李兰兰—陈煜艳`,
        chapterName: `文化课上下五千年—李兰兰—陈煜艳 - 15`,
        startTime:`2018-10-31 10:10`,
        period: '30:00',
        status: '已结束',
        studentNumber:`${i%3}`,
        spectator:` ${i%2}`,
        stageNumber:`${i%2}`,
        realPeriod:'1时13分31秒',
        attendance:"出勤",
        late:"--"
    });
}
export default class TeachingTimeRecord extends React.Component {

    render() {
        return (
            <div>
                <Card style={{marginBottom:"25px"}}>
                    <div className="recordHeader">
                        <div className="recordHeaderBigItem forBorderOnly">
                            <div className="recordHeaderRow mb">
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">1v1课时</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">1v2课时</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">1v3课时</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                            </div>
                            <div className="recordHeaderRow">
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">1v4课时</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">1v5课时</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">1v6课时</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                            </div>
                        </div>
                        <div className="recordHeaderBigItem">
                            <div className="recordHeaderRow mb">
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">大班课</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">0.3 课时</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">夜班补贴</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                            </div>
                            <div className="recordHeaderRow ">
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">课时汇总</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">计薪课时</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                                <div className="recordHeaderItem">
                                    <div className="recordHeaderItemTit">本月学员已上课时</div>
                                    <div className="recordHeaderItemNum">280</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="courseManageSearchBar">
                        <span className="searchLiter">搜索</span>
                        <Search
                            className="searchBox"
                            placeholder="课程名称"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                        <Search
                            className="searchBox"
                            placeholder="教师姓名或手机号"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                        <Search
                            className="searchBox"
                            placeholder="学生姓名或手机号"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                        <Select className="searchBox" placeholder="选择课节状态" style={{ width: 160 }} >
                            <Option value="全部">全部</Option>
                            <Option value="未上课">未上课</Option>
                            <Option value="已上课">已上课</Option>
                        </Select>
                        <RangePicker
                            showTime
                            className="searchBox"
                            placeholder={['开始时间', '结束时间']}
                            format={dateFormat}
                            onOk={(e)=>console.log(e)}
                        />
                    </div>
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
                            <List.Item key={item.id}>
                                <div className="recordList">
                                    <div className="name gapV">
                                        <div className="courseName">{item.courseName}</div>
                                        <div className="chapterName">{item.chapterName}</div>
                                    </div>
                                    <div className="startTime gapV">
                                        <div className="startTimeTitle">开始时间</div>
                                        <div className="startTimeValue">{item.startTime}</div>
                                    </div>
                                    <div className="period gapV">
                                        <div className="periodTitle">时长</div>
                                        <div className="periodValue">{item.period}</div>
                                    </div>
                                    <div className="status gapV">
                                        <div className="statusTitle">课节状态</div>
                                        <div className="statusValue">{item.status}</div>
                                    </div>
                                    <div className="studentNumber gapV">
                                        <div className="studentNumberTitle">学生数</div>
                                        <div className="studentNumberValue">{item.studentNumber}</div>
                                    </div>
                                    <div className="spectator gapV">
                                        <div className="spectatorTitle">旁听数</div>
                                        <div className="spectatorValue">{item.spectator}</div>
                                    </div>
                                    <div className="stageNumber gapV">
                                        <div className="stageNumberTitle">台上人数</div>
                                        <div className="stageNumberValue">{item.stageNumber}</div>
                                    </div>
                                    <div className="realPeriod gapV">
                                        <div className="realPeriodTitle">实际上课时间</div>
                                        <div className="realPeriodValue">{item.realPeriod}</div>
                                    </div>
                                    <div className="attendance gapV">
                                        <div className="attendanceTitle">出勤</div>
                                        <div className="attendanceValue">{item.attendance}</div>
                                    </div>
                                    <div className="late gapV">
                                        <div className="lateTitle">迟到</div>
                                        <div className="lateValue">{item.late}</div>
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