import * as actions from './action';


// 필요한거 알아서 추가
const initialState = {
    id:"",
    pw:"",
    token:"",
    picture:"",
    email:"",
    name:"",
    number:""
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.LOGIN:
            return {
                ...state,
                id:action.payload.ID
            };
        case actions.LOGOUT:
            return initialState;
        default:
            return initialState;
    }    
}

export default AuthReducer;