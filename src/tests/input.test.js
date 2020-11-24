import { shallow } from 'enzyme';
import React from 'react';
import Input from '../components/FormField/components/Input';
import { store } from '../store';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

it('Expect to render Input Component', () => {
  expect(shallow(<Input />).length).toEqual(1)
})