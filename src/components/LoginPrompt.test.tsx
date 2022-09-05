import { render, screen } from '@testing-library/react';
import { LoginPrompt } from './LoginPrompt';

test('has input for username', () => {
	render(<LoginPrompt />);
	expect(screen.getByLabelText('username', { exact: false })).toBeInTheDocument();
});
test('has input for password', () => {
	render(<LoginPrompt />);
	expect(screen.getByLabelText('password', { exact: false })).toBeInTheDocument();
});
test('has submit button', () => {
	render(<LoginPrompt />);
	expect(screen.getByRole('button')).toBeInTheDocument();
});
