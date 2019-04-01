import React from 'react';
import {Checkbox, Card,InputNumber } from 'antd'
import './index.less'
let prevLoop = 1;
let lastColumn=[];


export default class Name extends React.Component {
    state = {
        methods: [
            {
                id: 0,
                propName: "购买方式",
                options: [{
                    value: "按课时购买"
                }, {
                    value: "包月购买"
                }, {
                    value: "团体购买"
                }]
            },
            {
                id: 1,
                propName: "上课类型",
                options: [{
                    value: "1v1"
                }, {
                    value: "1v3"
                }, {
                    value: "1v6"
                }]
            },
            {
                id: 2,
                propName: "购买时长",
                options: [{
                    value: "1个月"
                }, {
                    value: "3个月"
                }, {
                    value: "1年"
                }]
            }
        ]
    }

    componentDidMount() {
        //接收参数
        //console.log(this.props.history.location.para)
    }

    renderTableCell =(items,indexs)=>{
        if(indexs>0){
            prevLoop *= this.state.methods[indexs-1].options.length
        }
        let tempArr = []
        for(let i=0;i<prevLoop;i++){
            items.options.forEach((item,index)=>{
                tempArr.push(<div key={i+"-"+index} className="tableCell">{item.value}</div>)
            })
        }
        lastColumn=tempArr;
        return tempArr;
    }
    onPriceChange=(value)=> {
        console.log('PriceChange', value);
    }
    onDiscountChange=(value)=> {
        console.log('DiscountChange', value);
    }
    render() {
        const {methods} = this.state;
        return (
            <div>
                <Card className="cardContainer2">
                    <div className="tableHeader">
                        {
                            methods.map((item,index)=><div key={index} className="tableColumn">
                                    <div className="tableCell">
                                        {item.propName}
                                    </div>
                                </div>
                            )

                        }
                        <div className="tableColumn">
                            <div className="tableCell">
                                价格
                            </div>
                        </div>
                        <div className="tableColumn">
                            <div className="tableCell">
                                折扣价格
                            </div>
                        </div>
                    </div>
                    <div className="tableContainer">
                        {/*{this.renderTableColumn(methods)}*/}
                        {methods.map((items,indexs)=>
                        <div key={indexs} className="tableColumn">
                        {
                            this.renderTableCell(items,indexs)
                        }
                        </div>
                        )}
                        <div className="tableColumn">
                            {
                                lastColumn.map((item,index)=>{
                                    return(
                                        <div key={index} className="tableCell">
                                            <InputNumber
                                                className="PriceInput"
                                                formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                onChange={this.onPriceChange} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="tableColumn">
                            {
                                lastColumn.map((item,index)=>{
                                    return(
                                        <div key={index} className="tableCell">
                                            <InputNumber
                                                className="PriceInput"
                                                formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                onChange={this.onDiscountChange} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}