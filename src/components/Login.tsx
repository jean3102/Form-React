import useLogin from '@/hooks/useLogin';
import './styles/login.css';
const Login = () => {
	const { handleLogin, formData, errorMessage, handleSubmit } = useLogin();

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
