import { shallow, mountW } from 'enzyme';
import React from 'react';
import Profile from '../views/Profile';
import { store } from '../store';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

it('Expect to render Profile Component', () => {
  expect(shallow(<Profile store={store} />).length).toEqual(1);
});

it('Expect to click button', () => {
  const wrapper = shallow(<Profile store={store} />);
  wrapper.dive('Button').simulate('click');
});

it('Expect to click button', () => {
  const wrapper = shallow(<Profile store={store} />);
  wrapper.dive('form').simulate('submit', { preventDefault: jest.fn() });
});
