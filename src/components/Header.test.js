import React from 'react';
import { shallow, mount  } from 'enzyme';
import Header from './Header';
describe('Header Component Test Suite', () => {
    let props;
    let wrapper;
  
    beforeEach(() => {
      props = {
       title :"some title"
      };
      wrapper = shallow(<Header {...props} />);
    });
  
    it('renders without crashing', () => {
      expect(wrapper).toBeDefined();
    });

    it('renders header', () => {
        expect(wrapper.find('header').exists()).toBeTruthy();
      });
      it('renders title prop', () => {
        expect(wrapper.find('h1').props('title')).toBe("some title");
      });
    
   
   
}); 