import { shallow } from 'enzyme';
import React from 'react';
import EmailNotice from '../views/EmailNotice';
import { store } from '../store';

it('Expect to render EmailNotice view', () => {
  expect(shallow(<EmailNotice />).length).toEqual(1)
})