import React from 'react'
import {Switch ,Form,Radio ,Button,Input,Icon,message,Upload, Select,DatePicker } from 'antd'
import './index.less'
import './edit.less'
import {Editor} from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftjs from 'draftjs-to-html'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { RangePicker } = DatePicker;
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

class editResume extends React.Component {
    state = {
        loading: false,
        basicInfoEdit:false,
        educationEdit:false,
        workingExpEdit:false,
        editorContent: '',
        trainExpNumber:[1]
    };
    //上传图片
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

    //选择性别
    genderPicker = (e) =>{
        // console.log('radio checked', e.target.value);
        // this.setFieldsValue({
        //     value: e.target.value,
        // });
    }

    onCampusExpChange = (editorContent) => {
        this.props.form.setFieldsValue({
            campusExp: draftjs(editorContent)
        })
    };

    onTrainingExpChange = (editorContent) => {
        this.props.form.setFieldsValue({
            trainingExp: draftjs(editorContent)
        })
    };
    //提交
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName} 恭喜你，您提交成功`)
    }


    //模板内容
    traningTemplate = ()=>{
        const { basicInfoEdit ,educationEdit ,workingExpEdit } = this.state
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="trainingContainer">
                <div className="trainingContainerHeader">
                    <div className='trainingContainerLeft' >
                        <div className="group">
                                                        <span className="groupTitle">
                                                            培训内容
                                                        </span>
                            <FormItem>
                                {
                                    getFieldDecorator('trainingSub')(
                                        <Input prefix={<Icon type="mail"/>} placeholder="培训内容" />
                                    )
                                }
                            </FormItem>
                        </div>
                        <div className="group">
                                                        <span className="groupTitle">
                                                            培训时间
                                                        </span>
                            <FormItem>
                                {
                                    getFieldDecorator('period')(
                                        <RangePicker
                                            placeholder = {['开始时间',"结束时间" ]}
                                            format={'YYYY/MM/DD'}
                                        />
                                    )
                                }
                            </FormItem>
                        </div>
                    </div>
                    <div className='trainingContainerRight' >
                        <div className="group">
                                                        <span className="groupTitle">
                                                            培训机构
                                                        </span>
                            <FormItem>
                                {
                                    getFieldDecorator('trainingOrg')(
                                        <Input prefix={<Icon type="mail"/>} placeholder="培训机构" />
                                    )
                                }
                            </FormItem>
                        </div>
                    </div>
                </div>

                <Editor
                    onContentStateChange={this.onTrainingExpChange}
                />
                <FormItem>
                    {
                        getFieldDecorator('trainingExp')(
                            <Input type="hidden"  />
                        )
                    }
                </FormItem>
            </div>
        )
    }


    render(){


        const { basicInfoEdit ,educationEdit ,workingExpEdit } = this.state
        const { getFieldDecorator } = this.props.form;

        {/*****************************上传图片*/}
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        {/*********************** *******/}
        return(
            <div style={{minWidth:'50%',width:"100%",padding: "40px 40px"}}>
                <Form layout="horizontal">
                    {/*****************************个人信息栏目*/}
                    <div className="basicInfo">
                        <div className='editablePanel'>
                            <div className='title'>
                                {basicInfoEdit?"编辑个人信息":"个人信息"}
                            </div>
                            {/*****************************个人编辑开关*/}
                            <Switch className='editButton' onChange={(checked)=>{this.setState({basicInfoEdit:checked})}}/>
                            <span className='editText'>编辑</span>
                        </div>
                        {basicInfoEdit?
                            //编辑页面

                            <div className='basicInfoContainer'>
                                <div style={{position:'absolute'}}>

                                    <FormItem>
                                        {
                                            getFieldDecorator('uploadPic')(
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
                                    </FormItem>
                                    <Button onClick={()=>{console.log(this.props.form.getFieldsValue())}} type='primary'>确认修改</Button>

                                </div>

                                <div className="basicInfoEditForm">
                                    <div className="basicInfoEditFormLeft">
                                        <div className="group">
                                            <span className="groupTitle">
                                                姓名
                                            </span>
                                            <FormItem>
                                                {
                                                    getFieldDecorator('userName',{
                                                        rules:[
                                                            {
                                                                required:true,
                                                                message:'用户名不能为空'
                                                            }
                                                        ]
                                                    })(
                                                        <Input prefix={<Icon type="user"/>} placeholder="请输入用户名" />
                                                    )
                                                }
                                            </FormItem>
                                        </div>
                                        <div className="group">
                                            <span className="groupTitle">
                                                性别
                                            </span>
                                            <FormItem>
                                                {
                                                    getFieldDecorator('gender')(
                                                        <RadioGroup>
                                                            <Radio value={"male"}>男</Radio>
                                                            <Radio value={"female"}>女</Radio>
                                                        </RadioGroup>
                                                    )
                                                }
                                            </FormItem>
                                        </div>
                                        <div className="group">
                                            <span className="groupTitle">
                                                工作年限
                                            </span>
                                            <FormItem>
                                                {
                                                    getFieldDecorator('workingTime',{
                                                        rules:[
                                                            {
                                                                required:true,
                                                                message:'性别'
                                                            }
                                                        ]
                                                    })(
                                                        <Select
                                                            showSearch
                                                            style={{ width: 193 }}
                                                            placeholder="时间年限"
                                                            optionFilterProp="children"
                                                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                        >
                                                            <Option value="1">1年</Option>
                                                            <Option value="2">2年</Option>
                                                            <Option value="3">3年</Option>
                                                            <Option value="4">4年</Option>
                                                            <Option value="5">5年</Option>
                                                            <Option value="6">6年</Option>
                                                            <Option value="7">7年</Option>
                                                            <Option value="8">8年</Option>
                                                            <Option value="9">9年</Option>
                                                            <Option value="10+">10+年</Option>
                                                        </Select>
                                                    )
                                                }
                                            </FormItem>
                                        </div>
                                        <div className="group">
                                        <span className="groupTitle">
                                            微信
                                        </span>
                                            <FormItem>
                                                {
                                                    getFieldDecorator('weChat')(
                                                        <Input prefix={<Icon type="wechat"/>} placeholder="请输入微信号" />
                                                    )
                                                }
                                            </FormItem>
                                        </div>

                                    </div>
                                    <div className="basicInfoEditFormRight">
                                        <div className="group">
                                            <span className="groupTitle">
                                                年龄
                                            </span>
                                            <FormItem>
                                                {
                                                    getFieldDecorator('age',{
                                                        rules:[
                                                            {
                                                                required:true,
                                                                message:'年龄不能为空'
                                                            }
                                                        ]
                                                    })(
                                                        <Input prefix={<Icon type="clock-circle"/>} placeholder="输入您的年龄" />
                                                    )
                                                }
                                            </FormItem>
                                        </div>
                                        <div className="group">
                                            <span className="groupTitle">
                                                学历
                                            </span>
                                        <FormItem>
                                            {
                                                getFieldDecorator('educationLevel',{
                                                    rules:[
                                                        {
                                                            required:true,
                                                            message:'用户名不能为空'
                                                        }
                                                    ]
                                                })(
                                                    <Select
                                                        showSearch
                                                        style={{ width: 193 }}
                                                        placeholder="最高学历"
                                                        optionFilterProp="children"
                                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                    >
                                                        <Option value="middleSchool">初中</Option>
                                                        <Option value="highSchool">高中</Option>
                                                        <Option value="junior">大专</Option>
                                                        <Option value="bachelor">本科</Option>
                                                        <Option value="master">硕士</Option>
                                                        <Option value="doctor">博士</Option>
                                                    </Select>,
                                                )
                                            }
                                        </FormItem>
                                    </div>
                                    <div className="group">
                                        <span className="groupTitle">
                                            手机
                                        </span>
                                        <FormItem>
                                            {
                                                getFieldDecorator('phoneNumber')(
                                                    <Input prefix={<Icon type="phone"/>} placeholder="请输入手机号" />
                                                )
                                            }
                                        </FormItem>
                                    </div>
                                    <div className="group">
                                        <span className="groupTitle">
                                            邮箱
                                        </span>
                                        <FormItem>
                                            {
                                                getFieldDecorator('email')(
                                                    <Input prefix={<Icon type="mail"/>} placeholder="请输入邮箱地址" />
                                                )
                                            }
                                        </FormItem>
                                    </div>

                                    </div>
                                </div>
                            </div>




                            :
                            //展示页面
                            <div className='basicInfoContainer'>
                                <img className="userPic" src="/assets/userPic.jpeg" alt="图片加载失败"/>
                                <div className='column-wrapper'>
                                    <div className="row-wrapper">
                                        电竞吴彦祖<span>|</span>26岁
                                        <span>|</span>男
                                        <span>|</span>本科
                                        <span>|</span>1年工作经验
                                    </div>
                                    <div className="row-wrapper">
                                        <Icon className="icon" type="phone" theme="outlined" />
                                        15669969921
                                        <span>|</span>
                                        <Icon className="icon" type="mail" theme="outlined" />
                                        wamhm@126.com
                                        <span>|</span>
                                        <Icon className="icon" type="wechat" theme="filled" />
                                        ihatooChinese
                                    </div>
                                </div>
                            </div>
                        }
                    </div>


                    {/*****************************个人教育背景栏目*/}
                    <div className='education'>
                        <div className='editablePanel'>
                            <div className='title'>
                                {educationEdit? "编辑教育背景":"教育背景"}
                            </div>
                            <Switch className='editButton' onChange={(checked)=>{this.setState({educationEdit:checked})}}/>
                            <span className='editText'>编辑</span>
                        </div>
                        {
                            educationEdit?
                                //编辑栏目
                                <div className='educationEditForm'>
                                    <div className="schoolInfo" >
                                        <div className='schoolInfoLeft' >
                                            <div className="group">
                                                <span className="groupTitle">
                                                    就读院校
                                                </span>
                                                <FormItem>
                                                    {
                                                        getFieldDecorator('schoolName',{
                                                            rules:[
                                                                {
                                                                    required:true,
                                                                    message:'学校不能为空'
                                                                }
                                                            ]
                                                        })(
                                                            <Input prefix={<Icon type="book"/>} placeholder="学校名称" />
                                                        )
                                                    }
                                                </FormItem>
                                            </div>
                                            <div className="group">
                                                <span className="groupTitle">
                                                    学位
                                                </span>
                                                <FormItem>
                                                    {
                                                        getFieldDecorator('degrees',{
                                                            rules:[
                                                                {
                                                                    required:true,
                                                                    message:'学位不能为空'
                                                                }
                                                            ]
                                                        })(
                                                            <Input prefix={<Icon type="trophy"/>} placeholder="学位" />
                                                        )
                                                    }
                                                </FormItem>
                                            </div>
                                        </div>
                                        <div className='schoolInfoRight'>
                                            <div className="group">
                                                <span className="groupTitle">
                                                    专业
                                                </span>
                                                <FormItem>
                                                    {
                                                        getFieldDecorator('subject',{
                                                            rules:[
                                                                {
                                                                    required:true,
                                                                    message:'专业不能为空'
                                                                }
                                                            ]
                                                        })(
                                                            <Input prefix={<Icon type="bulb"/>} placeholder="主修专业" />
                                                        )
                                                    }
                                                </FormItem>
                                            </div>
                                            <div className="group">
                                                <span className="groupTitle">
                                                    在读时间
                                                </span>
                                                <FormItem>
                                                    {
                                                        getFieldDecorator('period')(
                                                            <RangePicker
                                                                placeholder = {['开始时间',"结束时间" ]}
                                                                format={'YYYY/MM/DD'}
                                                            />
                                                        )
                                                    }
                                                </FormItem>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="campusExp">
                                        <div className="groupCol">
                                                <span className="groupTitle">
                                                    在校经历
                                                </span>
                                            <Editor
                                                onContentStateChange={this.onCampusExpChange}
                                            />
                                            <FormItem>
                                                {
                                                    getFieldDecorator('campusExp')(
                                                       <Input type="hidden"  />
                                                    )
                                                }
                                            </FormItem>
                                        </div>
                                    </div>

                                    {/*培训经历*/}

                                    <div className="trainingExp">
                                        <div className="groupCol">
                                            <span className="groupTitle">
                                                培训经历
                                            </span>
                                            <Button onClick={()=>{
                                                const temp = this.state.trainExpNumber;
                                                temp.push(1)
                                                this.setState({
                                                trainExpNumber:temp
                                            })}} type="dashed">
                                                <Icon  type="plus" />添加
                                            </Button>

                                            {this.traningTemplate()}
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="educationContainer">
                                    <div className='row'>
                                        <div className='pair'>
                                            <span>就读院校：</span>
                                            <span>山东蓝翔技校</span>
                                        </div>
                                        <div className='pair'>
                                            <span>专业：</span>
                                            <span>挖掘机、汽修、美容美发</span>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='pair'>
                                            <span>学位：</span>
                                            <span>大学专科</span>
                                        </div>
                                        <div className='pair'>
                                            <span>在读时间：</span>
                                            <span>1999-2009</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="pair bold">
                                            在校经历：
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="pair">
                                            例如：<br/>
                                            1、汽修大赛第一名；<br/>
                                            2、挖掘机专业技能满分，哪里不爽挖哪里；<br/>
                                            3、几须三番钟完成洗剪吹；
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="pair bold">
                                            培训经历：
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="pair">
                                            例如：<br/>
                                            1、汽修大赛第一名；<br/>
                                            2、挖掘机专业技能满分，哪里不爽挖哪里；<br/>
                                            3、几须三番钟完成洗剪吹；
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className='workingExp'>
                        <div className='editablePanel'>
                            <div className='title'>
                                工作经历
                            </div>
                            <Switch className='editButton' onChange={(checked)=>{console.log(checked)}}/>
                            <span className='editText'>编辑</span>
                        </div>
                        <div className="workingExpContainer">
                            <div className='row'>
                                <div className='pair'>
                                    <span>公司名称：</span>
                                    <span>哈兔中文网</span>
                                </div>
                                <div className='pair'>
                                    <span>所属行业：</span>
                                    <span>教育</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='pair'>
                                    <span>职位名称：</span>
                                    <span>首席高级中文教师</span>
                                </div>
                                <div className='pair'>
                                    <span>在职时间：</span>
                                    <span>2010-2018</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair bold">
                                    工作内容：
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair">
                                    例如：<br/>
                                    1、主要负责新员工入职培训；<br/>
                                    2、分析制定员工每个月个人销售业绩；<br/>
                                    3、帮助员工提高每日客单价，整体店面管理等工作；
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair bold">
                                    工作业绩：
                                </div>
                            </div>
                            <div className="row">
                                <div className="pair">
                                    例如：<br/>
                                    1.取得的成绩…<br/>
                                    2.实现的突破…<br/>
                                    3.获得的表彰…
                                </div>
                            </div>
                        </div>

                    </div>
                </Form>
            </div>
        )
    }
}
export default Form.create()(editResume);