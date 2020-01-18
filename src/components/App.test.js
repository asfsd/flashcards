import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe("testing of app component",()=>{

it('renders without crashing', () => {
  shallow(<App />);
});
it('find main component', ()=>{
   const component = shallow(<App />).find('.main-app');
   expect(component.exists()).toBeTruthy();
  });

it('find header component', ()=>{
    const component = shallow(<App />);
    expect(component.state()).toEqual({
      isLoading: true,
			cards:[],
			selectedCardIndex: 0
    });
});

it('when cards value is changes component', ()=>{
  const component = shallow(<App />);
  component.setState({isLoading :false,cards :[{ id: 1, question :"somequestion",answer:"someanswer"},
  { id: 2, question :"somequestion2",answer:"someanswer2"}]})
  expect(component.find('button').length).toBe(1);
  expect(component.state().cards.length).toBe(2);
});

  
});
