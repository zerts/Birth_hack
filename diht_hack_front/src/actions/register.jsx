import C from '../constants';

export const changeRegisterActive = () => ({
	type: C.REGISTER_ACTIVE
});

const registerTeamStatus = status =>
	({
		type: C.REGISTER_TEAM,
		status: status
	});

function postData(url, data) {
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		mode: 'cors'
	}).then(response => response.json());
}

export const registerTeam = (dispatch, teamJson) => {
	//alert('submit!');
	dispatch(registerTeamStatus(C.REGISTER_STATUS.IN_PROCESS));
	postData('http://127.0.0.1:5001/api/register/', teamJson)
		.then(data => {
			console.log(data);
			dispatch(registerTeamStatus(C.REGISTER_STATUS.DONE));
			alert('Команда зарегистрирована, в ближайшее время на первый указанный email должно прийти письмо с подтверждением')
		})
		.catch(error => console.error(error))
};

const registerManFormChange = (type, index, text) =>
	({
		type: type,
		index: index,
		text: text
	});

export const registerChangeEmail = (dispatch, index, text) => (
	dispatch(registerManFormChange(C.REGISTER_FORM.EDIT_EMAIL, index, text))
);

export const registerChangeName = (dispatch, index, text) => (
	dispatch(registerManFormChange(C.REGISTER_FORM.EDIT_NAME, index, text))
);

export const registerChangePhone = (dispatch, index, text) => (
	dispatch(registerManFormChange(C.REGISTER_FORM.EDIT_PHONE, index, text))
);

export const registerChangeUnivercity = (dispatch, index, text) => (
	dispatch(registerManFormChange(C.REGISTER_FORM.EDIT_UNIVERCITY, index, text))
);

export const registerChangeTeamName = name =>
	({
		type: C.REGISTER_FORM.EDIT_TEAM_NAME,
		name: name
	});

export const registerChangeSkill = skill =>
	({
		type: C.REGISTER_FORM.EDIT_SKILLS,
		skill: skill
	});

export const registerChangeExtraSkill = text =>
	({
		type: C.REGISTER_FORM.EDIT_EXTRA_SKILLS,
		text: text
	});

export const registerChangeAdvice = text =>
	({
		type: C.REGISTER_FORM.EDIT_ASVICE,
		text: text
	});
