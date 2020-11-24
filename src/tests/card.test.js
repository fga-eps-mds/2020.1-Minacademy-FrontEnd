import { shallow, mountW } from 'enzyme';
import React from 'react';
import Card from '../components/Card';
import { store } from '../store';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

it('Expect to render Card Component', () => {
  expect(shallow(<Card store={store} />).length).toEqual(1)
})