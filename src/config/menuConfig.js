const menuList = [
    {
        title: '首页',
        key: '/admin'
    },{
        title:"课程",
        key:'/courseOverView',
        children:[
            {
                title: "课程分类",
                key:'/courseCategory',
            },
            {
                title: "课程管理",
                key:'/courseManage',
            },
            {
                title: "属性添加",
                key:'/setProperty',
            },
            {
                title: "课程购买方式",
                key:'/coursePayment',
            },
            {
                title: "课程价格体系",
                key:'/setPrice',
            }
        ]
    },{
        title:"班级",
        key:'/classOverView',
        children:[
            {
                title: "班级列表",
                key:'/classList',
            },
            {
                title: "排课管理",
                key:'/arrangeClassManage',
            }
        ]
    },{
        title:"云盘",
        key:'/cloudDisk'
    },{
        title:"学生",
        key:'/studentOverview',
        children:[
            {
                title: "学生列表",
                key:'/studentList',
            }
        ]
    },{
        title:"教师",
        key:'/teacherOverview',
        children:[
            {
                title: "教师列表",
                key:'/teacherList',
            },{
                title: "可授课时间",
                key:'/availableTime',
            },{
                title: "课时记录",
                key:'/teachingTimeRecord',
            }
        ]
    },{
        title:"代理",
        key:'/agent',
        children:[
            {
                title: "代理列表",
                key:'/agentList',
            }
        ]
    },
    // {
    //     title: 'UI',
    //     key: '/ui',
    //     children: [
    //         {
    //             title: '按钮',
    //             key: '/ui/buttons',
    //         },
    //         {
    //             title: '弹框',
    //             key: '/ui/modals',
    //         },
    //         {
    //             title: 'Loading',
    //             key: '/ui/loadings',
    //         },
    //         {
    //             title: '通知提醒',
    //             key: '/ui/notification',
    //         },
    //         {
    //             title: '全局Message',
    //             key: '/ui/messages',
    //         },
    //         {
    //             title: 'Tab页签',
    //             key: '/ui/tabs',
    //         },
    //         {
    //             title: '图片画廊',
    //             key: '/ui/gallery',
    //         },
    //         {
    //             title: '轮播图',
    //             key: '/ui/carousel',
    //         }
    //     ]
    // },
    // {
    //     title: '表单',
    //     key: '/form',
    //     children: [
    //         {
    //             title: '登录',
    //             key: '/form/login',
    //         },
    //         {
    //             title: '注册',
    //             key: '/form/reg',
    //         }
    //     ]
    // },
    // {
    //     title: '表格',
    //     key: '/table',
    //     children: [
    //         {
    //             title: '基础表格',
    //             key: '/table/basic',
    //         },
    //         {
    //             title: '高级表格',
    //             key: '/table/high',
    //         }
    //     ]
    // },
    // {
    //     title: '富文本',
    //     key: '/rich'
    // },
    {
        title: '简历',
        key: '/resume',
        children: [
            {
                title: '信息预览',
                key: '/resume/view',
            },
            {
                title: '信息编辑',
                key: '/resume/edit',
            }
        ]
    },
    // {
    //     title: '订单管理',
    //     key: '/order',
    //     btnList: [
    //         {
    //             title: '订单详情',
    //             key: 'detail'
    //         },
    //         {
    //             title: '结束订单',
    //             key: 'finish'
    //         }
    //     ]
    // },
    // {
    //     title: '员工管理',
    //     key: '/user'
    // },
    // {
    //     title: '车辆地图',
    //     key: '/bikeMap'
    // },
    // {
    //     title: '图标',
    //     key: '/charts',
    //     children: [
    //         {
    //             title: '柱形图',
    //             key: '/charts/bar'
    //         },
    //         {
    //             title: '饼图',
    //             key: '/charts/pie'
    //         },
    //         {
    //             title: '折线图',
    //             key: '/charts/line'
    //         },
    //     ]
    // },
    {
        title: '权限',
        key: '/permission'
    },
];
export default menuList;