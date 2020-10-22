import { shallow, render } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Tutorial from '../views/Tutorial';
import Activity from '../views/Tutorial/components/Activity'; 
import ActivitiesList from '../views/Tutorial/components/ActivitiesList';
import { store } from "../store";

it('Expect to render Tutorial component', () => {
  expect(
    shallow(
      <MemoryRouter>
        <Tutorial />
      </MemoryRouter>
    ).length).toEqual(1)
})

it('Expect to render Activity Component', () => {
  expect(shallow(<Activity  store={store} />).length).toEqual(1)
})

it('Expect to render ActivitiesList Component', () => {
  expect(shallow(<ActivitiesList  store={store} />).length).toEqual(1)
})