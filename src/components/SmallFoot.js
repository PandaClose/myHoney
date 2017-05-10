import React from "react";
import {Link} from "react-router"
class SmallFoot extends React.Component{
    render(){
        return (
            <footer>
                <ul>
                    <li>
                        <Link to="/home" activeClassName="chance">
                            <i className="iconfont icon-home2"></i>
                            <span className="bb">首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tv" activeClassName="chance">
                            <i className="iconfont icon-live_fill"></i>
                            <span className="bb">直播</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/focus" activeClassName="chance">
                            <i className="iconfont icon-like_fill"></i>
                            <span className="bb">关注</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/user" activeClassName="chance">
                            <i className="iconfont icon-wode"></i>
                            <span className="bb">我的</span>
                        </Link>
                    </li>
                </ul>
            </footer>
        )
    }
}
export default SmallFoot;