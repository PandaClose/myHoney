import types from "./types";
const reducer = (state=defaultStatus,action)=>{
    let {type,payload} = action;
    switch (type){
        case types.FOOT_SHOW:
            return Object.assign({},state,{
                foot:true
            });
            break;
        case types.FOOT_HIDE:
            return Object.assign({},state,{
                foot:false
            });
            break;
        case types.LOADING_SHOW:
            return Object.assign({},state,{
                loading:true
            });
            break;
        case types.LOADING_HIDE:
            return Object.assign({},state,{
                loading:false
            });
            break;
        case types.ADD_FOCUS:
            return Object.assign({},state,{
                focus:state.focus.concat(payload)
            });
            break;
        default:
            return state
    }
}
export default reducer;