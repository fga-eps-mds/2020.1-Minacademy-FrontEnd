import { shallow } from 'enzyme';
import React from 'react';
import ChangeEmailConfirm from '../views/ChangeEmailConfirm';
import { store } from '../store';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 590
  })
}));

it('Expect to render ChangeEmailCOnfirm view', () => {
  expect(shallow(<ChangeEmailConfirm store = {store} />).length).toEqual(1)
})