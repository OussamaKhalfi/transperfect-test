import { useState } from 'react';

const MAX_VALUE = 100;
const _randomNumber = Math.round(Math.random() * MAX_VALUE);

export default function NumberGame() {
	const [guess, setGuess] = useState(null);
	const [result, setResult] = useState('Try to guess the number');
	const [inputWidth, setInputWidth] = useState('100%');

	const handleChange = (e) => {
		const value = Number(e.target.value);

		if (value > MAX_VALUE) return;

		setGuess(Number(e.target.value));
	};

	const handleSubmit = (e) => {
		// prevent page from reloading after form submition since it's the default behavior of forms
		e.preventDefault();

		if (guess === _randomNumber) {
			setResult('You win!');
		} else {
			const difference = guess > _randomNumber ? 'high' : 'low';
			setResult(`Try again! The guess was too ${difference}`);
		}
	};

	const shrinkInput = () => {
		console.log('shrinkInput');
		if (guess === null) return;

		setInputWidth(50);
	};

	const expandInput = () => {
		console.log('expandInput');
		setInputWidth('100%');
	};

	return (
		// using form tag to submit with the "Enter" key
		<form onSubmit={handleSubmit}>
			<div className='number-game'>
				<div>
					<h1>{_randomNumber}</h1>
					<input
						className='number-input'
						type='number'
						value={guess}
						onChange={handleChange}
						style={{ width: inputWidth }}
					/>
					<br />
					<button
						className='guess-button'
						type='submit'
						onMouseOver={shrinkInput}
						onMouseOut={expandInput}
					>
						Guess
					</button>
					<h1>{result}</h1>
				</div>
			</div>
		</form>
	);
}

function randomNumbers() {
	return;
}
