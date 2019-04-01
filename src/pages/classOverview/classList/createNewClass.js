import React from 'react';
import {Form, Icon, Input, Card, message,Upload,Button} from "antd";
import './createNewClass.less'
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
class CreateNewClass extends React.Component {
    state={
        loading: false
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
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(userInfo)
        //校验环节
        // this.props.form.validateFields((err,values)=>{
        //     if(!err){
        //         message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
        //     }
        // })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <Form>
                <Card>
                    <div className="formDuo">
                        <span className="CreateFormItemTitle">
                            课程名称
                        </span>
                        {
                            getFieldDecorator('NewCourseName',{
                                initialValue:''
                            })
                            (
                                <Input className="input" prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="课程名称" />
                            )
                        }
                    </div>
                    <div className="formDuo">
                        <span className="CreateFormItemTitle">
                            课程封面
                        </span>
                        {
                            getFieldDecorator('newCourseCover',{
                                initialValue:''
                            })
                            (
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="ml20"
                                    showUploadList={false}
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChange}
                                >
                                    { uploadButton}
                                </Upload>
                            )
                        }
                    </div>
                    <div className="formDuo">
                        <span className="CreateFormItemTitle">
                            视频介绍
                        </span>
                        {
                            getFieldDecorator('NewCourseVideo',{
                                initialValue:''
                            })
                            (
                                <Upload
                                    className="ml20"
                                    name='file'
                                    action= '//jsonplaceholder.typicode.com/posts/'
                                >
                                    <Button>
                                        <Icon type="upload" /> 上传介绍视频
                                    </Button>
                                </Upload>
                            )
                        }
                    </div>
                    <div className="formDuo">
                        <span className="CreateFormItemTitle">
                            课件目录
                        </span>
                        {
                            getFieldDecorator('NewCourseDirecatory',{
                                initialValue:''
                            })
                            (
                                <Upload
                                    listType="picture"
                                    className="ml20" action="//jsonplaceholder.typicode.com/posts/" directory>
                                    <Button>
                                        <Icon type="upload" /> 上传课件文件夹
                                    </Button>
                                </Upload>
                            )
                        }
                    </div>
                    <Button type="primary" onClick={this.handleSubmit}>
                        提交
                    </Button>
                </Card>


            </Form>
        )
    }
}
export default Form.create()(CreateNewClass);