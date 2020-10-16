import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../../slices/usersSlice';
import { useLocation } from 'react-router-dom'

export const PublicRoute = ({ currentUser, component: Component, ...rest }) => {
    const location = useLocation();
    return (
        <Route {...rest} component={(props) => (
            currentUser ? (
            location.pathname == '/login' ? <Redirect to="/dashboard" /> : <Redirect to="/bem-vindo"/>
            ) : (
                <Component {...props} />
            )
        )} />
    )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})


export default connect(mapStateToProps)(PublicRoute);