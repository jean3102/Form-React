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

	test('Show an error when input does not contain @', () => {
		fireEvent.change(email, { target: { value: 'jeanCarlos.com' } });
		fireEvent.click(submit);
		expect(
			screen.getByText('Please enter a valid email address')
		).toBeInTheDocument();
	});

	test('it should allow typing in the email input', () => {
		fireEvent.change(email, { target: { value: 'jean@gmail.com' } });
		expect(email).toHaveValue('jean@gmail.com');
	});

	test('Should show an error message when email is empty', () => {
		fireEvent.change(email, { target: { value: '' } });
		fireEvent.click(submit);
		expect(screen.getByText('Email is required')).toBeInTheDocument();
	});

	test('it should allow typing in the password input', () => {
		fireEvent.change(password, { target: { value: '123456' } });
		expect(password).toHaveValue('123456');
	});

	test('Should show an error message when password is empty', () => {
		fireEvent.change(email, { target: { value: 'jean@gmail.com' } });
		fireEvent.change(password, { target: { value: '' } });
		fireEvent.click(submit);
		screen.debug();
		expect(screen.getByText('Password is required')).toBeInTheDocument();
	});

	test('should not show nay error when form is valid', () => {
		fireEvent.change(email, { target: { value: 'jean@gmail.com' } });
		fireEvent.change(password, { target: { value: '123456' } });
		fireEvent.click(submit);

		expect(screen.queryByText("Email is required")).not.toBeInTheDocument()
		expect(screen.queryByText("Please enter a valid email address")).not.toBeInTheDocument()
		expect(screen.queryByText("Password is required")).not.toBeInTheDocument()
	});
});
