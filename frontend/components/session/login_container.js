import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { clearErrors } from '../../actions/session_actions';


const mapStateToProps = ({ errors }) => {
    return {
        title: `Log in and let's get going`,
        errors: errors.session,
        formType: 'Log In'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        formAction: (formUser) => (dispatch(login(formUser))),
        login: (demoUser) => (dispatch(login(demoUser))),
        clearErrors: () => (dispatch(clearErrors()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)