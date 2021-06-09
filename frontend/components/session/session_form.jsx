import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
            
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderNames = this.renderNames.bind(this);
        this.renderBottomLinks = this.renderBottomLinks.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    
    handleSubmit (e) {
        e.preventDefault();
        this.props.formAction(this.state);
      
    }
    
    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        };
    };
    
    handleDemo(e) {
        e.preventDefault();
        this.props.login({
            email: "demo@footprint.com",
            password: "guestuser"
        });
    };

    componentWillUnmount() {
        this.props.clearErrors()
    }
    

    renderNames() {
        switch (this.props.formType) {
            case "Sign Up":
            return (
                <div>
                    <label className="session_form_label">First Name
                        <input id="name"
                            className="session_form_input"
                            type="text" 
                            value={this.state.firstName}
                            placeholder="First Name"
                            required
                            onChange={this.handleInput('firstName')}/>
                    </label>
                    <label className="session_form_label">Last Name
                        <input 
                            className="session_form_input"
                            type="text" 
                            value={this.state.lastName}
                            placeholder="Last Name"
                            required
                            onChange={this.handleInput('lastName')}/>
                    </label>
                </div>
            )
            case "Log In":
                return <div></div>;
        }
    }

    renderBottomLinks() {
        switch (this.props.formType) {
            case "Sign Up":
                return (
                    <div className="session_form_navlink">
                        <span className="session_form_link_text">Already have an account?</span>
                        <Link className="session_form_link" to='/login'> Log In</Link>
                    </div>
                );
            case "Log In":
                return (
                    <div className="session_form_navlink">
                        <span className="session_form_link_text">Don't have an account?    </span>
                        <Link className="session_form_link" to='/signup'>Sign up for free</Link>
                    </div>
                );
        };
    };

    render() {
        return (
            <div>
                <img className="session_image" src="/assets/home_image3.jpg" alt="Trail" />
                <div className="session_container">
                    <div className="session_form_title">{this.props.title}</div>
                    <form onSubmit={this.handleSubmit} className="session_form">
                        <this.renderNames/>
                        <label className="session_form_label">Email
                            <input 
                                className="session_form_input"
                                type="email" 
                                value={this.state.email}
                                placeholder="Email"
                                autoComplete="username"
                                required
                                onChange={this.handleInput('email')}/>
                        </label>
                        <label className="session_form_label">Password
                            <input 
                                className="session_form_input"
                                type="password" 
                                value={this.state.password}
                                placeholder="Password"
                                autoComplete="current-password"
                                minLength="6"
                                required
                                onChange={this.handleInput('password')}/>
                        </label>
                        <div className="session_form_error">{this.props.errors}</div>
                        <input type="submit" value={this.props.formType}
                                className="session_form_submit"/>
                    </form>
                    <this.renderBottomLinks/>
                    <div className="session_form_navlink">
                        <span>Explore website as a guest user:  </span>
                        <button className='demo_btn' onClick={this.handleDemo}>Demo</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default SessionForm;