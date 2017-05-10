import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
class FocusList extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[],
            focus:[]
        }
    }
    componentDidMount(){
        let {focus} = this.props;
        let url = "./src/data/data.json";
        let newArr = [];
        let {loadingShow,loadingHide} = this.props;
        loadingShow();
        fetch(url).then((res)=>{
            if(res.ok){
                res.json().then((data)=>{
                    setTimeout(()=>{
                        loadingHide();
                        this.setState({
                            arr:data
                        })
                    },0)
                })
            }
        }).catch((res)=>{
            console.log(res);
        })
        setTimeout(()=>{
            focus.map((val,index)=>{
                let temp = this.state.arr[val-1];
                newArr.push(temp);
            })
            this.setState({
                focus:newArr
            })
        },50)
    }
    render(){
        return (
            <div className="nav">
                {
                    this.state.focus.map((item, index) => {
                        return (
                            <dl key={index} className="box">
                                <dt className="dt">
                                    <Link to={"detail/"+item.id}>
                                        <img src={item.url} alt=""/>
                                        <span className="content">{item.title}</span>
                                    </Link>
                                </dt>
                                <dd className="picName">
                                    <div className="pp">
                                        <div className="p-left"> {item.name}</div>
                                        <div className="p-right">{item.person}</div>
                                    </div>
                                </dd>
                            </dl>
                        )
                    })
                }
            </div>
        )
    }
}
const mapState = (state)=>{return{
    focus:state.focus,
}}
const mapDispatch = (dispatch)=>{
    return {
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
}
const Contain = connect(
    mapState,
    mapDispatch
)(FocusList)
export default Contain;