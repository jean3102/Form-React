import { useState } from 'react';

const useLogin = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [errorMessage, setErrorMessage] = useState('');

	const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value.trim() }));
	};

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
	return {
		formData,
		handleLogin,
		handleSubmit,
		errorMessage,
	};
};

export default useLogin;
