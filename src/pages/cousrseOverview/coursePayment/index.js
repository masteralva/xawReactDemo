import React from 'react';
import {Button, Form, Icon, Card, List, Input, Upload, Modal} from "antd";
import {Link,HashRouter,Route,Switch} from 'react-router-dom'
import Ellipsis from "../../../components/Ellipsis";
const FormItem = Form.Item;
class CoursePayment extends React.Component {
    state={
        showModal:false,
        showAddProp:false,
        data:[
            {
                name:"属性1",
                checked:false
            },{
                name:"属性2",
                checked:false
            },{
                name:"属性3",
                checked:true
            },{
                name:"属性4",
                checked:false
            },{
                name:"属性5",
                checked:false
            },{
                name:"属性6",
                checked:true
            },{
                name:"属性7",
                checked:false
            },{
                name:"属性8",
                checked:false
            },{
                name:"属性9",
                checked:false
            },{
                name:"属性10",
                checked:false
            },{
                name:"属性11",
                checked:false
            }
        ],
        categoryList:[
            null,{
                id:1,
                title:"通用购买方式",
                des:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，" +
                    "但其中很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的其中往往存在很多类似的其中往往存在很多类似的其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
            },{
                id:2,
                title:"针对性购买方式",
                des:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，" +
                    "但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
            },{
                id:3,
                title:"其他购买方式",
                des:"从最基础的笔画开始，由笔画组字，由字组词，由字词组句，由词句组篇，全程“搭积木式”教学，交际功能上从日常交际最常用的表达到特定场合的专业表达全覆盖，为之后的“商务汉语”学习奠定良好基础。"
            }
        ]
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {categoryList} = this.state;
        return (
            <div>
                <List
                    grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
                    dataSource={categoryList}
                    renderItem={item =>item?
                        <List.Item key={item.id}>
                            <Card hoverable
                                  actions={[
                                          <Icon type="setting"
                                                onClick={() =>this.setState({
                                                    showAddProp:true
                                                })}
                                          />
                                      ,
                                      <Icon onClick={()=>{
                                          let temp = this.state.categoryList
                                          temp.splice(item.id,1)
                                          this.setState({
                                              categoryList:temp
                                          })
                                      }} type="delete" />]}
                                  title={item.title}
                            >
                                <Card.Meta
                                    description={
                                        <Ellipsis style={{height:"64px"}}  lines={3}>
                                            {item.des}
                                        </Ellipsis>}
                                />
                            </Card>
                        </List.Item>:
                        <List.Item>
                            <Button type="dashed" onClick={() =>this.setState({
                                showModal:true
                            })} className="newButton">
                                <Icon type="plus" /> 新增产品
                            </Button>
                        </List.Item>
                    }
                />

                <Modal
                    title="添加成员"
                    visible={this.state.showAddProp}
                    bodyStyle={{
                            maxHeight: "500px",
                            overflow:"auto"
                        }}
                    onCancel={() => {
                        this.setState({
                            showAddProp: false,

                        })
                    }}
                    onOk={(e)=>{
                        this.setState({
                            showAddProp: false
                        })
                    }}
                >
                    <List
                        bordered
                        dataSource={this.state.data}
                        renderItem={(item,index) => (
                            <List.Item onClick={()=>{
                                let temp = this.state.data;
                                temp[index].checked = !item.checked;
                                this.setState({
                                    data:temp
                                })
                            }} style={item.checked?{background:"#1890ff",color:"#fff"}:{}}>
                                {item.name}
                                </List.Item>
                                )}
                    />
                </Modal>
                <Modal
                    title="新增产品"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal}
                    onCancel={() => {
                        this.setState({
                            showModal: false
                        })
                    }}
                    onOk={(e)=>{
                        let userInfo = this.props.form.getFieldsValue()
                        let tempNew = {}
                        tempNew.id=categoryList.length
                        tempNew.title= userInfo.categoryName;
                        tempNew.des= userInfo.categoryDes;
                        let tempOld = categoryList
                        tempOld.push(tempNew)
                        // console.log(userInfo)
                        // console.log(categoryList)
                        this.setState({
                            categoryList:tempOld,
                            showModal: false
                        })
                    }}
                >
                    <div className="modalRow">
                        <span>分类名称</span>
                        {
                            getFieldDecorator('categoryName',{
                                initialValue:'',
                                rules:[
                                    {
                                        required:true,
                                        message:'分类名不能为空'
                                    }
                                ]
                            })
                            (
                                <Input className="input1" prefix={<Icon type="pie-chart" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="分类" />
                            )
                        }
                    </div>
                    <div className="modalRow">
                        <span>分类描述</span>
                        {
                            getFieldDecorator('categoryDes',{
                                initialValue:''
                            })
                            (
                                <Input className="input1" prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="描述" />
                            )
                        }
                    </div>
                </Modal>
            </div>
        )
    }
}
export default Form.create()(CoursePayment);