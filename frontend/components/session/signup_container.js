import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        title: 'Create your free account',
        errors: errors.session,
        formType: 'Sign Up'
    };
};

const mapDispatchToProps = dispatch => ({
    formAction: (formUser) => (dispatch(signup(formUser)))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);