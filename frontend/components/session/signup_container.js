import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
    return {
        title: 'Create your free account',
        errors: errors.session,
        formType: 'Sign Up'
    };
};

const mapDispatchToProps = dispatch => ({
    formAction: (formUser) => (dispatch(signup(formUser))),
    login: (demoUser) => (dispatch(login(demoUser))),
    clearErrors: () => dispatch(clearErrors())
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);