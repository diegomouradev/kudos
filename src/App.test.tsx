import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('prompt to login visible', () => {
	render(<App />);
	expect(screen.getByText('please enter username and password')).toBeInTheDocument();
});
