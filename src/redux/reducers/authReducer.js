import { createReducer } from '@reduxjs/toolkit'
import { login, logout } from '../actions/authActions'



const initialState = {
	loggedIn: false,
	token: '',
	expiresIn: '',
	error: '',
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
					},
					loggedIn: action.payload.loggedIn,
					token: action.payload.token,
					expiresIn: action.payload.expiresIn,
				}
			})
			.addCase(logout, (state) => {
				return initialState
			})
	})

	export default authReducer


/*
const authReducer = createReducer(initialState, (builder) => {

	builder
		.addCase(loginAsync.fulfilled, (state, action) => {

			console.log('login fullfilled:', action.payload)

			return {
				...state,
				user: {
					id: action.payload.id,
					name: action.payload.name,
					email: action.payload.email
				},
				loggedIn: action.payload.loggedIn,
				token: action.payload.token,
				expiresIn: action.payload.expiresIn,
				error: ''
			}
		})
			
.addCase(loginAsync.pending, (state, action) => {
	console.log('loading...')
	return {
		...state,
		error: ''
	}
})
.addCase(loginAsync.rejected, (state, action) => {
	console.log('rejected...')
	return {
		...state,
		error: action.error.message
	}
})
.addCase(eraseError, (state, action) => {
	return {
		...state,
		error: ''
	}
}) 


export default authReducer */