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

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it('Expect to render ChangeEmailConfirm view', () => {
  expect(shallow(<ChangeEmailConfirm store = {store} />).length).toEqual(1)
})