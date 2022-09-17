import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

test('redirects to login', () => {
	// eslint-disable-next-line testing-library/no-unnecessary-act
	act(() => {
		render(<App />);
	});
	expect(window.location.pathname).toBe('/login');
});

test('clicking submit navigates to dashboard', async () => {
	const user = userEvent.setup();

	act(async () => {
		render(<App />);
	});

	// TODO: wait for the redirect?
	await user.click(screen.getByRole('button'));

	expect(window.location.pathname).toBe('/');
});
