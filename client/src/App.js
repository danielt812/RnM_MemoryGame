import React, { useState } from 'react';
import './App.css';
import NavBar from './components/Nav/Nav';
import JumboTron from './components/JumboTron/JumboTron';
import Card from './components/Card/Card';
import Wrapper from './components/Wrapper';
import Main from './components/Main';
import characters from './characters.json';

const shuffleCharacters = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const App = () => {
	// Set initial state
	const [text, setText] = useState('Click Here To Start');
	const [start, setStart] = useState(false);
	const [score, setScore] = useState(0);
	const [topScore, setTopScore] = useState(0);
	const [previousScore, setPreviousScore] = useState(null);
	const [displayPreviousScore, setDisplayPreviousScore] = useState(false);
	const [displayRules, setDisplayRules] = useState(true);
	const [rightWrong, setRightWrong] = useState('');
	const [clicked, setClicked] = useState([]);
	const [cards, setCards] = useState(characters);

	// Click function from Card component
	const handleClick = (id) => {
		// If this Card does not exist in clicked array (clicked)...
		if (clicked.indexOf(id) === -1) {
			// Run handleIncrement function
			handleIncrement();
			// Change state to push id into clicked array
			setClicked(clicked.concat(id));
		} else {
			handleReset();
		}
	};

	const handleStart = () => {
		setStart(true);
		setDisplayRules(true);
	};

	// This function will handle correct guesses
	const handleIncrement = () => {
		const updatedScore = score + 1;
		// Update State to show score and mark if card is right or wrong.
		setScore(updatedScore);
		setRightWrong('You Guessed Correct!');
		handleShuffle();
		// If score is greater than high score. Update state for top score.
		if (updatedScore >= topScore) {
			setTopScore(updatedScore);
		}
		if (updatedScore === characters.length) {
			setRightWrong('You Win!');
		}
	};

	// This function will handle incorrect guesses
	const handleReset = () => {
		// Set all state values except for top score back to original values
		setText('Try Again?');
		setStart(false);
		setScore(0);
		setPreviousScore(score);
		setDisplayPreviousScore(true);
		setTopScore(topScore);
		setRightWrong('You Guessed Wrong!');
		setClicked([]);

		handleShuffle();
	};

	const handleShuffle = () => {
		let shuffledCards = shuffleCharacters(cards);
		setCards(shuffledCards);
	};

	return (
		<React.StrictMode>
			<Main background={start ? null : 'init'}>
				<NavBar rightWrong={rightWrong} score={score} topScore={topScore} />
				{!start ? (
					<JumboTron
						handleClick={handleStart}
						text={text}
						displayRules={displayRules ? 'show' : 'hide'}
						displayPreviousScore={displayPreviousScore ? 'show' : 'hide'}
						previousScore={previousScore}
					/>
				) : (
					<Wrapper background={start ? 'active' : null}>
						{characters.map((character) => (
							<Card
								key={character.id}
								id={character.id}
								name={character.name}
								image={character.image}
								handleClick={handleClick}
								handleIncrement={handleIncrement}
								handleReset={handleReset}
								handleShuffle={handleShuffle}
							/>
						))}
					</Wrapper>
				)}
			</Main>
		</React.StrictMode>
	);
};

export default App;
