import { shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Exam from '../views/Exam';
import ExamQuestion from '../views/Exam/components/ExamQuestion';
import ActivitiesList from '../views/Tutorial/components/ActivitiesList';
import { store } from "../store";

it('Expect to render Tutorial component', () => {
  expect(
    shallow(
      <MemoryRouter>
        <Exam store={store} />
      </MemoryRouter>
    ).length).toEqual(1)
})

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 590
  })
}));

it('Expect to render Activity Component', () => {
  expect(shallow(<ExamQuestion store={store} />).length).toEqual(1)
})

it('Expect to render ActivitiesList Component', () => {
  expect(shallow(<ActivitiesList  store={store} />).length).toEqual(1)
})