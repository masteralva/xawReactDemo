import React from 'react';
import moment from "moment"
import {Button, Card, Icon, Select, Tag,Divider,TimePicker } from "antd"
import "./index.less"
const Option = Select.Option;
const pickTimeData=[
    {
        id:0,
        date:"周一",
        availableTime:[]
    },{
        id:1,
        date:"周二",
        availableTime:[]
    },{
        id:2,
        date:"周三",
        availableTime:[]
    },{
        id:3,
        date:"周四",
        availableTime:[]
    },{
        id:4,
        date:"周五",
        availableTime:[]
    },{
        id:5,
        date:"周六",
        availableTime:[]
    },{
        id:6,
        date:"周日",
        availableTime:[]
    }
]

export default class AvailableTime extends React.Component {
    state = {
        pickedTimeList:[]
    }
    deleteNode=(deleteOne,total,curIndex)=>{
        /*删除节点
        */
        total = total.filter((item)=>{
            // console.log(item.time.format("HH;mm") != deleteOne.format("HH;mm"))
            return item.time.format("HH;mm") != deleteOne.format("HH;mm")
        })
        pickTimeData[curIndex].availableTime=total
        this.setState({
            pickedTimeList:pickTimeData
        })
        console.log("d",deleteOne)
        console.log("t",total)
        console.log("state",this.state.pickedTimeList)

    }
    render() {
        const temp = [
            {time:null,time2:null},
            {time:null,time2:null},
            {time:null,time2:null},
            {time:null,time2:null},
            {time:null,time2:null},
            {time:null,time2:null},
            {time:null,time2:null}
        ]

        return (
            <Card>
                <div className="availableTimePickerTitle">可授课时间：</div>
                <div className="availableTimePicker">
                    {
                        pickTimeData.map((item,index) => {
                                // console.log(item)
                                return (
                                    <div className="eachRowContainer" key={item.id}>
                                        <div className="timePickerFlexRow">
                                            <div className="date">
                                                {item.date}
                                            </div>
                                            <Divider type="vertical"/>
                                            <div className="canTeachTime">
                                                <div className="flexCol">
                                                    <TimePicker   inputReadOnly= {true} defaultValue={moment('00:00', 'HH:mm')} placeholder="选择可授课时间" style={{width:180}} minuteStep={5} format="HH:mm" onChange={(e) => {
                                                        if (e) {
                                                            // console.log(index,e.format("HH:mm"))
                                                            temp[index].time = moment(e)
                                                            temp[index].time2 = moment(e).add(30,"m")
                                                        }
                                                    }}/>
                                                    <Select placeholder="复制相同时间" style={{width: "180px",marginTop:10}} onSelect={(e) => {
                                                        // console.log(typeof (e),e,index)
                                                        // console.log(pickTimeData[e])
                                                        pickTimeData[index].availableTime = pickTimeData[e].availableTime.concat()
                                                        this.setState({
                                                            pickedTimeList:pickTimeData
                                                        })
                                                        console.log(pickTimeData[index])
                                                }}>
                                                        <Option value="0" >周一</Option>
                                                        <Option value="1" >周二</Option>
                                                        <Option value="2" >周三</Option>
                                                        <Option value="3" >周四</Option>
                                                        <Option value="4" >周五</Option>
                                                        <Option value="5" >周六</Option>
                                                        <Option value="6" >周日</Option>
                                                    </Select>
                                                </div>

                                                <Button style={{marginLeft:10}} onClick={()=>{
                                                    /*
                                                     *检索已有时间段，添加30分外的时间
                                                     */
                                                    let ttemp ={
                                                        time:temp[index].time,
                                                        time2:temp[index].time2
                                                    }
                                                    if(ttemp.time!=null&&pickTimeData[index].availableTime.every((ev,ind,arr)=>{
                                                        // console.log(ind)
                                                        // console.log('12121')
                                                        // console.log(Math.abs((ev.time.hour()*60+ev.time.minute()*1)-(ttemp.time.hour()*60+ttemp.time.minute()*1)))
                                                        return (Math.abs((ev.time.hour()*60+ev.time.minute()*1)-(ttemp.time.hour()*60+ttemp.time.minute()*1))>=30)
                                                    })){
                                                        // console.log("in")
                                                        // console.log(ttemp)
                                                        pickTimeData[index].availableTime.push(ttemp)
                                                        this.setState({
                                                            pickedTimeList:pickTimeData
                                                        })
                                                    }

                                                }}>添加</Button>
                                            </div>
                                            <Divider type="vertical"/>
                                            <div className="tagsBox">
                                                {
                                                    this.state.pickedTimeList[index]?
                                                        pickTimeData[index].availableTime.map((v,i)=>{
                                                            if(this.state.pickedTimeList[index].availableTime[i]){
                                                                return(
                                                                    <Tag style={{marginBottom:"8px"}} key={this.state.pickedTimeList[index].availableTime[i].time} closable onClose={
                                                                        this.deleteNode.bind(this,pickTimeData[index].availableTime[i].time,pickTimeData[index].availableTime,index)}>
                                                                        {this.state.pickedTimeList[index].availableTime[i].time.format("HH:mm")}-
                                                                        {this.state.pickedTimeList[index].availableTime[i].time2.format("HH:mm")}
                                                                    </Tag>
                                                                )
                                                            }

                                                    }):null
                                                }
                                            </div>
                                        </div>
                                        <Divider/>
                                    </div>
                                )
                            }
                        )
                    }


                </div>
                <div>

                </div>
            </Card>
        )
    }
}