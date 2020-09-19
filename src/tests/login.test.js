import { shallow } from 'enzyme';
import React from 'react';
import Login from '../views/Login';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

it('Expect to render Login Component', () => {
  expect(shallow(<Login></Login>).length).toEqual(1)
  expect(shallow(<Login></Login>)).toMatchSnapshot()
})

it('Expect to click button', () => {
  const wrapper = shallow(<Login />);
  wrapper.find('Button').simulate('click')
})