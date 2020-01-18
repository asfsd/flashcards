import React from 'react';
import { shallow, mount  } from 'enzyme';
import Card from './Card';
describe('Card Component Test Suite', () => {
    let props;
    let wrapper;
  
    beforeEach(() => {
      props = {
       card :{
           id:"someid",
           question:"someQuestion",
           answer:"someAnswer"
       }
      };
      wrapper = shallow(<Card {...props} />);
    });
  
    it('renders without crashing', () => {
      expect(wrapper).toBeDefined();
    });

    it('renders find question value', () => {
        expect(wrapper.find('.ques').props
        ('children').children).toBe("someQuestion");
      });
      it('renders find question value', () => {
        expect(wrapper.find('.ans').props
        ('children').children).toBe("someAnswer");
      });
   
   
}); 