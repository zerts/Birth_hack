import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './routes';
import { storeFactory } from './reducers';
import C from './constants';

import registerServiceWorker from './registerServiceWorker';

const initialState = {
	registerActive: {
		active: false
	},
	registerStatus: C.REGISTER_STATUS.NOT_YET,
	registerForm: {
		teamName: '',
		people: [
		{
			email: '',
			name: '',
			phone: '',
			univercity: ''
		},
		{
			email: '',
			name: '',
			phone: '',
			univercity: ''
		},
		{
			email: '',
			name: '',
			phone: '',
			univercity: ''
		},
		{
			email: '',
			name: '',
			phone: '',
			univercity: ''
		}
		],
		skills: [
			{
				skill: 'Machine learning',
				status: false
			},
			{
				skill: 'React',
				status: false
			},
			{
				skill: 'SMM',
				status: false
			}
		],
		anotherSkills: '',
		advice: ''
	}
};

const store = storeFactory(initialState);

const render = () =>
	ReactDOM.render(
		<Provider store={ store }>
			<BrowserRouter>
				<MainRouter/>
			</BrowserRouter>
		</Provider>,
		document.getElementById('root'));

store.subscribe(render);
render();

registerServiceWorker();
