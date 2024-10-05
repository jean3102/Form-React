import { useState } from 'react';

const useLogin = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value.trim() }));
	};

	return { formData, handleLogin };
};

export default useLogin;
