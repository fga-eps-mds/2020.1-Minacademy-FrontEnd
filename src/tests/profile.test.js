import { shallow, mountW } from 'enzyme';
import React from 'react';
import Profile from '../views/Profile';
import 'mutationobserver-shim';
import { store } from '../store'

global.MutationObserver = window.MutationObserver;

it('Expect to render Login Component', () => {
  expect(shallow(<Profile store={store}></Profile>).length).toEqual(1)
  expect(shallow(<Profile store={store}></Profile>)).toMatchSnapshot()
})

it('Expect to click button', () => {
    const wrapper = shallow(<Profile store={store} />);
    wrapper.dive('Button').simulate('click')
  })

