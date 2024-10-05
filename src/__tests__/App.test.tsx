import App from '@/App';
import { render, screen } from '@testing-library/react';
describe('AppComponent', () => {
	it('check if Login component if rendered inside App', () => {
		render(<App />);
		expect(screen.getByText('Login')).toBeInTheDocument();
	});
});
