import { connect } from 'react-redux';
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: element, isAuthenticated, ...rest }) => (
    <Route {...rest} render={props => isAuthenticated ? <element {...props} /> : <Navigate to='/login' />}/>
);

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(PrivateRoute);