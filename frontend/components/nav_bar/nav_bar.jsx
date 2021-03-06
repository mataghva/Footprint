import React from 'react';
import { Link } from 'react-router-dom';



class NavBar extends React.Component {
    constructor (props) {
        super(props)

        this.rightMenu = this.rightMenu.bind(this);
        
    }

    rightMenu() {
        const { currentUser, logout } = this.props;
        return (
            currentUser ? (
                <div>
                    <div className='welcome_nav' >Welcome {currentUser.firstName}</div>
                    <button className='logout_btn' onClick={logout}>Log Out</button>
                    <img  className="user_photo" src="/assets/user.png" alt="Profile picture"></img>
                </div>
            ) : (
                <div className="session_btns">
                    <Link className='signup_btn' to="/signup">Sign Up</Link>
                    <Link className='login_btn' to="/login">Log In</Link>
                </div>
            )
        );
    };
    

    render() {

        return (
            <div className="nav_bar">
                    <this.rightMenu/>
                    <Link className="logo_name" to="/">
                        <img className="logo-icon" src="/assets/simple-footprint-icon-by-Vexels.png" height="40" alt="logo" />FootPrint</Link>
            </div>
        )
    }

};

export default NavBar;