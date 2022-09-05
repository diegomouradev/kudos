import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function RedirectToLogin() {
	let navigate = useNavigate();
	useEffect(() => {
		navigate('/login', { replace: true });
	}, []);
	return <div>loading...</div>;
}
