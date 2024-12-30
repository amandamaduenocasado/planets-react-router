import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Planet from '../pages/planet/Planet'
import { PLANETS_INFO } from '../constants/styles/planets';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			{PLANETS_INFO.map(planet => (
				<Route
					key={planet.id}
					path={`/${planet.name}`}
					element={<Planet planet={planet} />}
				/>
			))}
		</Routes>
	);
};

export default Router;