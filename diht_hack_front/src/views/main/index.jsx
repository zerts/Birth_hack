import React from 'react';
import { RegistrationFormFull } from './registration_form';
import { connect } from 'react-redux';
import { changeRegisterActive } from "../../actions/register";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './style.css';
import oneC from './media/1c.png';
import diht from './media/diht.png';
import lab from './media/lab2.png';
import prize from './media/prize.png';
import calendar from './media/calendar2.png';
import loc from './media/loc.png';

import star from './media/star.png';
import erlih from './media/erlih.png';
import blago from './media/blago.png';

import souvenir from './media/present.png';
import stars from './media/stars.png';
import boss from './media/boss.png';

import free from './media/free.png';
import team from './media/team.png';
import food from './media/food.png';
import home from './media/home.png';

import hack_logo from './media/hack_logo2.png';


const Header = () => (
	<div className="black-back main-page-header">
		<img className="sponsor-img" src={oneC} alt="1c"/>
		{/*<img className="sponsor-img" src={oneC} alt="1c"/>*/}
		<img className="sponsor-img" src={lab} alt="vox"/>
		{/*<img className="sponsor-img" src={diht} alt="diht"/>*/}
		<img className="sponsor-img" src={diht} alt="diht"/>
	</div>
);

const LogoPart = ({onClick=f=>f}) => (
	<div className="main-page-logo-part">
		<img className="logo-img" src={hack_logo} alt="hack_logo"/>
		<div className="logo-text">
			Birth Hack
		</div>
		<div className="logo-info-text">
			МФТИ, 14-15 апреля
		</div>
		<button className="register-form-button" onClick={() => onClick()}>
			Регистрация
		</button>
	</div>
);

const AboutPart = ({text, mainPoints}) => (
	<div className="black-back main-page-about">
		<div className="main-page-section-title">
			О хакатоне
		</div>
		<div className="main-page-about-text">
			{text}
		</div>
	</div>
);

const Track = ({title, text}) => (
	<div className="main-page-track-item">
		<div className="main-page-track-item-title">
			{title}
		</div>
		<div className="main-page-track-item-text">
			{text}
		</div>
		<div className="main-page-track-item-prize">
			<img className="prize-img" src={prize} alt="prize"/>
			100 000 ₽
		</div>
	</div>
);

const Tracks = ({tracks}) => (
	<div className="main-page-tracks">
		{/*<div className="main-page-section-title white-text">*/}
			{/*Треки*/}
		{/*</div>*/}
		<div className="main-page-tracks-items">
			{tracks.map((track, i) =>
				<Track key={i} title={track.title} text={track.text}/>
			)}
		</div>
	</div>
);

const Deadline = ({date, text}) => (
	<div className="main-page-deadline-item">
		<div className="main-page-deadline-date">
			{date}
		</div>
		<div className="main-page-deadline-text">
			{text}
		</div>
	</div>
);

const Schedule = ({day, plan}) => (
	<div className="main-page-schedule-item">
		<div className="main-page-deadline-date">
			{day}
		</div>
		{plan.map((item, i) =>
			<div key={i} className="schedule-item">
				<div className="schedule-time">
					{item.time}
				</div>
				<div className="schedule-text">
					{item.text}
				</div>
			</div>
		)}
	</div>
);

const Deadlines = ({deadlines, schedule}) => (
	<div className="main-page-deadlines black-back">
		{/*<div className="main-page-section-title">*/}
			{/*Рассписание*/}
		{/*</div>*/}
		<div className="main-page-deadlines-registration">
			<div className="main-page-deadline-section">
				<Deadline date={deadlines[0].date} text={deadlines[0].text}/>
				<img className="calendar-img" src={calendar} alt="calendar"/>
				<Deadline date={deadlines[1].date} text={deadlines[1].text}/>
			{/*{deadlines.map((deadline, i) =>*/}
				{/*<Deadline key={i} date={deadline.date} text={deadline.text}/>*/}
			{/*)}*/}
			</div>
			<div className="main-page-deadline-section">
			{schedule.map((day, i) =>
				<Schedule key={i} day={day.date} plan={day.plan}/>
			)}
			</div>
		</div>
	</div>
);

const MainPoint = ({title, image}) => (
	<div className="main-page-point-item">
		<div className="main-page-track-point-title">
			{title}
		</div>
		<img className="bonus-img" src={image} alt="bonus"/>
	</div>
);

const MainPoints = ({mainPoints}) => (
	<div className="main-page-tracks">
		<div className="main-page-tracks-items">
			{mainPoints.map((point, i) =>
				<MainPoint key={i} title={point.title} image={point.image}/>
			)}
		</div>
	</div>
);

const Bonus = ({title, image}) => (
	<div className="main-page-track-item">
		<div className="main-page-track-point-title">
			{title}
		</div>
		<img className="bonus-img" src={image} alt="bonus"/>
	</div>
);

const Bonuses = ({bonuses}) => (
	<div className="main-page-tracks">
		<div className="main-page-tracks-items">
			{bonuses.map((bonus, i) =>
				<Bonus key={i} title={bonus.title} image={bonus.image}/>
			)}
		</div>
	</div>
);

const ManCard = ({photo, name, work}) => (
	<div className="jury-card">
		<img className="jury-photo" src={photo} alt="jury"/>
		<div className="jury-description">
			<div className="jury-name">
				{name}
			</div>
			<div className="jury-work">
				{work}
			</div>
		</div>
	</div>
);

const Jury = ({jury}) => (
	<div className="main-page-jury black-back">
		<div className="main-page-section-title">
			Жюри
		</div>
		<div className="main-page-jury-items">
			{jury.map((jur, i) =>
				<ManCard key={i} photo={jur.photo} name={jur.name} work={jur.work}/>
			)}
		</div>
	</div>
);

const Map = () => (
	<div className="main-page-map black-back">
		<div className="main-page-adress-card">
			<img className="location-img" src={loc} alt="location"/>
			<div className="main-page-adress-text">
				Москва, Дмитровское шоссе, 9
			</div>
		</div>
		<div className="main-page-map-component">
			{/*<Iframe url="https://yandex.ru/map-widget/v1/-/CBe2fXd41D"*/}
			        {/*position="absolute"*/}
			        {/*width="100%"*/}
			        {/*id="myId"*/}
			        {/*className="myClassname"*/}
			        {/*height="20%"*/}
			        {/*allowFullScreen/>*/}
			<iframe src="https://yandex.ru/map-widget/v1/-/CBe2fXd41D" width="700" height="500" frameBorder="0"/>
		</div>
	</div>
);

const Footer = () => (
	<div className="main-page-footer">
		<div className="main-page-footer-text">
			©2018 МФТИ ФИВТ. All rights reserved.
		</div>
	</div>
);


export class MainPageUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			aboutText: 'На открытии Хакатона участникам будет сообщены задачи треков Хакатона, далее на протяжении следующих 24 часов команда будет трудиться над созданием наиболее оптимального и оригинального решения. После завершения тура каждая команда лично покажет свое решение и расскажет Жюри о том, почему именно она достойна получить главный приз в данном треке.',
			mainPoints: [
				{
					title: 'Участие бесплатное',
					image: free
				},
				{
					title: '2-4 человека в команде',
					image: team
				},
				{
					title: 'Место, еда и напитки включены',
					image: food
				},
				{
					title: 'Проживание не оплачивается',
					image: home
				}
			],
			tracks: [
				{
					title: 'First track',
					text: 'Coming soon...',
				},
				{
					title: 'Second track',
					text: 'Its boring...',
				},
				{
					title: 'Third track',
					text: 'Its from our amazing sponsors',
				},
				{
					title: 'Forth track',
					text: 'Coming soon too...',
				}
			],
			deadlines: [
				{
					date: 'Уже!',
					text: 'Начало регистрации'
				},
				{
					date: '13 апреля',
					text: 'Окончание региcтрации'
				}
			],
			schedule: [
				{
					date: '14 апреля',
					plan: [
						{
							time: '12:00 — 13:00',
							text: 'Регистрация участников'
						},
						{
							time: '13:00 — 14:00',
							text: 'Открытие'
						},
						{
							time: '14:00',
							text: 'Начало Хакатона'
						},
						{
							time: '16:00 — 17:00',
							text: 'Обед'
						},
						{
							time: '17:00 — 19:00',
							text: 'Выступление с лекцией'
						},
						{
							time: '20:00 — 21:00',
							text: 'Ужин'
						}
					]
				},
				{
					date: '15 апреля',
					plan: [
						{
							time: '01:00 — 01:30',
							text: 'Ночной перекус, Redbull'
						},
						{
							time: '05:00 — 05:30',
							text: 'Ночной перекус, Redbull'
						},
						{
							time: '09:00 — 10:00',
							text: 'Завтрак'
						},
						{
							time: '14:00 — 15:30',
							text: 'Обход команд жюри'
						},
						{
							time: '14:00 — 16:00',
							text: 'Пицца'
						},
						{
							time: '15:30 — 16:00',
							text: 'Голосование жюри, подведение итогов'
						},
						{
							time: '16:00 — 17:00',
							text: 'Закрытие'
						}
					]
				}
			],
			bonuses: [
				{
					title: 'Сувениры',
					image: souvenir,
				},
				{
					title: 'Знакомства с работодателями',
					image: boss,
				},
				{
					title: 'Приятная атмосфера',
					image: stars,
				}
			],
			jury: [
				{
					photo: erlih,
					name: 'Эрлих Иван',
					work: 'Зам. директора ФПМИ по младшим курсам'
				},
				{
					photo: star,
					name: 'Старичков Никита',
					work: 'Зам.зав.кафедрой Корпоративные информационные системы'
				},{
					photo: blago,
					name: 'Благодарный Евгений',
					work: 'Заведующий лаборатории Инноватики'
				}

			]
		}
	};

	render() {
		return (
			<div>
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{this.props.registerActive ? <RegistrationFormFull/> : ""}
				</ReactCSSTransitionGroup>
				<div className="main-page-back">

				</div>
				<div className="main-page-front">
					<Header/>
					<LogoPart onClick={this.props.changeRegisterActive}/>
					<AboutPart text={this.state.aboutText} mainPoints={this.state.mainPoints}/>
					<Tracks tracks={this.state.tracks}/>
					<Deadlines deadlines={this.state.deadlines} schedule={this.state.schedule}/>
					<MainPoints mainPoints={this.state.mainPoints}/>
					<Jury jury={this.state.jury}/>
					<Bonuses bonuses={this.state.bonuses}/>
					<Map/>
					<Footer/>
				</div>
			</div>
		)
	}
}

export const MainPage = connect(
	store => ({
		registerActive: store.registerActive.active
	}),
	dispatch => ({
		changeRegisterActive() {
			dispatch(changeRegisterActive())
		},
	})
)(MainPageUI);
