import React from 'react';


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
        this.renderNames = this.renderNames.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.formAction(this.state)
    }
    
    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        };
    };
    
    renderErrors() {

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

    render() {
        return (
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
                <div className="session_form_navlink">{this.props.navLink}</div>
            </div>
        )
    }
};

export default SessionForm;