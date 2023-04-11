import { DISPLAY_ALERT, CLEAR_ALERT } from "./action";


const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT){
        return {...state, showAlert:true, alerType:'error', alertText:'Please provide value in the fields!'}
    }
    if(action.type === CLEAR_ALERT){
        return {...state, showAlert:false, alerType:'', alertText:''}
    }
        throw new Error(`no such action :${action.type}`);
};

export default reducer;