import React from 'react';
import { Route, Switch } from 'react-router';
import { MainPage } from '../views/main';
//import { Landing } from '../views/landing';

const MainRouter = () => (
	<Switch>
		<Route exact path='/' component={ MainPage } />
	</Switch>
);

export default MainRouter;
