import { shallow, mountW } from 'enzyme';
import React from 'react';
import Welcome from '../views/Welcome';
import { store } from '../store';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

it('Expect to render Welcome Component', () => {
  expect(shallow(<Welcome  store={store} />).length).toEqual(1)
})