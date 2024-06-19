import { createAction } from '@reduxjs/toolkit'


export const login = createAction('LOGIN', (user) => {

    const clearInfo = {
        token: user.token,
        loggedIn: true,
        expiresIn: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
        id: user.id,
        name: user.firstName + " " + user.lastName,
        email: user.email
    }

    return { payload: clearInfo }
})

export const logout = createAction('LOGOUT')

export const eraseError = createAction('ERASE_ERROR')

/* 
export const loginAsync = createAsyncThunk('LOGIN_ASYNC', async (user) => {

    const response = await axios.post('https://java-module.onrender.com/api/auth/login', user);
    const token = response.data;

    const responseCurrentClient = await axios.get("https://java-module.onrender.com/api/auth/current", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const client = responseCurrentClient.data;
    console.log(client)

    const clearInfo = {
        token: token,
        loggedIn: true,
        expiresIn: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
        id: client.id,
        name: client.firstName + " " + client.lastName,
        email: user.email
    }

    return clearInfo
}) */
