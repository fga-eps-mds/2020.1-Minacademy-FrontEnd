import { shallow } from 'enzyme';
import React from 'react';
import Register from '../views/Register';
import 'mutationobserver-shim';
import { store } from '../store'

global.MutationObserver = window.MutationObserver;

it('Expect to render Register Component', () => {
  expect(shallow(<Register store={store} />).length).toEqual(1)
})

it('Expect to click password input', () => {
  const wrapper = shallow(<Register store={store}/>);
  expect(wrapper.dive('#register_first_name').length).toBe(1);
  expect(wrapper.dive('#register_last_name').length).toBe(1);
  const passwordInput = wrapper.dive('#register_password');
  passwordInput.value = '123Gh%asd673';
})
