import React from 'react';
import './index.less'
import Ellipsis from './../../../components/Ellipsis';
import {Card, Form, Input, Button, message, Icon, List, Col, Modal, Upload} from "antd";
const FormItem = Form.Item;

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



class CourseCategory extends React.Component {
    state={
        loading: false,
        showModal:false,
        showModalEdit:false,
        operationIndex:null,
        categoryList:[
            null,{
                id:1,
                title:"综合类课程",
                des:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，" +
                    "但其中很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的存在很多类似的其中往往存在很多类似的其中往往存在很多类似的其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
            },{
                id:2,
                title:"针对性课程",
                des:"在中台产品的研发过程中，会出现不同的设计规范和实现方式，" +
                    "但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
            },{
                id:3,
                title:"《从零到一》",
                des:"从最基础的笔画开始，由笔画组字，由字组词，由字词组句，由词句组篇，全程“搭积木式”教学，交际功能上从日常交际最常用的表达到特定场合的专业表达全覆盖，为之后的“商务汉语”学习奠定良好基础。"
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
            <Form >
                <div class="cateForm ">
                    <List
                        grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
                        dataSource={categoryList}
                        renderItem={item =>item?
                            <List.Item key={item.id}>
                                <Card hoverable
                                      actions={[
                                          <Icon type="setting" />,
                                          <Icon
                                              onClick={()=>{
                                                  this.setState({
                                                      showModalEdit:true,
                                                      operationIndex:item.id
                                                  })
                                              }}
                                              type="edit" />,
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

                </div>




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
                    <div className="modalRow">
                        <span>分类封面</span>
                        {
                            getFieldDecorator('categoryCover',{
                                initialValue:''
                            })
                            (
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChange}
                                >
                                    {imageUrl ? <img className="imgUploaded" src={imageUrl} alt="avatar" /> : uploadButton}
                                </Upload>
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
                        tempNew.des= userInfo.categoryDesEdit;
                        let temp =categoryList
                        temp.splice(this.state.operationIndex,1,tempNew)

                        this.setState({
                            categoryList:temp,
                            showModalEdit: false
                        })
                    }}
                >
                    <div className="modalRow">
                        <span>分类名称</span>
                        {
                            getFieldDecorator('categoryNameEdit',{
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
                            getFieldDecorator('categoryDesEdit',{
                                initialValue:''
                            })
                            (
                                <Input className="input1" prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="描述" />
                            )
                        }
                    </div>

                </Modal>


            </Form>
        )
    }
}
export default Form.create()(CourseCategory);