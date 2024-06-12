import { createAction } from '@reduxjs/toolkit'
import Accounts from '../../pages/Accounts'


export const login = createAction('LOGIN', (user) => {

    const clearInfo = {
        token: user.token,
        // loggedIn: user.loggedIn,
        // expiresIn: user.expiresIn,
        id: user.id,
        name: user.firstName + " " + user.lastName,
        email: user.email,
        accounts: user.accounts,
        cards: user.cards,
        loans: user.loans
        // password: user.password,
    }

    return { payload: clearInfo }
})

/* export const login = createAction('LOGIN', (user) => {
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
}) */
