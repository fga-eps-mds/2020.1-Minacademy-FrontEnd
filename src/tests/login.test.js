import { shallow } from 'enzyme';
import React from 'react';
import Login from '../views/Login';
import 'mutationobserver-shim';
import { store } from '../store'

global.MutationObserver = window.MutationObserver;

it('Expect to render Login Component', () => {
  expect(shallow(<Login store={store} />).length).toEqual(1)
})

it('Expect to click button', () => {
  const wrapper = shallow(<Login store={store} />);
  wrapper.dive('Button').simulate('click')
})