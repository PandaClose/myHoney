import React from "react";
import "../css/loading.css";
class Loading extends React.Component{
    render(){
        return (
            <div className="loading">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>

        )
    }
}
export default Loading;