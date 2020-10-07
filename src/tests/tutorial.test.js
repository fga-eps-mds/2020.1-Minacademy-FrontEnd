import { shallow, render } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Tutorial from '../views/Tutorial';
import { store } from '../store';

it('Expect to render Tutorial component', () => {
  expect(
    shallow(
      <MemoryRouter>
        <Tutorial />
      </MemoryRouter>,
    ).length,
  ).toEqual(1);
});
