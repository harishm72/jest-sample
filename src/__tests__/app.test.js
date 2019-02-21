import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import '../setupTests'
import renderer from 'react-test-renderer'

describe('App --- Snapshot',()=>{
  it('Rednders the App Component', () => {
      const renderedValue =  renderer.create(<App />).toJSON()
      expect(renderedValue).toMatchSnapshot();
  });
});

describe("App shallow render" , () => {

  let wrapper
  beforeEach(() => {
      wrapper = shallow(<App/>);
  })
  
})

// it('renders welcome message', () => {
//   const wrapper = shallow(<App/>);
//   expect(wrapper).toContainReact('BrowserRouter');
// });