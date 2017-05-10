import React from "react";
import SmallFoot from "./SmallFoot";
import "../css/index.css";
import Loading from "./Loading";
import {connect} from "react-redux";
class App extends React.Component{
    componentDidMount(){
        this.props.router.replace("home")
    }
    render(){
        let {footShow,footHide,loadingShow,loadingHide,foot,loading} = this.props;
        let url = this.props.location.pathname;
        if(/detail/.test(url)){
            setTimeout(()=>{
                footHide();
            },0)
        }else{
            setTimeout(()=>{
                footShow();
            },0)
        }
        return (
            <div>
                {loading?<Loading/>:""}
                {this.props.children}
                {foot?<SmallFoot/>:""}
            </div>
        )
    }
}
const mapState = (state)=>{
    return {
        foot:state.foot,
        loading:state.loading
    }
}
const mapDispatch = (dispatch)=>{
    return {
        footShow:()=>{
            dispatch({
                type:"FOOT_SHOW"
            })
        },
        footHide:()=>{
            dispatch({
                type:"FOOT_HIDE"
            })
        },
        loadingShow:()=>{
            dispatch({
                type:"LOADING_SHOW"
            })
        },
        loadingHide:()=>{
            dispatch({
                type:"LOADING_HIDE"
            })
        }
    }
};
const Container = connect(
    mapState,
    mapDispatch
)(App)
export default Container;