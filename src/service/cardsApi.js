import {cards} from './cards.json';

export default class cardsApi {


	static getCards(){
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(cards)
			}, 1000);
		});
	}
}