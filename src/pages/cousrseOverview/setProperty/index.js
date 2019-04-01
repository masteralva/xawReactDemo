import React from 'react';
import {Button, Form, Icon, Card, List, Input, Divider, Modal} from "antd";
import "./index.less"
import EditableTagGroup from "./../../../components/EditableTagGroup"

const FormItem = Form.Item;
class SetProperty extends React.Component {
    state={
        listData:[{
            id:0,
            propName:"上课类型",
            set:false,
            options:["1v1","1v2"]
        },{
            id:1,
            propName:"上课类型",
            set:false,
            options:["1v1","1v2"]
        }]
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {listData} = this.state;
        return (
            <Card>
                <div className="addProp">
                    添加属性
                </div>
                <Button type="primary" onClick={()=>{
                    listData.push({
                        id:listData.length,
                        propName:"",
                        set:true,
                        options:[]
                    })
                    this.setState({
                        listData
                    })
                    console.log(listData)
                }}><Icon type="plus" />添加</Button>
                <Divider/>
                <List
                    bordered
                    dataSource={listData}
                    renderItem={(item,index) => (
                        <List.Item>
                            <div className="addProp-list-row">
                                <div className="Prop-title">
                                    {!item.set?
                                        getFieldDecorator('propName'+index,{

                                            initialValue:item.propName
                                        })(
                                            <div className="prop-liter">
                                                {item.propName}
                                            </div>
                                        )

                                    :
                                        getFieldDecorator('MyInput'+index,{
                                        initialValue:this.props.form.getFieldsValue(["propName"+index])["propName"+index]
                                    })(<Input style={{width:"160px"}}  onPressEnter={()=>{
                                        console.log(item)
                                            let temp = listData;
                                            let newName = this.props.form.getFieldsValue(["MyInput"+index])["MyInput"+index]
                                            console.log(newName)
                                            temp[index].set=!item.set;
                                            temp[index].propName = newName;
                                            this.setState({
                                                listData:temp
                                            })
                                    }}/>)
                                    }

                                </div>
                                <Button type="primary" className="modifyBtn" onClick={()=>{
                                    let temp = listData;
                                    let newName = this.props.form.getFieldsValue(["MyInput"+index])["MyInput"+index]
                                    console.log(newName)
                                    temp[index].set=!item.set;
                                    temp[index].propName = newName;
                                    this.setState({
                                        listData:temp
                                    })
                                }}>
                                    <Icon type="edit" />
                                </Button>
                                <div className="EditableTagGroup">
                                    <EditableTagGroup data={item.options}/>
                                </div>
                            </div>
                        </List.Item>
                    )}
                />
            </Card>
        )
    }
    componentDidMount(){
    }
}
export default Form.create()(SetProperty);
