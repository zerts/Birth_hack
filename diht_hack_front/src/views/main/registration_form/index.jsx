import React from 'react';
import { connect } from 'react-redux';
import {
	registerTeam,
	registerChangeEmail, registerChangeName, registerChangeTeamName,
	registerChangePhone, registerChangeUnivercity,
	registerChangeSkill, registerChangeExtraSkill, registerChangeAdvice,
	changeRegisterActive
} from '../../../actions/register';

import './style.css';
import man from '../media/man.png';
import Textarea from "react-textarea-autosize";

const RegisterFormInput = ({title, index, value, onChange=f=>f, notRequired, className}) => (
	<div className={className}>
		<input id={value || notRequired ? "fill": "empty"}
		       type="text"
		       name="name"
		       value={value}
		       placeholder={title}
		       onChange={e => onChange(index, e.target.value)}/>
	</div>
);

const RegisterFormManUI = ({manData, index, notRequired,
                           registerChangeEmailForm,
                           registerChangeNameForm,
                           registerChangePhoneForm,
                           registerChangeUnivercityForm}) => (
    <div className="register-form-man-full">
	    <div className="register-form-man-img">
	        <img className="man-img" src={man} alt="man"/>
			#{index + 1}
	    </div>
		<div className="register-form-man">

			<RegisterFormInput title="ФИО"
			                   index={index}
			                   value={manData[index].name}
			                   onChange={registerChangeNameForm}
			                   notRequired={notRequired}
			                   className="register-form-field-name"/>

			<div className="register-form-man-extra">
				<RegisterFormInput title="Email"
				                   index={index}
				                   value={manData[index].email}
				                   onChange={registerChangeEmailForm}
				                   notRequired={notRequired}
				                   className="register-form-field"/>

				<RegisterFormInput title="Phone"
				                   index={index}
				                   value={manData[index].phone}
				                   onChange={registerChangePhoneForm}
				                   notRequired={notRequired}
				                   className="register-form-field"/>

				<RegisterFormInput title="Факультет, курс"
				                   index={index}
				                   value={manData[index].univercity}
				                   onChange={registerChangeUnivercityForm}
				                   notRequired={notRequired}
				                   className="register-form-field"/>
			</div>
		</div>
    </div>
);

const RegisterFormMan = connect(
	null,
	dispatch => ({
		registerChangeEmailForm(index, text) {
			registerChangeEmail(dispatch, index, text)
		},
		registerChangeNameForm(index, text) {
			registerChangeName(dispatch, index, text)
		},
		registerChangePhoneForm(index, text) {
			registerChangePhone(dispatch, index, text)
		},
		registerChangeUnivercityForm(index, text) {
			registerChangeUnivercity(dispatch, index, text)
		}
	})
)(RegisterFormManUI);

const SkillForm = ({skill, onChange=f=>f}) => (
	<div className="register-skill-checkbox">
		<input type="checkbox"
		       name={skill.skill}
		       value={skill.skill}
		       defaultChecked={skill.status}
		       onChange={() => onChange(skill.skill)}/>
		{skill.skill}
	</div>
);


class RegistrationFormComponent extends React.Component {
	constructor(props) {
		super(props);

		this.submit.bind(this);

		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	submit(e, teamData) {
		e.preventDefault();
		this.props.registerTeam(teamData);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			this.props.changeRegisterActive();
		}
	}

	render() {
		return (
			<form ref={this.setWrapperRef}
			      className="registration-form"
			      onSubmit={e => this.submit(e, this.props.registerForm)}>
				<div className="register-form-team-name">
					<input id={this.props.registerForm.teamName ? "fill": "empty"}
					       type="text"
					       name="name"
					       value={this.props.registerForm.teamName}
					       placeholder="название команды"
					       onChange={e => this.props.registerChangeTeamName(e.target.value)}/>
				</div>

				<RegisterFormMan manData={this.props.registerForm.people} index={0} notRequired={false}/>
				<RegisterFormMan manData={this.props.registerForm.people} index={1} notRequired={false}/>
				<RegisterFormMan manData={this.props.registerForm.people} index={2} notRequired={true}/>
				<RegisterFormMan manData={this.props.registerForm.people} index={3} notRequired={true}/>

				<div className="register-form-man-full">
					<div className="register-form-man-img">
						Отметьте ваши главные компетенции:
					</div>
					<div className="register-form-man">
						<div className="register-form-skills">
							{this.props.registerForm.skills.map((skill, i) =>
								<SkillForm key={i} skill={skill} onChange={this.props.registerChangeSkill}/>
							)}
						</div>

						<div className="register-form-team-extra-skills">
							<input id="fill"
							       type="text"
							       name="name"
							       value={this.props.registerForm.anotherSkills}
							       placeholder="Другие компетенции"
							       onChange={e => this.props.registerChangeExtraSkill(e.target.value)}/>
						</div>
					</div>
				</div>
				<div className="register-form-man-full">
					<div className="register-form-man-img">
						Дополнительные пожелания и предложения:
					</div>
					<div className="register-form-advice">
						<Textarea
							minRows={3}
							maxRows={6}
							defaultValue={this.props.registerForm.advice}
							onChange={e => this.props.registerChangeAdvice(e.target.value)}/>
					</div>
				</div>

				<input className="submit-form-button" disabled={
					!(this.props.registerForm.people[0].email
						&& this.props.registerForm.people[0].name
						&& this.props.registerForm.people[0].phone
						&& this.props.registerForm.people[0].univercity)
				} type="submit" value="Submit" />
			</form>
			)
	}
}

const RegistrationForm = connect(
	store => ({
		registerStatus: store.registerStatus,
		registerForm: store.registerForm
	}),
	dispatch => ({
		registerTeam(teamJson) {
			registerTeam(dispatch, teamJson)
		},

		registerChangeTeamName(name) {
			dispatch(registerChangeTeamName(name))
		},

		registerChangeSkill(skill) {
			dispatch(registerChangeSkill(skill))
		},
		registerChangeExtraSkill(text) {
			dispatch(registerChangeExtraSkill(text))
		},
		registerChangeAdvice(text) {
			dispatch(registerChangeAdvice(text))
		},

		changeRegisterActive() {
			dispatch(changeRegisterActive())
		},
	})
)(RegistrationFormComponent);



export const RegistrationFormFull = () => (
	<div className="registration-form-back">
		<RegistrationForm/>
	</div>
);
