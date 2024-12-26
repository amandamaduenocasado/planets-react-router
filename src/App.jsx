import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles/>
			<h1></h1>
			<Router/>
		</BrowserRouter>
	);
};

export default App; 


