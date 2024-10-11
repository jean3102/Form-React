import useLogin from '@/hooks/useLogin';
import { useState } from 'react';
import './styles/login.css';
const Login = () => {
	const { handleLogin, formData } = useLogin();
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setErrorMessage('');

		if (handleFormValidation()) {
			console.log(formData);
		}
	};

	const handleFormValidation = () => {
		if (formData.email === '') {
			setErrorMessage('Email is required');
			return;
		}

		if (formData.email.indexOf('@') === -1) {
			setErrorMessage('Please enter a valid email address');
			return;
		}

		if (formData.password === '') {
			setErrorMessage('Password is required');
			return;
		}

		setErrorMessage('');
		return true;
	};

	return (
		<section>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="email"
					value={formData.email}
					onChange={handleLogin}
					data-testid="email"
				/>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleLogin}
					data-testid="password"
					autoComplete="on"
				/>
				<button
					type="submit"
					data-testid="submit">
					Sign in
				</button>
			</form>
			{errorMessage && <p>{errorMessage}</p>}
		</section>
	);
};

export default Login;
