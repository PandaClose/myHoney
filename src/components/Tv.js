import React from "react";
import SmallFoot from "./SmallFoot";
import List from "./List";
import "../css/tv.css";
class Tv extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <div className="left">
                        <i className="iconfont icon-search"></i>
                    </div>
                    <div className="mid">
                        <span>直播</span>
                    </div>
                    <div className="right">
                        <i className="iconfont icon-mail"></i>
                    </div>
                </header>
                <List/>

                <SmallFoot/>
            </div>
        )
    }
}
export default Tv;