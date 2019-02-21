import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests'
import Signup from '../signup';
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom';


describe('Signup --- Snapshot',()=>{
  it('Rednders the Signup Component', () => {
      const renderedValue =  renderer.create((<Router><Signup/></Router>)).toJSON()
      expect(renderedValue).toMatchSnapshot();
  });
});

describe("Signup shallow render" , () => {

  let wrapper
  beforeEach(() => {
      wrapper = shallow(<Signup/>);
  })
  
})