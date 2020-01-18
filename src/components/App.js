import React, {Component} from 'react';
import Header from "./Header";
import Card from './Card';
import cardsApi from '../service/cardsApi';
export default class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			isLoading: true,
			cards:[],
			selectedCardIndex: 0,
		};

		this.handleNextCard = this.handleNextCard.bind(this);
	}

	componentDidMount(){
		cardsApi.getCards().then((cards) =>{
			this.setState({
				isLoading: false,
				cards: [...cards]
			})
		});
	}


	handleNextCard(){
		const max = this.state.cards.length - 1;
		const index = Math.floor(Math.random() * (max));
		this.addAnimationEffect(index);
	}


	addAnimationEffect(index){
		setTimeout(() => {
				this.setState({
					selectedCardIndex: index
				});
			}, 1000);
	
	};

	render(){
		return (
			<div className = "main-app">
				<Header title="FlashCard Application"/>
				<div className="main-container">
					{this.state.isLoading ? this.renderLoading() : this.renderCard()}
				</div>
			</div>
		)
	}

	renderCard() {
		const card = this.state.cards[this.state.selectedCardIndex];
		return (
			<React.Fragment>
				<Card card ={card}/>
			<button className = "nextBtn" onClick={this.handleNextCard}> Next>> </button>
			
				
			</React.Fragment>
			
		)
	}

	renderLoading() {
		return (
			<h4 className="loading">Loading...</h4>
		);
	}
};