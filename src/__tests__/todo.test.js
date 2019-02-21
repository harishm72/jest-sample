import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests'
import Todo from '../todo';
import renderer from 'react-test-renderer'

describe('Todo --- Snapshot',()=>{
    it('Rednders the App Component', () => {
        const renderedValue =  renderer.create(<Todo />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
  });

describe("Todo shallow render" , () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Todo/>);
    })
    
})


// it('renders welcome message', () => {
//   const wrapper = shallow(<App/>);
//   expect(wrapper).toContainReact('BrowserRouter');
// });