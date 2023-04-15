import {
     DISPLAY_ALERT, 
     CLEAR_ALERT, 
     REGISTER_USER_BEGIN, 
     REGISTER_USER_SUCCESS, 
     REGISTER_USER_ERROR,
     LOGIN_USER_BEGIN,
     LOGIN_USER_SUCCESS,
     LOGIN_USER_ERROR, 
     SETUP_USER_BEGIN,
     SETUP_USER_SUCCESS,
     SETUP_USER_ERROR,
     TOGGLE_SIDEBAR,
     LOGOUT_USER
    } from "./action";
import { initialState } from "./appContext";

const reducer = (state, action) => {
    //Alert Status
    if(action.type === DISPLAY_ALERT){
        return {...state, showAlert:true, alerType:'error', alertText:'Please provide value in the fields!'}
    }
    if(action.type === CLEAR_ALERT){
        return {...state, showAlert:false, alerType:'', alertText:''}
    }
    //Register Status
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
    //LOGIN Status
    if(action.type === LOGIN_USER_BEGIN){
        return {...state, isLoading: true}
    };

    if(action.type === LOGIN_USER_SUCCESS){
        return {
            ...state, 
            isLoading: false, 
            token: action.payload.token, 
            user: action.payload.user, 
            userLocation: action.payload.location, 
            jobLocation: action.payload.location,
            showAlert: true,
            alerType: 'success',
            alertText: 'User Login Success, Redirecting...'
        }
    };
    if(action.type === LOGIN_USER_ERROR){
        return {
            ...state, 
            isLoading: false, 
            showAlert: true,
            alerType: 'error',
            alertText: action.payload.msg
        }
    };

    //SETUP
    if(action.type === SETUP_USER_BEGIN){
        return {...state, isLoading: true}
    };

    if(action.type === SETUP_USER_SUCCESS){
        return {
            ...state, 
            isLoading: false, 
            token: action.payload.token, 
            user: action.payload.user, 
            userLocation: action.payload.location, 
            jobLocation: action.payload.location,
            showAlert: true,
            alerType: 'success',
            alertText: action.payload.alertText
        }
    };
    if(action.type === SETUP_USER_ERROR){
        return {
            ...state, 
            isLoading: false, 
            showAlert: true,
            alerType: 'error',
            alertText: action.payload.msg
        }
    };

    if(action.type === TOGGLE_SIDEBAR){
        return {...state, showSidebar:!state.showSidebar}
    };

    if(action.type === LOGOUT_USER){
        return {...initialState, user:null, token:null, jobLocation:'', userLocation: '' }
    };

    throw new Error(`no such action :${action.type}`);
};

export default reducer;