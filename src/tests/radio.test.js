import { shallow } from 'enzyme';
import React from 'react';
import Radio from '../components/FormField/components/Radio';
import { store } from '../store';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

it('Expect to render Radio Component', () => {
  expect(shallow(<Radio store={store} />).length).toEqual(1)
})