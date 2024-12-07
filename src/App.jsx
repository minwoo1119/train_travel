import './App.css';
import Header from './components/header/header';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/search" element={<SearchPage />}></Route>
					<Route path="/result" element={<ResultPage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
