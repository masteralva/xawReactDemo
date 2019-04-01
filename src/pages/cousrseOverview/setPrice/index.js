import React from 'react';
import listData from './listData';
import {Button, Icon, List, Card, Modal} from "antd"
import Ellipsis from "../../../components/Ellipsis";
import {Link} from "react-router-dom"
export default class Name extends React.Component {
    state={
        showModal:false,
        showPickMethod:false,
        data:[
            {
                name:"购买方式1",
                checked:false
            },{
                name:"购买方式2",
                checked:false
            },{
                name:"购买方式3",
                checked:true
            },{
                name:"购买方式4",
                checked:false
            },{
                name:"购买方式5",
                checked:false
            },{
                name:"购买方式6",
                checked:true
            },{
                name:"购买方式7",
                checked:false
            }
        ],
        categoryList:[
            null,{
                id:1,
                title:"价格体系1",
                des:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，" +
                    "但其中很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的其中往往存在很多类似的其中往往存在很多类似的其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
            },{
                id:2,
                title:"价格体系2",
                des:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，" +
                    "但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
            },{
                id:3,
                title:"价格体系3",
                des:"从最基础的笔画开始，由笔画组字，由字组词，由字词组句，由词句组篇，全程“搭积木式”教学，交际功能上从日常交际最常用的表达到特定场合的专业表达全覆盖，为之后的“商务汉语”学习奠定良好基础。"
            }
        ]
    }
    render() {
        const {categoryList} = this.state;
        return (
            <div>
                <div>
                    <List
                        grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
                        dataSource={categoryList}
                        renderItem={item =>item?
                            <List.Item key={item.id}>
                                <Card hoverable
                                      actions={[
                                          <Link to="/setPrice/showPrice">
                                              <Icon type="edit"/>
                                          </Link>
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
                                    showPickMethod:true
                                })} className="newButton">
                                    <Icon type="plus" /> 新增价格体系
                                </Button>
                            </List.Item>
                        }
                    />
                </div>
                <div>
                    {/*<List*/}
                        {/*dataSource={listData}*/}
                        {/*renderItem={(item,index) => (*/}
                            {/*<List.Item>{item.propName}</List.Item>*/}
                        {/*)}*/}
                    {/*/>*/}
                </div>
                <Modal
                    title="添加成员"
                    visible={this.state.showPickMethod}
                    bodyStyle={{
                        maxHeight: "500px",
                        overflow:"auto"
                    }}
                    onCancel={() => {
                        this.setState({
                            showPickMethod: false,
                        })
                    }}
                    onOk={(e)=>{
                        this.props.history.push({
                            pathname:'/setPrice/setPricePage',
                            para:{
                                methods:[
                                    "方式1","方式2"
                                ]
                            }
                        })
                        this.setState({
                            showPickMethod: false
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
            </div>
        )
    }
    componentDidMount() {
        console.log(listData)
    }
}