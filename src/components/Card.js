import React from 'react';
export default (props) => {
	console.log("propspropspropspropspropspropspropsprops",props)
	return (
		<div className="flip-card" key={props.card.id}>
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<h1 className="ques">{props.card.question}</h1>
				</div>
				<div className="flip-card-back">
					<h1 className="ans">{props.card.answer}</h1>
				</div>
			</div>
		</div>
	)
};