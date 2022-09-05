import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('redirects to login', () => {
	// eslint-disable-next-line testing-library/no-unnecessary-act
	act(() => {
		render(<App />);
	});
	expect(window.location.pathname).toBe('/login');
});
