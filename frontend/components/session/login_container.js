import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => {
    return {
        title: `Log in and let's get going`,
        errors: errors.session,
        formType: 'Log In',
        navLink: <span>Don't have an account? <Link className="Session_form_link" to='/signup'>Sign Up</Link></span>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        formAction: (formUser) => (dispatch(login(formUser)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)