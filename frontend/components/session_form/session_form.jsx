import React from "react";
import { withRouter } from 'react-router-dom';



class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);

    }


    renderErrors() {
        return(
            <ul className="render-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    handleDemoLogin(e) {
        e.preventDefault();
        const user = {username: "DemoUser", password: "DemoPass"}
        this.props.processForm(user).then(this.props.closeModal);
    }

    render() {
        return (
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    <h2 className="login-signup-header">Welcome to Table Prête!</h2>
                    <br/>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className='login-form'>
                        <br/>
                        <label>
                            <input type='text'
                                value={this.state.username}
                                onChange={this.update('username')}
                                className='login-input'
                                placeholder="Username"
                            />
                        </label>
                        <br/>
                        <label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className='login-input'
                                placeholder="Password"
                            />
                        </label>
                        <input className="session-submit" type='submit' onKeyPress={this.onKeyPress} value={this.props.formType} />
                        <br/>
                        {this.props.otherForm}
                        <br/>
                        <button className="demo-user-login" onClick={this.handleDemoLogin}>Login as DemoUser</button>
                    </div>
                </form>
            </div>
        );
    };
};

export default withRouter(SessionForm);