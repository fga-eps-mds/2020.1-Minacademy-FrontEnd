import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import React from 'react';
import Change from '../views/Change';
import 'mutationobserver-shim';
import { store } from '../store'


it('Expect to render Change view', () => {
  expect(
    shallow(
      <MemoryRouter>
        <Change />
      </MemoryRouter>
    ).length
  ).toEqual(1)
})

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 590
  })
}));

global.MutationObserver = window.MutationObserver;

it('Expect to render Change Component', () => {
  expect(shallow(<Change store={store} />).length).toEqual(1)
})