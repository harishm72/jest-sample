import React from 'react';
import {shallow} from 'enzyme';
import '../setupTests'
import Dashboard from '../dashboard';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Dashboard --- Snapshot',()=>{
  it('Rednders the Dashboard Component', () => {
      const renderedValue =  renderer.create(<Router><Dashboard/></Router>).toJSON()
      expect(renderedValue).toMatchSnapshot();
  });
});

describe("Dashboard shallow render" , () => {

  let wrapper
  beforeEach(() => {
      wrapper = shallow(<Dashboard/>);
  })
})
