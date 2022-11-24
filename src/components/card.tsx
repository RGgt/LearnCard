import React, { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import './card.css';

interface CardViewData {
	AversMarkdown: string;
	ReverseMarkdown: string;
}

function Card(props: CardViewData) {
	const clickableFace = useRef<HTMLInputElement>(null);
	let flipped = false;
	const toggleFlipped = () => {
		const element = clickableFace.current!;
		if (flipped) {
			element.classList.remove('flipped');
			flipped = false;
		} else {
			element.classList.add('flipped');
			flipped = true;
		}
	};
	return (
		<div className="card-typography">
			<div className="flip">
				<div
					className="flip-content"
					onClick={toggleFlipped}
					ref={clickableFace!}
				>
					<div className="flip-front">
						<ReactMarkdown>{props.AversMarkdown}</ReactMarkdown>
					</div>
					<div className="flip-back">
						{' '}
						<ReactMarkdown>{props.ReverseMarkdown}</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
