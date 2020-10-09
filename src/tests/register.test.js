import { shallow } from 'enzyme';
import React from 'react';
import Register from '../views/Register';
import 'mutationobserver-shim';
import { store } from '../store'

global.MutationObserver = window.MutationObserver;

it('Expect to render Register Component', () => {
  expect(shallow(<Register store={store} />).length).toEqual(1)
})