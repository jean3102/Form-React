import Login from '@/components/Login';
import { fireEvent, render, screen } from '@testing-library/react';

describe('LoginComponent', () => {
	let email: HTMLInputElement;
	let password: HTMLInputElement;
	let submit: HTMLButtonElement;

	beforeEach(() => {
		render(<Login />);
		email = screen.getByTestId('email');
		password = screen.getByTestId('password');
		submit = screen.getByTestId('submit');
	});

	test('renders form with email, password, and submit button', () => {
		expect(email).toBeInTheDocument();
		expect(password).toBeInTheDocument();
		expect(submit).toBeInTheDocument();
	});

	test('it should allow typing in the email input', () => {
		fireEvent.change(email, { target: { value: 'jean@gmail.com' } });
		expect(email).toHaveValue('jean@gmail.com');
	});

	test('it should allow typing in the password input', () => {
		fireEvent.change(password, { target: { value: '123456' } });
        expect(password).toHaveValue("123456")
	});
});
