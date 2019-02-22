import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests'
import Signin from '../signin';
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Signin --- Snapshot', () => {
  it('Rednders the Signin Component', () => {
    const renderedValue = renderer.create(<Router><Signin /></Router>).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});

describe("Signin shallow render", () => {

  let wrapper
  beforeEach(() => {
    wrapper = mount(<Router><Signin /></Router>);
  })

  it('render the signin form', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('<form> element should have an <img> element with logo', () => {
    expect(wrapper.find('form').childAt(0).type()).toBe('img');
  });

  it('<form> element should have an <h1> element with text Please sign in', () => {

    let formHeading = wrapper.find('form').childAt(1)

    expect(formHeading.type()).toBe('h1');
    expect(formHeading.text()).toBe('Please sign in')
  });

  it('<form> element should have an <label> for Email address', () => {
    let emailLabel = wrapper.find('form').childAt(2)

    expect(emailLabel.type()).toBe('label');
    expect(emailLabel.text()).toBe('Email address');
  });

  it('<form> element should have an <input> for email', () => {
    let emailInput = wrapper.find('form').childAt(3);
   
    expect(emailInput.type()).toBe('input');
    expect(wrapper.find('#inputEmail').length).toBe(1);
    expect(emailInput.text()).toBe('')

    emailInput.simulate("change", { target: { name : "email", value: "hello" } })
    expect(wrapper.find('form').childAt(3).props().value).toBe("hello")

    emailInput.simulate("change", { target: {  name : "email", value: "abc@email.com" } })
    expect(wrapper.find('form').childAt(3).props().value).toBe("abc@email.com")
  });

  it('<form> element should have an <label> for password', () => {
    let passwordLabel = wrapper.find('form').childAt(4)

    expect(passwordLabel.type()).toBe('label');
    expect(passwordLabel.text()).toBe('Password');
  });

  it('<form> element should have an <input> for password', () => {
    let passwordInput = wrapper.find('form').childAt(5)
    
    expect(passwordInput.type()).toBe('input');
    expect(wrapper.find('#inputPassword').length).toBe(1);
    expect(passwordInput.text()).toBe('')

    passwordInput.simulate("change", { target: { name : "password", value: "secret" } })
    expect(wrapper.find('form').childAt(5).props().value).toBe("secret")

    passwordInput.simulate("change", { target: { name : "password", value: "mypassword" } })
    expect(wrapper.find('form').childAt(5).props().value).toBe("mypassword")

  });

  it('<form> element should have a remember me checkbox', () => {
    let checkboxLabel = wrapper.find('form').childAt(6).childAt(0)

    expect(checkboxLabel.type()).toBe('label')
    expect(checkboxLabel.text()).toBe('Remember me')

    let checkbox = checkboxLabel.childAt(0)

    expect(checkbox.type()).toBe('input')

    expect(checkbox.get(0).props.type).toBe('checkbox')
  })

  it('submit email and password and click submit', () => {
    let submitButton = wrapper.find('form').childAt(7)
    const fakeEvent = { preventDefault: () => null };

    expect(submitButton.type()).toBe('button')

    expect(submitButton.text()).toBe("Sign in")
    
    expect(submitButton.props().type).toBe("submit")
    
    // console.log(submitButton.props())
    // console.log(wrapper.find('form').childAt(7).type())
    wrapper.find('form').childAt(3).simulate("change", { target: { name : "email", value: "hello@mail.com" } })
    expect(wrapper.find('form').childAt(3).props().value).toBe("hello@mail.com")

    wrapper.find('form').childAt(5).simulate("change", { target: { name : "password", value: "mypassword" } })
    expect(wrapper.find('form').childAt(5).props().value).toBe("mypassword")

    submitButton.simulate('submit', fakeEvent);
    expect(submitButton).toBe("");
});
});

