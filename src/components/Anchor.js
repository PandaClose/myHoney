import React from "react";
import "../css/anchor.css";
class Anchor extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[]
        };
    }
    componentDidMount(){
        let url = "./src/data/data.json";
        fetch(url).then((res)=>{
            res.json().then((data)=>{
                setTimeout(()=>{
                    this.setState({
                        arr:data
                    })
                },0)
            })
        })
    }
    render(){
        let id=(this.props.params.aid)-1;
        let item = this.state.arr.length>0?this.state.arr[id]:"";
        console.log(item);
        return (
            <div className="anchor">
                <div className="anchorname">
                    <dl>
                        <dt>
                            <img src={this.state.arr.length>0?item.portrait:""} alt=""/>
                        </dt>
                        <dd>
                            <p className="name">
                                {this.state.arr.length>0?item.name:""}
                            </p>
                            <span>全民号:<a href="#">333</a></span>
                            <span>粉丝:<a href="#">333</a></span>
                            <span>战斗力:<a href="#">{this.state.arr.length>0?item.person:""}</a></span>
                        </dd>
                    </dl>
                </div>
                <p className="cutTime"></p>
                <div className="notice">
                    <p className="tit">直播公告</p>
                    <p className="con">每天早上10点直播</p>
                </div>
                <p className="cutTime"></p>
                <div className="personal">
                    <p className="tit">个人资料</p>
                    <li>
                        <span className="l">年龄</span>
                        <span className="r">保密</span>
                    </li>
                    <li>
                        <span className="l">情感状态</span>
                        <span className="r">保密</span>
                    </li>
                    <li>
                        <span className="l">所在地</span>
                        <span className="r">外太空</span>
                    </li>
                    <li className="last">
                        <span className="l">职业</span>
                        <span className="r">保密</span>
                    </li>
                </div>
            </div>
        )
    }
}
export default Anchor;