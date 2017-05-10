import React from "react";
import FocusList from "./FocusList";
import SmallFoot from "./SmallFoot";
import "../css/tv.css";
class Focus extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <div className="left">
                        <i className="iconfont icon-search"></i>
                    </div>
                    <div className="mid">
                        <span>关注</span>
                    </div>
                    <div className="right">
                        <i className="iconfont icon-mail"></i>
                    </div>
                </header>
                <FocusList/>
                <SmallFoot/>
            </div>
        )
    }
}
export default Focus;