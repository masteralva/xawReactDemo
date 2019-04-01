import React from 'react';
import { Divider,Card,Input,DatePicker,List,Button,Select} from "antd";
import {Link} from 'react-router-dom'
import moment from 'moment';
import './index.less'
const { RangePicker } = DatePicker;
const Search = Input.Search;
const Option = Select.Option;
const dateFormat = 'YYYY/MM/DD';
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        title: `课程名称 ${i}`,
        description: `课程类型 ${i}`,
        class:`分类${i}`,
        crouseData: 'YYYY/MM/DD',
        complete: '是',
        content:`表内容 ${i}`,
        teacher:`教师 ${i}`,
    });
}
export default class ClassList extends React.Component {

    render() {
        return (
            <Card style={{minHeight:"750px"}}>
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
                    <Link to="/createNewClass">
                        <Button type="primary"  style={{float:'right'}}>创建班级</Button>
                    </Link>


                </div>
                <div className="courseManageList">
                    <List
                        itemLayout="vertical"
                        size="large"
                        header={
                            <div className="listHeader">
                                <div className="listNo">序号</div>
                                <div className="listItemName">课程名称</div>
                                <div className="listItemClass">课程类型</div>
                                <div className="listItemDate">课程日期</div>
                                <div className="listItemComplete">课程是否完成</div>
                                <div className="listItemTeacher">课程教师</div>
                                <div className="listItemOperation">操作</div>
                            </div>
                        }
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 10,
                        }}
                        dataSource={listData}
                        renderItem={(item,index) => (
                            <List.Item className="listItem" key={item.title}>
                                <div className="listHeader">
                                    <div className="listNo">{index}</div>
                                    <div className="listItemName">{item.title}</div>
                                    <div className="listItemClass">{item.class}</div>
                                    <div className="listItemDate">{item.crouseData}</div>
                                    <div className="listItemComplete">{item.complete}</div>
                                    <div className="listItemTeacher">{item.teacher}</div>
                                    <div className="listItemOperation">{item.title}</div>
                                </div>
                            </List.Item>
                        )}
                    />
                </div>
            </Card>
        )
    }
}