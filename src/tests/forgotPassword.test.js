import { shallow } from 'enzyme';
import React from 'react';
import 'mutationobserver-shim';
import ForgotPassword from '../views/ForgotPassword';

global.MutationObserver = window.MutationObserver;

it('Expect to render Dropdown component', () => {
  expect(shallow(<ForgotPassword />).length).toEqual(1)
})