import React from "react";
import {Router,Route,hashHistory,Link,IndexRoute} from "react-router";
import App from "../components/App";
import Home from "../components/Home";
import Tv from "../components/Tv";
import Focus from "../components/Focus";
import User from "../components/User";
import Detail from "../components/Detail";
import Chat from "../components/Chat";
import Rank from "../components/Rank";
import Anchor from "../components/Anchor";
const RouterConfig = ()=>{
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="tv" component={Tv}/>
                <Route path="focus" component={Focus}/>
                <Route path="user" component={User}/>
                <Route path="detail/:aid" component={Detail}>
                    <IndexRoute component={Chat}/>
                    <Route path="chat" component={Chat}/>
                    <Route path="rank" component={Rank}/>
                    <Route path="anchor" component={Anchor}/>
                </Route>
            </Route>
        </Router>
    )
}
export default RouterConfig;