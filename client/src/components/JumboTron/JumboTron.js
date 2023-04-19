import React from 'react';
import './JumboTron.scss';

const JumboTron = (props) => (
	<div className='jumbotron jumbotron-fluid'>
		<div className='container'>
			<h1 className='display-4'>Rick and Morty Memory Game</h1>
			<h2 className={`lead ${props.displayRules}`}>
				Click on a character to earn points, but don't click on the same
				character more than once!
			</h2>
			<p className={`lead ${props.displayPreviousScore}`}>
				You guessed {props.previousScore} correct!
			</p>
			<h2 className='startButton lead' onClick={() => props.handleClick()}>
				{props.text}
			</h2>
		</div>
	</div>
);

export default JumboTron;
