import { shallow } from 'enzyme';
import React from 'react';
import Select from '../components/FormField/components/Select';
import { store } from '../store';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

it('Expect to render Input Component', () => {
  expect(shallow(<Select />).length).toEqual(1)
})