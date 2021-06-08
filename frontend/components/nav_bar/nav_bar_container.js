import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) => {
    let currentUserId = state.session.currentUserId;
    if (currentUserId) {
        return { currentUser: state.entities.users[currentUserId]}
    } else { 
        return {currentUser: undefined}
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => (dispatch(logout()))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);