import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../components/Footer';

it('Expect to render Dropdown component', () => {
  expect(shallow(<Footer />).length).toEqual(1);
});
