import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[]
        }
        this.getContent = this.getContent.bind(this);
    }
    getContent(){
        let {loadingShow,loadingHide} = this.props;
        let url = "./src/data/data.json";
        loadingShow();
        fetch(url).then((res)=>{
            if(res.ok){
                res.json().then((data)=>{
                    setTimeout(()=>{
                        loadingHide();
                        this.setState({
                            arr:data
                        });
                    },0)
                })
            }
        }).catch((res)=>{
            console.log(res);
        })
    }
    componentDidMount(){
        var mySwipe=new Swipe($('.banner')[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
                $('.banner ol li').removeClass('active');
                $('.banner ol li').eq(index).addClass('active');
            }
        })
        this.getContent();
    }
    render(){
        return (
            <div>
                <header>
                    <div className="left">
                        <i className="iconfont icon-search"></i>
                    </div>
                    <div className="mid">
                        <img src="src/img/logo.png" alt=""/>
                    </div>
                    <div className="right">
                        <i className="iconfont icon-mail"></i>
                    </div>
                </header>
                <div className="banner">
                    <ul className="clearfix">
                        <li><img src="src/img/user.png" alt=""/>
                            <div className="text-box">
                                <h2>10345</h2>
                            </div>
                        </li>
                        <li><img src="src/img/user1.png" alt=""/>
                            <div className="text-box">
                                <h2>34556</h2>
                            </div>
                        </li>
                        <li><img src="src/img/user2.png" alt=""/>
                            <div className="text-box">
                                <h2>45678</h2>
                            </div>
                        </li>
                        <li><img src="src/img/user3.png" alt=""/>
                            <div className="text-box">
                                <h2>12674</h2>
                            </div>
                        </li>
                    </ul>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
                <nav>
                    <p className="title">
                        <span className="tit-l">精彩推荐</span>
                        <span className="tit-r">更多</span>
                    </p>
                    {
                        this.state.arr.map((item,index)=>{
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
                </nav>
            </div>
        )
    }
}
const mapState = (state)=>{
    return {
        loading:state.loading
    }
};
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
};
const Container = connect(
    mapState,
    mapDispatch
)(Home)
export default Container;