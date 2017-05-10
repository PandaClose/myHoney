import React from "react";
import SmallFoot from "./SmallFoot";
import "../css/user.css";
class User extends React.Component{
    render(){
        return (
            <div>
                <div id="header">
                    <div className="head-tit">
                        <div className="head-l">
                            <i className="icon-search iconfont"></i>
                        </div>
                        <div className="head-r">
                            <i className="iconfont icon-mail"></i>
                        </div>
                    </div>
                    <div className="head-mid">
                        <dl>
                            <dt>
                                <img src="../src/img/logo.png" alt=""/>
                            </dt>
                            <dd>
                                <p className="name">
                                    源代码
                                </p>
                                <p className="num">
                    <span className="quanminnum">
                         全民号：1212321234
                    </span>
                                </p>
                            </dd>
                        </dl>
                    </div>
                    <div className="head-bot">
                        <ul>
                            <li>
                                <p>3</p>
                                <p>关注</p>
                            </li>
                            <li>
                                <p>0</p>
                                <p>粉丝</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <aside>
                    <div className="money">
                        <p>
                            <span>种子:543</span>
                            <a href="#">充值</a>
                        </p>
                        <p className="star">
                            <span>我的星光</span>
                            <span className="tixian">提现</span>
                        </p>
                    </div>
                    <p className="cut"></p>
                    <div className="set">
                        <p className="give">
                            <span className="l">星光贡献榜</span>
                            <span className="r">&gt;</span>
                        </p>
                        <p className="history">
                            <span className="l">观看历史</span>
                            <span className="r">&gt;</span>
                        </p>
                        <p className="wait">
                            <span className="l">我的等级</span>
                            <span className="r">&gt;</span>
                        </p>
                        <p className="work">
                            <span className="l">任务中心</span>
                            <span className="r">&gt;</span>
                        </p>
                    </div>
                    <p className="cut"></p>
                    <div className="set">
                        <p className="gamecenter">
                            <span className="l">游戏中心</span>
                            <span className="r">&gt;</span>
                        </p>
                        <p className="history">
                            <span className="l">设置</span>
                            <span className="r">&gt;</span>
                        </p>
                    </div>
                    <p className="cut"></p>
                </aside>
                <SmallFoot/>
            </div>
        )
    }
}
export default User;