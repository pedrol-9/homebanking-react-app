import { createReducer } from '@reduxjs/toolkit'
import { login } from '../actions/authActions'
// import { createAction } from '@reduxjs/toolkit'


const initialState = {
	loggedIn: false,
	token: '',
	expiresIn: '',
	user: {
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
					name: action.payload.name,
					email: action.payload.email,
					password: action.payload.password
				},
				token: action.payload.token,
				loggedIn: action.payload.loggedIn,
				expiresIn: action.payload.expiresIn
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