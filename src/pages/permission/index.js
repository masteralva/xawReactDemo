import React from 'react';
import './index.less'
import Ellipsis from './../../components/Ellipsis';
import {Card, Form, Input, Button, message, Icon, List, DatePicker, Modal,  Select,Divider,Checkbox} from "antd";
import {Link} from "react-router-dom";
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
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

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
//上传限制
function beforeUpload(file) {

    const isLt4M = file.size / 1024 / 1024 < 4;
    if (!isLt4M) {
        message.error('Image must smaller than 2MB!');
    }
    return  isLt4M;
}

let categoryListCopy=[];


class CourseCategory extends React.Component {
    state={
        loading: false,
        showModal:false,
        showModalEdit:false,
        operationIndex:null,
        categoryList:[
            null,{
                id:1,
                rootName:"管理员",
                delete:false,
                showRoot:false,
                showNumber:false,
                groupMember:["刘安成","徐安伟"]
                },{
                id:2,
                rootName:"督导人员",
                delete:false,
                showRoot:false,
                showNumber:false,
                groupMember:["陈子杰","范莉莉"]
               },{
                id:3,
                rootName:"教师",
                delete:true,
                showRoot:false,
                showNumber:false,
                groupMember:["贺丁丁","王璇","吴娟"]
               }
        ]
    }



    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }
    componentDidMount(){
        categoryListCopy = this.state.categoryList
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {categoryList} = this.state;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <Form>
                <List
                    grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
                    dataSource={categoryList}
                    renderItem={(item,index) =>item?
                        <List.Item key={item.id}>
                            <Card
                                className="cardContainer"
                                hoverable
                                actions={
                                    item.delete?
                                    [
                                    <Icon type="user"
                                          onClick={()=>{
                                              categoryListCopy = categoryList
                                              item.showNumber=true
                                              categoryListCopy[index]=item
                                              this.setState({
                                                  categoryList:categoryListCopy
                                              })
                                          }}
                                    />,
                                    <Icon type="safety-certificate" onClick={()=>{
                                        categoryListCopy = categoryList
                                        item.showRoot=true
                                        categoryListCopy[index]=item
                                        this.setState({
                                            categoryList:categoryListCopy
                                        })
                                    }}/>,
                                    <Icon
                                    onClick={()=>{
                                        this.setState({
                                            showModalEdit:true,
                                            operationIndex:item.id
                                        })
                                    }}
                                    type="edit" />,
                                    <Icon  onClick={()=>{
                                    let temp = this.state.categoryList
                                    temp.splice(item.id,1)
                                    this.setState({
                                        categoryList:temp
                                    })

                                }} type="delete" />]:[
                                    <Icon type="user"
                                      onClick={()=>{
                                          categoryListCopy = categoryList
                                          item.showNumber=true
                                          categoryListCopy[index]=item
                                          this.setState({
                                              categoryList:categoryListCopy
                                          })
                                      }}
                                    />,
                                <Icon type="safety-certificate" onClick={()=>{
                                    categoryListCopy = categoryList
                                    item.showRoot=true
                                    categoryListCopy[index]=item
                                    this.setState({
                                        categoryList:categoryListCopy
                                    })
                                }}/>,
                                <Icon
                                    onClick={()=>{
                                        this.setState({
                                            showModalEdit:true,
                                            operationIndex:item.id
                                        })
                                    }}
                                    type="edit" />]
                                }
                                title={item.rootName}
                            >
                                <Card.Meta
                                    description={
                                        <div className="cardContent">
                                            <div className="cardContentBox">
                                                <div className="cardContentBoxTit">用户数</div>
                                                <div className="cardContentBoxNum">120</div>
                                            </div>
                                            <div className="cardContentBox">
                                                <div className="cardContentBoxTit">权限个数</div>
                                                <div className="cardContentBoxNum">7</div>
                                            </div>
                                        </div>
                                    }
                                />
                            </Card>
                        </List.Item>:
                        <List.Item>
                            <Button type="dashed" onClick={() =>this.setState({
                                showModal:true
                            })} className="newButton">
                                <Icon type="plus" /> 新增权限角色
                            </Button>
                        </List.Item>
                    }
                />



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
                        <span>权限名称</span>
                        {
                            getFieldDecorator('categoryName',{
                                initialValue:'',
                                rules:[
                                    {
                                        required:true,
                                        message:'权限名不能为空'
                                    }
                                ]
                            })
                            (
                                <Input className="input1" prefix={<Icon type="pie-chart" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="权限" />
                            )
                        }
                    </div>
                    <div className="modalRow">
                        <span>权限描述</span>
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
                <Modal
                    title="编辑产品"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModalEdit}
                    onCancel={() => {
                        this.setState({
                            showModalEdit: false
                        })
                    }}
                    onOk={(e)=>{
                        let userInfo = this.props.form.getFieldsValue()
                        let tempNew = {}
                        tempNew.id=categoryList.length
                        tempNew.title= userInfo.categoryNameEdit;
                        let temp =categoryList
                        temp.splice(this.state.operationIndex,1,tempNew)

                        this.setState({
                            categoryList:temp,
                            showModalEdit: false
                        })
                    }}
                >
                    <div className="modalRow">
                        <span>权限名称</span>
                        {
                            getFieldDecorator('categoryNameEdit',{
                                initialValue:'',
                                rules:[
                                    {
                                        required:true,
                                        message:'权限名不能为空'
                                    }
                                ]
                            })
                            (
                                <Input className="input1" prefix={<Icon type="pie-chart" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="权限" />
                            )
                        }
                    </div>
                </Modal>

                {
                    categoryList.map(
                        (val,ind)=>{
                            return(
                                <Modal
                                    style={{minWidth:1400}}
                                    key={val&&val.id}
                                    visible={val&&val.showNumber}
                                    onCancel={()=>{
                                        categoryListCopy[ind].showNumber=false
                                        this.setState({
                                            categoryList:categoryListCopy
                                        })
                                    }}
                                    onOk={()=>{
                                        categoryListCopy[ind].showNumber=false
                                        this.setState({
                                            categoryList:categoryListCopy
                                        })
                                    }}
                                >
                                    <div>
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
                                    </div>
                                </Modal>
                            )
                        }
                    )
                }
                {
                    categoryList.map(
                        (val,ind)=>{
                            return(
                                <Modal
                                    title="权限选择"
                                    key={val&&val.id}
                                    visible={val&&val.showRoot}
                                    onCancel={()=>{
                                        categoryListCopy[ind].showRoot=false
                                        this.setState({
                                            categoryList:categoryListCopy
                                        })
                                    }}
                                    onOk={()=>{
                                        categoryListCopy[ind].showRoot=false
                                        this.setState({
                                            categoryList:categoryListCopy
                                        })
                                    }}
                                >
                                    <div>
                                        <div className="ModalGroupRow">
                                            <div>学生组</div>
                                            <Divider type={"vertical"}/>
                                            <div>
                                                <Checkbox>增加学生</Checkbox>
                                                <Checkbox>增加学生</Checkbox>
                                                <Checkbox>增加学生</Checkbox>
                                            </div>
                                        </div>
                                        <Divider/>
                                        <div className="ModalGroupRow">
                                            <div>学生组</div>
                                            <Divider type={"vertical"}/>
                                            <div>
                                                <Checkbox>增加学生</Checkbox>
                                                <Checkbox>增加学生</Checkbox>
                                                <Checkbox>增加学生</Checkbox>
                                            </div>
                                        </div>
                                        <Divider/>
                                        <div className="ModalGroupRow">
                                            <div>学生组</div>
                                            <Divider type={"vertical"}/>
                                            <div>
                                                <Checkbox>增加学生</Checkbox>
                                                <Checkbox>增加学生</Checkbox>
                                                <Checkbox>增加学生</Checkbox>
                                            </div>
                                        </div>
                                        <Divider/>
                                        <div className="ModalGroupRow">
                                            <div>学生组</div>
                                            <Divider type={"vertical"}/>
                                            <div>
                                                <Checkbox>增加学生</Checkbox>
                                                <Checkbox>增加学生</Checkbox>
                                                <Checkbox>增加学生</Checkbox>
                                            </div>
                                        </div>
                                        <Divider/>

                                    </div>
                                </Modal>
                            )
                        }

                    )}


            </Form>
        )
    }
}
export default Form.create()(CourseCategory);