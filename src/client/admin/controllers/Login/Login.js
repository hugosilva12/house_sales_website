import React, { useState } from 'react'
import useSession from '../../../hooks/useSession'
import { Redirect, useHistory } from 'react-router-dom'

import styles from './Login.module.sass'

const Login = () => {
	const [session] = useSession()
	const history = useHistory()
	const [error, setError] = useState(null)
	const [submitting, setSubmitting] = useState(false)
	const [credentials, setCredentials] = useState({username: '', password: ''})
	if (session) {
		return <Redirect to='/admin' />
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (submitting) { return }
		setSubmitting(true)
		setError(null)
		fetch('/api/login', {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(credentials)
		})
			.then((r) => r.ok && r.json())
			.then((r) => {
				setSubmitting(false)
				setTimeout(() => {
					history.replace('/admin')
				}, 10)
			})
			.catch((err) => {
				setSubmitting(false)
				setError(`${ err }`)
			})
	}
	return (
		<div className={ styles['root'] }>
			<form
				className={ styles['input-form'] }
				onSubmit={ handleSubmit }
			>
				{ error && (
					<div className={ styles['error'] }>{ error }</div>
				) }
				<input type="text" value={ credentials.username } onChange={ (e) => { setCredentials({...credentials, username: e.target.value}) } } />
				<input type="password" value={ credentials.password } onChange={ (e) => { setCredentials({...credentials, password: e.target.value}) } }  />
				<button type="input">Login</button>
			</form>
		</div>
	)
}

export default Login