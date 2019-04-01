import React from 'react';
import {Tooltip, Button, Form, Input, Icon, TreeSelect} from 'antd';
import "./index.less"
const FormItem = Form.Item;
const TreeNode = TreeSelect.TreeNode;
const options = [
    {value:"中国",
        title:"中国",
        key:"中国",
    },{value:"美国",
        title:"美国",
        key:"美国",
    },{value:"英国",
        title:"英国",
        key:"英国",
    },{value:"西班牙",
        title:"西班牙",
        key:"西班牙",
    },{value:"意大利",
        title:"意大利",
        key:"意大利",
    },{value:"法国",
        title:"法国",
        key:"法国",
    },{value:"阿拉伯联合酋长国",
        title:"阿拉伯联合酋长国",
        key:"阿拉伯联合酋长国",
    },{value:"韩国",
        title:"韩国",
        key:"韩国",
    },{value:"阿富汗",
        title:"阿富汗",
        key:"阿富汗",
    },{value:"阿尔巴尼亚",
        title:"阿尔巴尼亚",
        key:"阿尔巴尼亚",
    },{value:"阿尔及利亚",
        title:"阿尔及利亚",
        key:"阿尔及利亚",
    },{value:"安道尔",
        title:"安道尔",
        key:"安道尔",
    },{value:"安哥拉",
        title:"安哥拉",
        key:"安哥拉",
    },{value:"安提瓜和巴布达",
        title:"安提瓜和巴布达",
        key:"安提瓜和巴布达",
    },{value:"阿根廷",
        title:"阿根廷",
        key:"阿根廷",
    },{value:"亚美尼亚",
        title:"亚美尼亚",
        key:"亚美尼亚",
    },{value:"阿鲁巴",
        title:"阿鲁巴",
        key:"阿鲁巴",
    },{value:"澳大利亚",
        title:"澳大利亚",
        key:"澳大利亚",
    },{value:"奥地利",
        title:"奥地利",
        key:"奥地利",
    },{value:"阿塞拜疆共和国",
        title:"阿塞拜疆共和国",
        key:"阿塞拜疆共和国",
    },{value:"巴哈马",
        title:"巴哈马",
        key:"巴哈马",
    },{value:"巴林",
        title:"巴林",
        key:"巴林",
    },{value:"孟加拉国",
        title:"孟加拉国",
        key:"孟加拉国",
    },{value:"巴巴多斯",
        title:"巴巴多斯",
        key:"巴巴多斯",
    },{value:"白俄罗斯",
        title:"白俄罗斯",
        key:"白俄罗斯",
    },{value:"比利时",
        title:"比利时",
        key:"比利时",
    },{value:"伯里兹",
        title:"伯里兹",
        key:"伯里兹",
    },{value:"伯利兹",
        title:"伯利兹",
        key:"伯利兹",
    },{value:"贝宁",
        title:"贝宁",
        key:"贝宁",
    },{value:"不丹",
        title:"不丹",
        key:"不丹",
    },{value:"玻利维亚",
        title:"玻利维亚",
        key:"玻利维亚",
    },{value:"波斯尼亚和黑塞哥维那",
        title:"波斯尼亚和黑塞哥维那",
        key:"波斯尼亚和黑塞哥维那",
    },{value:"博茨瓦纳",
        title:"博茨瓦纳",
        key:"博茨瓦纳",
    },{value:"巴西",
        title:"巴西",
        key:"巴西",
    },{value:"保加利亚",
        title:"保加利亚",
        key:"保加利亚",
    },{value:"布基纳法索",
        title:"布基纳法索",
        key:"布基纳法索",
    },{value:"布隆迪",
        title:"布隆迪",
        key:"布隆迪",
    },{value:"文莱",
        title:"文莱",
        key:"文莱",
    },{value:"柬埔寨",
        title:"柬埔寨",
        key:"柬埔寨",
    },{value:"喀麦隆",
        title:"喀麦隆",
        key:"喀麦隆",
    },{value:"加拿大",
        title:"加拿大",
        key:"加拿大",
    },{value:"佛得角",
        title:"佛得角",
        key:"佛得角",
    },{value:"乍得",
        title:"乍得",
        key:"乍得",
    },{value:"智利",
        title:"智利",
        key:"智利",
    },{value:"哥伦比亚",
        title:"哥伦比亚",
        key:"哥伦比亚",
    },{value:"科摩罗",
        title:"科摩罗",
        key:"科摩罗",
    },{value:"刚果（布）",
        title:"刚果（布）",
        key:"刚果（布）",
    },{value:"库克群岛",
        title:"库克群岛",
        key:"库克群岛",
    },{value:"科特迪瓦",
        title:"科特迪瓦",
        key:"科特迪瓦",
    },{value:"克罗地亚",
        title:"克罗地亚",
        key:"克罗地亚",
    },{value:"古巴共和国",
        title:"古巴共和国",
        key:"古巴共和国",
    },{value:"塞浦路斯",
        title:"塞浦路斯",
        key:"塞浦路斯",
    },{value:"捷克共和国",
        title:"捷克共和国",
        key:"捷克共和国",
    },{value:"中非共和国",
        title:"中非共和国",
        key:"中非共和国",
    },{value:"哥斯达黎加",
        title:"哥斯达黎加",
        key:"哥斯达黎加",
    },{value:"刚果（金）",
        title:"刚果（金）",
        key:"刚果（金）",
    },{value:"也门民主人民共和国",
        title:"也门民主人民共和国",
        key:"也门民主人民共和国",
    },{value:"丹麦",
        title:"丹麦",
        key:"丹麦",
    },{value:"吉布提",
        title:"吉布提",
        key:"吉布提",
    },{value:"多米尼克",
        title:"多米尼克",
        key:"多米尼克",
    },{value:"多米尼加",
        title:"多米尼加",
        key:"多米尼加",
    },{value:"厄瓜多尔",
        title:"厄瓜多尔",
        key:"厄瓜多尔",
    },{value:"埃及",
        title:"埃及",
        key:"埃及",
    },{value:"萨尔瓦多",
        title:"萨尔瓦多",
        key:"萨尔瓦多",
    },{value:"赤道几内亚",
        title:"赤道几内亚",
        key:"赤道几内亚",
    },{value:"厄立特里亚",
        title:"厄立特里亚",
        key:"厄立特里亚",
    },{value:"爱沙尼亚",
        title:"爱沙尼亚",
        key:"爱沙尼亚",
    },{value:"埃塞俄比亚",
        title:"埃塞俄比亚",
        key:"埃塞俄比亚",
    },{value:"斐济",
        title:"斐济",
        key:"斐济",
    },{value:"芬兰",
        title:"芬兰",
        key:"芬兰",
    },{value:"加蓬",
        title:"加蓬",
        key:"加蓬",
    },{value:"冈比亚",
        title:"冈比亚",
        key:"冈比亚",
    },{value:"格鲁吉亚",
        title:"格鲁吉亚",
        key:"格鲁吉亚",
    },{value:"德国",
        title:"德国",
        key:"德国",
    },{value:"加纳",
        title:"加纳",
        key:"加纳",
    },{value:"希腊",
        title:"希腊",
        key:"希腊",
    },{value:"格林纳达",
        title:"格林纳达",
        key:"格林纳达",
    },{value:"几内亚",
        title:"几内亚",
        key:"几内亚",
    },{value:"几内亚比绍",
        title:"几内亚比绍",
        key:"几内亚比绍",
    },{value:"圭亚那",
        title:"圭亚那",
        key:"圭亚那",
    },{value:"危地马拉",
        title:"危地马拉",
        key:"危地马拉",
    },{value:"海地",
        title:"海地",
        key:"海地",
    },{value:"荷兰",
        title:"荷兰",
        key:"荷兰",
    },{value:"洪都拉斯",
        title:"洪都拉斯",
        key:"洪都拉斯",
    },{value:"匈牙利",
        title:"匈牙利",
        key:"匈牙利",
    },{value:"冰岛",
        title:"冰岛",
        key:"冰岛",
    },{value:"印度",
        title:"印度",
        key:"印度",
    },{value:"印度尼西亚",
        title:"印度尼西亚",
        key:"印度尼西亚",
    },{value:"伊朗",
        title:"伊朗",
        key:"伊朗",
    },{value:"伊拉克",
        title:"伊拉克",
        key:"伊拉克",
    },{value:"爱尔兰",
        title:"爱尔兰",
        key:"爱尔兰",
    },{value:"以色列",
        title:"以色列",
        key:"以色列",
    },{value:"牙买加",
        title:"牙买加",
        key:"牙买加",
    },{value:"日本",
        title:"日本",
        key:"日本",
    },{value:"约旦",
        title:"约旦",
        key:"约旦",
    },{value:"哈萨克斯坦",
        title:"哈萨克斯坦",
        key:"哈萨克斯坦",
    },{value:"肯尼亚",
        title:"肯尼亚",
        key:"肯尼亚",
    },{value:"吉尔吉斯共和国",
        title:"吉尔吉斯共和国",
        key:"吉尔吉斯共和国",
    },{value:"基里巴斯",
        title:"基里巴斯",
        key:"基里巴斯",
    },{value:"科威特",
        title:"科威特",
        key:"科威特",
    },{value:"朝鲜",
        title:"朝鲜",
        key:"朝鲜",
    },{value:"老挝",
        title:"老挝",
        key:"老挝",
    },{value:"拉脱维亚",
        title:"拉脱维亚",
        key:"拉脱维亚",
    },{value:"黎巴嫩",
        title:"黎巴嫩",
        key:"黎巴嫩",
    },{value:"莱索托",
        title:"莱索托",
        key:"莱索托",
    },{value:"利比里亚",
        title:"利比里亚",
        key:"利比里亚",
    },{value:"利比亚",
        title:"利比亚",
        key:"利比亚",
    },{value:"列支敦士登",
        title:"列支敦士登",
        key:"列支敦士登",
    },{value:"立陶宛",
        title:"立陶宛",
        key:"立陶宛",
    },{value:"卢森堡",
        title:"卢森堡",
        key:"卢森堡",
    },{value:"马其顿",
        title:"马其顿",
        key:"马其顿",
    },{value:"马达加斯加",
        title:"马达加斯加",
        key:"马达加斯加",
    },{value:"马拉维",
        title:"马拉维",
        key:"马拉维",
    },{value:"马来西亚",
        title:"马来西亚",
        key:"马来西亚",
    },{value:"马尔代夫",
        title:"马尔代夫",
        key:"马尔代夫",
    },{value:"马里",
        title:"马里",
        key:"马里",
    },{value:"马耳他",
        title:"马耳他",
        key:"马耳他",
    },{value:"马绍尔群岛",
        title:"马绍尔群岛",
        key:"马绍尔群岛",
    },{value:"毛里塔尼亚",
        title:"毛里塔尼亚",
        key:"毛里塔尼亚",
    },{value:"毛里求斯",
        title:"毛里求斯",
        key:"毛里求斯",
    },{value:"墨西哥",
        title:"墨西哥",
        key:"墨西哥",
    },{value:"密克罗尼西亚联邦",
        title:"密克罗尼西亚联邦",
        key:"密克罗尼西亚联邦",
    },{value:"摩尔多瓦",
        title:"摩尔多瓦",
        key:"摩尔多瓦",
    },{value:"摩纳哥",
        title:"摩纳哥",
        key:"摩纳哥",
    },{value:"蒙古",
        title:"蒙古",
        key:"蒙古",
    },{value:"黑山",
        title:"黑山",
        key:"黑山",
    },{value:"摩洛哥",
        title:"摩洛哥",
        key:"摩洛哥",
    },{value:"莫桑比克",
        title:"莫桑比克",
        key:"莫桑比克",
    },{value:"缅甸",
        title:"缅甸",
        key:"缅甸",
    },{value:"纳米比亚",
        title:"纳米比亚",
        key:"纳米比亚",
    },{value:"瑙鲁",
        title:"瑙鲁",
        key:"瑙鲁",
    },{value:"尼泊尔",
        title:"尼泊尔",
        key:"尼泊尔",
    },{value:"新西兰",
        title:"新西兰",
        key:"新西兰",
    },{value:"尼加拉瓜",
        title:"尼加拉瓜",
        key:"尼加拉瓜",
    },{value:"尼日尔",
        title:"尼日尔",
        key:"尼日尔",
    },{value:"尼日利亚",
        title:"尼日利亚",
        key:"尼日利亚",
    },{value:"挪威",
        title:"挪威",
        key:"挪威",
    },{value:"阿曼",
        title:"阿曼",
        key:"阿曼",
    },{value:"巴基斯坦",
        title:"巴基斯坦",
        key:"巴基斯坦",
    },{value:"帕劳",
        title:"帕劳",
        key:"帕劳",
    },{value:"巴勒斯坦",
        title:"巴勒斯坦",
        key:"巴勒斯坦",
    },{value:"巴拿马",
        title:"巴拿马",
        key:"巴拿马",
    },{value:"巴布亚新几内亚",
        title:"巴布亚新几内亚",
        key:"巴布亚新几内亚",
    },{value:"巴拉圭",
        title:"巴拉圭",
        key:"巴拉圭",
    },{value:"秘鲁",
        title:"秘鲁",
        key:"秘鲁",
    },{value:"菲律宾",
        title:"菲律宾",
        key:"菲律宾",
    },{value:"波兰",
        title:"波兰",
        key:"波兰",
    },{value:"葡萄牙",
        title:"葡萄牙",
        key:"葡萄牙",
    },{value:"波多黎各",
        title:"波多黎各",
        key:"波多黎各",
    },{value:"卡塔尔",
        title:"卡塔尔",
        key:"卡塔尔",
    },{value:"罗马尼亚",
        title:"罗马尼亚",
        key:"罗马尼亚",
    },{value:"俄罗斯",
        title:"俄罗斯",
        key:"俄罗斯",
    },{value:"卢旺达",
        title:"卢旺达",
        key:"卢旺达",
    },{value:"圣基茨和尼维斯",
        title:"圣基茨和尼维斯",
        key:"圣基茨和尼维斯",
    },{value:"圣文森特和格林纳丁斯",
        title:"圣文森特和格林纳丁斯",
        key:"圣文森特和格林纳丁斯",
    },{value:"圣卢西亚",
        title:"圣卢西亚",
        key:"圣卢西亚",
    },{value:"美属萨摩亚",
        title:"美属萨摩亚",
        key:"美属萨摩亚",
    },{value:"圣马力诺",
        title:"圣马力诺",
        key:"圣马力诺",
    },{value:"圣多美和普林西比",
        title:"圣多美和普林西比",
        key:"圣多美和普林西比",
    },{value:"沙特阿拉伯",
        title:"沙特阿拉伯",
        key:"沙特阿拉伯",
    },{value:"塞内加尔",
        title:"塞内加尔",
        key:"塞内加尔",
    },{value:"塞尔维亚",
        title:"塞尔维亚",
        key:"塞尔维亚",
    },{value:"塞舌尔",
        title:"塞舌尔",
        key:"塞舌尔",
    },{value:"塞拉利昂",
        title:"塞拉利昂",
        key:"塞拉利昂",
    },{value:"新加坡",
        title:"新加坡",
        key:"新加坡",
    },{value:"斯洛伐克",
        title:"斯洛伐克",
        key:"斯洛伐克",
    },{value:"斯洛伐克共和国",
        title:"斯洛伐克共和国",
        key:"斯洛伐克共和国",
    },{value:"斯洛文尼亚",
        title:"斯洛文尼亚",
        key:"斯洛文尼亚",
    },{value:"所罗门群岛",
        title:"所罗门群岛",
        key:"所罗门群岛",
    },{value:"索马里",
        title:"索马里",
        key:"索马里",
    },{value:"南非",
        title:"南非",
        key:"南非",
    },{value:"斯里兰卡",
        title:"斯里兰卡",
        key:"斯里兰卡",
    },{value:"苏丹",
        title:"苏丹",
        key:"苏丹",
    },{value:"苏里南",
        title:"苏里南",
        key:"苏里南",
    },{value:"斯威士兰",
        title:"斯威士兰",
        key:"斯威士兰",
    },{value:"瑞典",
        title:"瑞典",
        key:"瑞典",
    },{value:"瑞士",
        title:"瑞士",
        key:"瑞士",
    },{value:"叙利亚",
        title:"叙利亚",
        key:"叙利亚",
    },{value:"塔吉克斯坦",
        title:"塔吉克斯坦",
        key:"塔吉克斯坦",
    },{value:"坦桑尼亚",
        title:"坦桑尼亚",
        key:"坦桑尼亚",
    },{value:"泰国",
        title:"泰国",
        key:"泰国",
    },{value:"南苏丹共和国",
        title:"南苏丹共和国",
        key:"南苏丹共和国",
    },{value:"乌干达",
        title:"乌干达",
        key:"乌干达",
    },{value:"东帝汶",
        title:"东帝汶",
        key:"东帝汶",
    },{value:"多哥",
        title:"多哥",
        key:"多哥",
    },{value:"汤加",
        title:"汤加",
        key:"汤加",
    },{value:"特立尼达和多巴哥",
        title:"特立尼达和多巴哥",
        key:"特立尼达和多巴哥",
    },{value:"突尼斯",
        title:"突尼斯",
        key:"突尼斯",
    },{value:"土耳其",
        title:"土耳其",
        key:"土耳其",
    },{value:"土库曼斯坦",
        title:"土库曼斯坦",
        key:"土库曼斯坦",
    },{value:"乌克兰",
        title:"乌克兰",
        key:"乌克兰",
    },{value:"乌兹别克斯坦",
        title:"乌兹别克斯坦",
        key:"乌兹别克斯坦",
    },{value:"乌拉圭",
        title:"乌拉圭",
        key:"乌拉圭",
    },{value:"瓦努阿图",
        title:"瓦努阿图",
        key:"瓦努阿图",
    },{value:"梵蒂冈",
        title:"梵蒂冈",
        key:"梵蒂冈",
    },{value:"越南",
        title:"越南",
        key:"越南",
    },{value:"委内瑞拉",
        title:"委内瑞拉",
        key:"委内瑞拉",
    },{value:"赞比亚",
        title:"赞比亚",
        key:"赞比亚",
    },{value:"津巴布韦",
        title:"津巴布韦",
        key:"津巴布韦"}]
const timeZone = [
    {
        index:-12,
        value:"东西十二区 ( UTC +12 )",
        title:"东西十二区 ( UTC +12 )",
        key:"东西十二区 ( UTC +12 )"
    },
    {
        index:-11,
        value:"东十一区 ( UTC +11 )",
        title:"东十一区 ( UTC +11 )",
        key:"东十一区 ( UTC +11 )"
    },
    {
        index:-10,
        value:"东十区 ( UTC +10 )",
        title:"东十区 ( UTC +10 )",
        key:"东十区 ( UTC +10 )"
    },
    {
        index:-9,
        value:"东九区 ( UTC +9 )",
        title:"东九区 ( UTC +9 )",
        key:"东九区 ( UTC +9 )"
    },
    {
        index:-8,
        value:"东八区 ( UTC +8 )",
        title:"东八区 ( UTC +8 )",
        key:"东八区 ( UTC +8 )"
    },
    {
        index:-7,
        value:"东七区 ( UTC +7 )",
        title:"东七区 ( UTC +7 )",
        key:"东七区 ( UTC +7 )"
    },
    {
        index:-6,
        value:"东六区 ( UTC +6 )",
        title:"东六区 ( UTC +6 )",
        key:"东六区 ( UTC +6 )"
    },
    {
        index:-5,
        value:"东五区 ( UTC +5 )",
        title:"东五区 ( UTC +5 )",
        key:"东五区 ( UTC +5 )"
    },
    {
        index:-4,
        value:"东四区 ( UTC +4 )",
        title:"东四区 ( UTC +4 )",
        key:"东四区 ( UTC +4 )"
    },
    {
        index:-3,
        value:"东三区 ( UTC +3 )",
        title:"东三区 ( UTC +3 )",
        key:"东三区 ( UTC +3 )"
    },
    {
        index:-2,
        value:"东二区 ( UTC +2 )",
        title:"东二区 ( UTC +2 )",
        key:"东二区 ( UTC +2 )"
    },
    {
        index:-1,
        value:"东一区 ( UTC +1 )",
        title:"东一区 ( UTC +1 )",
        key:"东一区 ( UTC +1 )"
    },
    {
        index:0,
        value:"中时区 ( UTC +0 )",
        title:"中时区 ( UTC +0 )",
        key:"中时区 ( UTC +0 )"
    },
    {
        index:1,
        value:"西一区 ( UTC -1 )",
        title:"西一区 ( UTC -1 )",
        key:"西一区 ( UTC -1 )"
    },
    {
        index:2,
        value:"西二区 ( UTC -2 )",
        title:"西二区 ( UTC -2 )",
        key:"西二区 ( UTC -2 )"
    },
    {
        index:3,
        value:"西三区 ( UTC -3 )",
        title:"西三区 ( UTC -3 )",
        key:"西三区 ( UTC -3 )"
    },
    {
        index:4,
        value:"西四区 ( UTC -4 )",
        title:"西四区 ( UTC -4 )",
        key:"西四区 ( UTC -4 )"
    },
    {
        index:5,
        value:"西五区 ( UTC -5 )",
        title:"西五区 ( UTC -5 )",
        key:"西五区 ( UTC -5 )"
    },
    {
        index:6,
        value:"西六区 ( UTC -6 )",
        title:"西六区 ( UTC -6 )",
        key:"西六区 ( UTC -6 )"
    },
    {
        index:7,
        value:"西七区 ( UTC -7 )",
        title:"西七区 ( UTC -7 )",
        key:"西七区 ( UTC -7 )"
    },
    {
        index:8,
        value:"西八区 ( UTC -8 )",
        title:"西八区 ( UTC -8 )",
        key:"西八区 ( UTC -8 )"
    },
    {
        index:9,
        value:"西九区 ( UTC -9 )",
        title:"西九区 ( UTC -9 )",
        key:"西九区 ( UTC -9 )"
    },
    {
        index:10,
        value:"西十区 ( UTC -10 )",
        title:"西十区 ( UTC -10 )",
        key:"西十区 ( UTC -10 )"
    },
    {
        index:11,
        value:"西十一区 ( UTC -11 )",
        title:"西十一区 ( UTC -11 )",
        key:"西十一区 ( UTC -11 )"
    },
    {
        index:12,
        value:"西十二区 ( UTC -12 )",
        title:"西十二区 ( UTC -12 )",
        key:"西十二区 ( UTC -12 )"
    },


]
class BasicSetting extends React.Component {
    state = {
    }

    countryonChange = (value) => {
        this.props.form.setFieldsValue({country:value });
    }
    timeZoneonChange = (value) => {
        this.props.form.setFieldsValue({timeZone:value });
    }
    componentDidMount(){

        //背后设置上传的值
        const localTimeZone =new Date().getTimezoneOffset()/60;
        timeZone.forEach((value)=>{
            if( value.index == localTimeZone){
                this.props.form.setFieldsValue({timeZone:value.value });
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        let i="";
        const localTimeZone =new Date().getTimezoneOffset()/60;
        timeZone.forEach((value)=>{
            if( value.index == localTimeZone){
                i = value.value;
            }
        })
        return (
            <Form className="basicSettingForm" >
                <div className="basicInfoTitle">基本设置</div>
                <div className="formGroup">
                    <div className="formGroup-title">邮箱</div>
                    <FormItem>
                        {
                            getFieldDecorator('email')(
                                <Input prefix={<Icon type="mail"/>} placeholder="邮箱" />
                            )
                        }
                    </FormItem>
                </div>
                <div className="formGroup">
                    <div className="formGroup-title">昵称</div>
                    <FormItem>
                        {
                            getFieldDecorator('nickName')(
                                <Input prefix={<Icon type="smile"/>} placeholder="昵称" />
                            )
                        }
                    </FormItem>
                </div>
                <div className="formGroup">
                    <div className="formGroup-title">所在国家</div>
                    <FormItem>
                        {
                            getFieldDecorator('country')(
                                <TreeSelect
                                    showSearch
                                    style={{ width: 338 }}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                    placeholder="Please select"
                                    allowClear
                                    onChange={this.countryonChange}
                                >
                                    {options.map(
                                        (v)=>   <TreeNode value={v.value} title={v.title} key={v.key} />
                                    )}
                                </TreeSelect>
                            )
                        }
                    </FormItem>
                </div>
                <div className="formGroup">
                    <div className="formGroup-title">当前时区</div>
                    <FormItem>
                        {
                            getFieldDecorator('timeZone')(
                                <div>
                                    <TreeSelect
                                        style={{ width: 300 }}
                                        defaultValue={i}
                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                        placeholder="所在时区"
                                        allowClear
                                        onChange={this.timeZoneonChange}
                                    >
                                        {timeZone.map(
                                            (v)=>   <TreeNode value={v.value} title={v.title} key={v.key} />
                                        )}
                                    </TreeSelect>
                                    <Tooltip title="查询您所在位置的时区">
                                        <Button>
                                            <a href="http://www.shijian.cc/116/1304/"  >?</a>
                                        </Button>
                                    </Tooltip>
                                </div>

                            )
                        }
                    </FormItem>
                </div>




                <Button onClick={()=>{console.log(this.props.form.getFieldsValue())}} type='primary'>测试上传数据</Button>

            </Form>

        )
    }
}

export default Form.create()(BasicSetting);