import { shallow, mountW } from 'enzyme';
import React from 'react';
import Mentorship from '../views/Mentorship';
import Learner from '../views/Mentorship/components/Learner'; 
import Mentor from '../views/Mentorship/components/Mentor'; 
import { store } from '../store';
import 'mutationobserver-shim';


global.MutationObserver = window.MutationObserver;

it('Expect to render Mentorship Component', () => {
  expect(shallow(<Mentorship  store={store} />).length).toEqual(1)
})

it('Expect to render Learner Component', () => {
  expect(shallow(<Learner store={store} />).length).toEqual(1)
})

it('Expect to render Mentor Component', () => {
  expect(shallow(<Mentor store={store} />).length).toEqual(1)
})