import { shallow } from 'enzyme';
import React from 'react';
import Profile from '../views/Profile';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

it('Expect to render Login Component', () => {
  expect(shallow(<Profile></Profile>).length).toEqual(1)
  expect(shallow(<Profile></Profile>)).toMatchSnapshot()
})

it('Expect to click button', () => {
    const wrapper = shallow(<Profile />);
    wrapper.find('Button').simulate('click')
  })