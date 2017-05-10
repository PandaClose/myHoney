import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
class List extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[]
        }
    }
    componentDidMount(){
        let url = "./src/data/data.json";
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
    }
    render(){
        return (
            <div className="nav">
                {
                    this.state.arr.map((item, index) => {
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
const mapState = ()=>{return{}}
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
)(List)
export default Contain;