export const LOGIN = "AUTH/LOGIN";
export const LOGOUT = "AUTH/LOGOUT";

export const Login = (userInfo) => {
    return {
        type: LOGIN,
        payload: userInfo
    };
}

export const Logout = () => {
    return {
        type: LOGOUT
    };
}