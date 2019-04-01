import React from 'react';
import { Divider,Card,Input,Checkbox,List,Button} from "antd";
import './index.less'
import FileFormat from './../../config/fileFormat'
import {Link} from "react-router-dom";

export default class CloudDisk extends React.Component {
    state= {
        data : [
            {
                format: "dir",
                name: "HSK教程",
                id: 101,
                size: "3024kb",
                modifyTime: "2018-10-21",
                checked: false
            },
            {
                format: "pptx",
                name: "培训ppt教程",
                id: 102,
                size: "20M",
                modifyTime: "2018-10-21",
                checked: false
            },
            {
                format: "docx",
                name: "培训word教程",
                id: 103,
                size: "20M",
                modifyTime: "2018-10-21",
                checked: false
            },
            {
                format: "3g2",
                name: "学院试读视频",
                id: 104,
                size: "3024kb",
                modifyTime: "2018-10-21",
                checked: false
            },
            {
                format: "mp3",
                name: "学院试读音频",
                id: 105,
                size: "3024kb",
                modifyTime: "2018-10-21",
                checked: false
            }]

    }
    render() {
        const {data} = this.state
        return (
            <Card style={{minHeight:"750px"}}>
                <div className="cloudDiskTopBar">
                    <Button icon="cloud" type="primary"  className="CloudBtn">上传</Button>
                    <Button icon="file" type="primary"  className="CloudBtn">上传</Button>
                    <Button icon="cloud-download" type="primary"  className="CloudBtn">下载</Button>
                </div>
                <div className="cloudDisk">
                    <List
                        header={
                        <div className="listHeader ml20">
                            <div className="listItemName">文件名称</div>
                            <div className="listItemSize">大小</div>
                            <div className="listItemTime">修改日期</div>
                        </div>}
                        dataSource={data}
                        renderItem={(item,index) => (
                        <List.Item key={item.id}>
                            <div className="listHeader">
                                <Checkbox
                                    style={{marginRight:"8px"}}
                                    checked={item.checked}
                                    onChange={(e)=>{
                                        console.log(e.target.checked)
                                        let tempData = data;
                                        tempData[index].checked=e.target.checked
                                        this.setState({
                                            data:tempData
                                        })

                                    }}
                                />
                                <img style={{width:"20px",height:"20px",margin:'0 12px'}} src={FileFormat[item.format]} alt=""/>
                                <div className="listItemName">{item.name}</div>
                                <div className="listItemSize">{item.size}</div>
                                <div className="listItemTime">{item.modifyTime}</div>
                            </div>
                        </List.Item>)}
                    />
                </div>
                <Button onClick={()=>{
                    console.log(data)
                    console.log(FileFormat)

                }}>
                    打印
                </Button>
            </Card>
        )
    }
}