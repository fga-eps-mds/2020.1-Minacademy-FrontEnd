import Loader from '../components/Loader';
import React from 'react'
import ReactDOM from 'react-dom'

describe('Loader Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Loader/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})