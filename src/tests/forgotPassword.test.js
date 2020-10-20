import React from 'react'
import ForgotPassword from '../views/ForgotPassword'
import {shallow} from 'enzyme'
import { store } from '../store'

it('Expect to render ForgotPassword Component', () => {
    expect(shallow(<ForgotPassword store={store} />).length).toEqual(1)
  })