import { shallow } from 'enzyme';
import React from 'react';
import 'mutationobserver-shim';
import ForgotPassword from '../views/ForgotPassword';
import { store } from '../store';


global.MutationObserver = window.MutationObserver;

it('Expect to render ForgotPassword view', () => {
  expect(shallow(<ForgotPassword/>).length).toEqual(1)
})