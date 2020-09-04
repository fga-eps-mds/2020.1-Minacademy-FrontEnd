import React from 'react';
import PropTypes from 'prop-types';
import HookComponent from './components/HookComponent';
import ReduxComponent from './components/ReduxComponent';
import './style.css';

const Home = ({ hooks }) => hooks ? <HookComponent/> : <ReduxComponent/>;

Home.propTypes = {
  hooks: PropTypes.bool
};

Home.defaultProps = {
  hooks: false
}

export default Home;
