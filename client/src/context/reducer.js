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
     LOGOUT_USER,
     UPDATE_USER_BEGIN,
     UPDATE_USER_SUCCESS,
     UPDATE_USER_ERROR,
     HANDLE_CHANGE,
     CLEAR_VALUES,
     CREATE_JOB_BEGIN,
     CREATE_JOB_SUCCESS,
     CREATE_JOB_ERROR,
     GET_JOBS_BEGIN,
     GET_JOBS_SUCCESS,
     SET_EDIT_JOB
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

    if(action.type === UPDATE_USER_BEGIN){
        return {...state, isLoading: true}
    };

    if(action.type === UPDATE_USER_SUCCESS){
        return {
            ...state, 
            isLoading: false, 
            token: action.payload.token, 
            user: action.payload.user, 
            userLocation: action.payload.location, 
            jobLocation: action.payload.location,
            showAlert: true,
            alerType: 'success',
            alertText: 'User Updated!'
        }
    };
    if(action.type === UPDATE_USER_ERROR){
        return {
            ...state, 
            isLoading: false, 
            showAlert: true,
            alerType: 'error',
            alertText: action.payload.msg
        }
    };

    if(action.type === HANDLE_CHANGE){
        return {
            ...state, 
            [action.payload.name]: action.payload.value
        }
    };

    if(action.type === CLEAR_VALUES){
        
        const initialState = {
            isEditing: false,
            editJobId: '',
            position: '',
            company: '',
            jobLocation: state.userLocation || '',
            jobType: 'full-time',
            status: 'pending'
        }
        return {
            ...state, 
            ...initialState
            
        }
    };

    if(action.type === CREATE_JOB_BEGIN){
        return {...state, isLoading: true}
    };

    if(action.type === CREATE_JOB_SUCCESS){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alerType: 'success',
            alertText: 'New Job Created'
        }
    };

    if(action.type === CREATE_JOB_ERROR){
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alerType: 'error',
            alertText: action.payload.msg
        }
    };

    if(action.type === GET_JOBS_BEGIN){
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    };

    if(action.type === GET_JOBS_SUCCESS){
        return {
            ...state,
            isLoading: false,
            jobs: action.payload.jobs,
            totalJobs: action.payload.totalJobs,
            numOfPages: action.payload.numOfPages
        }
    };

    if(action.type === SET_EDIT_JOB){
        
        console.log(action)
        console.log(state.jobs)
        const job = state.jobs.find((job) => job._id === state.payload.id)
        const {_id, position, company, jobLocation, jobType, status} = job
        return {
            ...state,
            isEditing: true,
            editJobId: _id,
            position,
            company,
            jobLocation,
            jobType,
            status
        }
    }

    if(action.type === TOGGLE_SIDEBAR){
        return {...state, showSidebar:!state.showSidebar}
    };

    if(action.type === LOGOUT_USER){
        return {...initialState, user:null, token:null, jobLocation:'', userLocation: '' }
    };

    throw new Error(`no such action :${action.type}`);
};

export default reducer;