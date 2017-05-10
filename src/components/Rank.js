import React from "react";
import "../css/rank.css";
class Rank extends React.Component{
    render(){
        return (
            <div className="rank">
                <ul>
                    <li>
                        <a href="javascript:;">守护</a>
                    </li>
                    <li>
                        <a href="javascript:;" className="du">贡献周榜</a>
                    </li>
                    <li>
                        <a href="javascript:;">贡献总榜</a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Rank;