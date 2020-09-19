import { shallow } from 'enzyme';
import React from 'react';
import Tutorial from '../views/Tutorial';

it('Expect to render Tutorial component', () => {
  expect(shallow(<Tutorial></Tutorial>).length).toEqual(1)
  expect(shallow(<Tutorial></Tutorial>)).toMatchSnapshot()
})