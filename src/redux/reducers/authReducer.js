import { createReducer } from '@reduxjs/toolkit'
import { login } from '../actions/authActions'
// import { createAction } from '@reduxjs/toolkit'


const initialState = {
	loggedIn: false,
	token: '',
	expiresIn: '',
	user: {
		id: '',
		name: '',
		email: '',
		image: ''
	}
}

const authReducer = createReducer(initialState, (builder) => {

	builder
		.addCase(login, (state, action) => {
			
			return {
				...state,				
				user: {
					id: action.payload.id,
					name: action.payload.name,
					email: action.payload.email,
					// accounts: action.payload.accounts,
					// cards: action.payload.cards,
					// loans: action.payload.loans
				},
				loggedIn: action.payload.loggedIn,
				token: action.payload.token,
				expiresIn: action.payload.expiresIn,				
			}
		})
		

	/* logout: (state) => {
			state.loggedIn = false
			state.token = ''
			state.expiresIn = ''
			state.user = {
					name: '',
					email: '',
					image: ''
			}
	} */
})

export default authReducer