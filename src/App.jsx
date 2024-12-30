import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles'
import Router from './router/Router';
import Header from './components/Header/Header';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles/>
			<Header/>
			<Router/>
		</BrowserRouter>
	);
};

export default App; 


