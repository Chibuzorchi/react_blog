export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const Logout = () => ({
    type: "LOGIN_FAILURE",
});

export const LoginFailure = () => ({
    type: "LOGOUT",
});