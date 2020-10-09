import { shallow, mountW } from 'enzyme';
import React from 'react';
import Profile from '../views/Profile';
import { store } from '../store';
import 'mutationobserver-shim';


global.MutationObserver = window.MutationObserver;

it('Expect to render Profile Component', () => {
  expect(shallow(<Profile  store={store} />).length).toEqual(1)
})