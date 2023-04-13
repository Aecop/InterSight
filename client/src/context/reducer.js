import { DISPLAY_ALERT, CLEAR_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "./action";


const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT){
        return {...state, showAlert:true, alerType:'error', alertText:'Please provide value in the fields!'}
    }
    if(action.type === CLEAR_ALERT){
        return {...state, showAlert:false, alerType:'', alertText:''}
    }
    if(action.type === REGISTER_USER_BEGIN){
        return {...state, isLoading: true}
    }
    if(action.type === REGISTER_USER_SUCCESS){
        return {
            ...state, 
            isLoading: false, 
            token: action.payload.token, 
            user: action.payload.user, 
            userLocation: action.payload.location, 
            jobLocation: action.payload.location,
            showAlert: true,
            alerType: 'success',
            alertText: 'User Register Success, Redirecting...'
        }
    };
    if(action.type === REGISTER_USER_ERROR){
        return {
            ...state, 
            isLoading: false, 
            showAlert: true,
            alerType: 'error',
            alertText: action.payload.msg
        }
    }
    throw new Error(`no such action :${action.type}`);
};

export default reducer;