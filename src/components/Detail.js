import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router"
import "../css/detail.css";
import Chat from "./Chat";
import Rank from "./Rank";
class Detail extends React.Component{
    componentDidMount(){
        this.props.router.replace("detail/"+this.props.params.aid+"/chat")
    }
    render(){
        let {focus,addFocus} = this.props;
        let id = this.props.params.aid;
        return (
            <div>
                <div className="vid">
                    <Link to="/home" className="exit">&lt;</Link>
                    <a href="javascript:;" className="rellogo">全民直播</a>
                    <video src="/src/video/1.ogg" autoPlay loop>
                        您的浏览器不支持 video 标签。
                    </video>
                </div>
                <div className="chat">
                    <ul>
                        <li>
                            {/*<a className="uu" href="javascript:;">聊天</a>*/}
                            <Link to={"detail/"+this.props.params.aid+"/chat"}activeClassName="uu">聊天</Link>
                        </li>
                        <li>
                            {/*<a href="javascript:;">排行</a>*/}
                            <Link to={"detail/"+this.props.params.aid+"/rank" } activeClassName="uu">排行</Link>
                        </li>
                        <li>
                            {/*<a href="javascript:;">主播</a>*/}
                            <Link to={"detail/"+this.props.params.aid+"/anchor" } activeClassName="uu">主播</Link>
                        </li>
                        <li>
                            <a href="javascript:;" className="guanzhu" onClick={addFocus.bind(null,id)}>关注</a>
                        </li>
                    </ul>
                </div>
                   {this.props.children}
            </div>
        )
    }
}
const mapState = (state)=>{
    return {
        focus:state.focus
    }
};
const mapDispatch = (dispatch)=>{
    return {
        addFocus:(index)=>{
            dispatch({
                type:"ADD_FOCUS",
                payload:index
            })
        }
    }
}
const Contain = connect(
    mapState,
    mapDispatch
)(Detail)
export default Contain;