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

