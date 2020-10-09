import { shallow } from 'enzyme';
import React from 'react';
import Button from '../components/Button';

it('Expect to render Button component', () => {
  expect(shallow(<Button />).length).toEqual(1)
})