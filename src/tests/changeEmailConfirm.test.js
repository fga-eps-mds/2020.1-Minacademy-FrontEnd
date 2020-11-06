import { shallow } from 'enzyme';
import React from 'react';
import ChangeEmailConfirm from '../views/ChangeEmailConfirm';
import { store } from '../store';

it('Expect to render ChangeEmailCOnfirm view', () => {
  expect(shallow(<ChangeEmailConfirm />).length).toEqual(1)
})