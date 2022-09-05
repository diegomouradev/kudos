import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RedirectToLogin } from './components/RedirectToLogin';
import { LoginPrompt } from './components/LoginPrompt';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RedirectToLogin />}></Route>
				<Route path="/login" element={<LoginPrompt />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
