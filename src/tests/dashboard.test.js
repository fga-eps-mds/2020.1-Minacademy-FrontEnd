import { shallow, mountW } from 'enzyme';
import React from 'react';
import Dashboard from '../views/Dashboard';
import { store } from '../store';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

it('Expect to render Dashboard Component', () => {
  expect(shallow(<Dashboard store={store} />).length).toEqual(1)
})