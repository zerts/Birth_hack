import C from '../constants';

export const registerActive = (state=true, action) => {
	switch (action.type) {
		case C.REGISTER_ACTIVE:
			return {
				active: !state.active
			};
		default:
			return state;
	}
};

export const registerStatus = (state=C.REGISTER_STATUS.NOT_YET, action) => {
	switch (action.type) {
		case C.REGISTER_TEAM:
			return action.status;
		default:
			return state;
	}
};

const skill = (state={}, action) => {
	console.log(state.skill);
	return {
			...state,
			status: !state.status
	};
};

const skills = (state={}, action) => {
	return state.map((currSkill, i) => (currSkill.skill === action.skill) ?
		skill(currSkill, action) : currSkill);
};

const anotherSkills = (state='', action) => {
	return action.text;
};

const advice = (state='', action) => {
	return action.text;
};

const man = (state={}, action) => {
	switch (action.type) {
		case C.REGISTER_FORM.EDIT_EMAIL:
			return {
				...state,
				email: action.text
			};
		case C.REGISTER_FORM.EDIT_NAME:
			return {
				...state,
				name: action.text
			};
		case C.REGISTER_FORM.EDIT_PHONE:
			return {
				...state,
				phone: action.text
			};
		case C.REGISTER_FORM.EDIT_UNIVERCITY:
			return {
				...state,
				univercity: action.text
			};
		default:
			return state;
	}
};

const people = (state={}, action) => {
	return state.map((currMan, i) =>
		(i === action.index) ?
			man(currMan, action) :
			currMan);
};

const teamName = (state='', action) => {
	return action.name;
};

export const registerForm = (state={}, action) => {
	switch (action.type) {
		case C.REGISTER_FORM.EDIT_TEAM_NAME:
			return {
				...state,
				teamName: teamName(state.teamName, action)
			};
		case C.REGISTER_FORM.EDIT_EMAIL:
		case C.REGISTER_FORM.EDIT_NAME:
		case C.REGISTER_FORM.EDIT_PHONE:
		case C.REGISTER_FORM.EDIT_UNIVERCITY:
			return {
				...state,
				people: people(state.people, action)
			};
		case C.REGISTER_FORM.EDIT_SKILLS:
			return {
				...state,
				skills: skills(state.skills, action)
			};
		case C.REGISTER_FORM.EDIT_EXTRA_SKILLS:
			return {
				...state,
				anotherSkills: anotherSkills(state.anotherSkills, action)
			};
		case C.REGISTER_FORM.EDIT_ASVICE:
			return {
				...state,
				advice: advice(state.advice, action)
			};
		default:
			return state;
	}
};
