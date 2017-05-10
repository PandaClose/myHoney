import React from "react";
import "../css/detail.css"
class Chat extends React.Component{
    constructor(){
        super();
        name="";
        this.state={
            arr:[],
            say:[],
            now:""
        }
        this.chance = this.chance.bind(this);
        this.submit = this.submit.bind(this);
    }
    chance(ev){
        this.setState({
            now:ev.target.value
        })
    }
    submit(ev){
        let newSay = this.state.say;
        newSay.push(this.state.now);
        this.setState({
            say:newSay,
            now:""
        })
    }
    render(){
        return (
            <div>
                <div className="mid">
                    <div className="content">
                        <p className="tishi"><span>系统通知:</span>全民直播提倡绿色直播。封面和直播间含吸烟，低俗，
                            引诱，暴露等都将被停封账号。网警24小时在线巡查哦。</p>
                        {
                            this.state.say.map((val,index)=>{
                                return (
                                    <li key={index}><span className="dengji">☆黄铜一</span><span>源代码:</span>{val}</li>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="say">
                    <input type="text" placeholder="和主播说点什么..." value={this.state.now} onChange={this.chance}/><span onClick={this.submit}>发送</span>
                </div>
            </div>
        )
    }
}
export default Chat;