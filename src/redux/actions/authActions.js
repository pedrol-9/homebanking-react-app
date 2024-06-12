import { createAction } from '@reduxjs/toolkit'


/* export const login = createAction('LOGIN', (user) => {

    const clearInfo = {
        name: user.name + " " + user.lastName,
        email: user.email,
        password: user.password
    }

    return { payload: clearInfo }
}) */

export const login = createAction('LOGIN', (user) => {
    return { 
        payload: {
            name: user.name,
            email: user.email,
            password: user.password,
            token: user.token,
            loggedIn: user.loggedIn,
            expiresIn: user.expiresIn
        }
    }
})
