import React, { Component } from 'react'
import homeImg from "../../static/assets/images/pexels.jpg"
import axios from 'axios';

import '../style/home.scss'

export default class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            token: "",
            status: "NOT_LOGGED_IN",
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push('/cards')
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit(event) {
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        let headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        }
        axios.post("http://localhost:5000/login", data, {
            headers: headers
        }
        ).then(response => {
            if (response.data.status === "LOGGED_IN") {
                this.setState({
                    token: response.data.token,
                    status: response.data.status,
                    email: '',
                    password: ''
                })
                this.handleSuccessfulAuth();
            } else {
                this.setState({
                    errorText: "Incorrect email or password"
                })
                this.handleUnsuccessfulAuth();
            }
        }).catch(error => {
            this.setState({
                errorText: "An error occurred"
            })
        })
        event.preventDefault();
    }


    render() {
        return (
            <div className="homepage-wrapper" style={{ backgroundImage: `url(${homeImg})` }}>
                <div className='title' >
                    <h1>
                        Welcome to Flipnote
                    </h1>
                </div>

                <div className='login-wrapper'>
                    <h2>
                        Please sign in below
                    </h2>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <h3 className='error-text'>{this.state.errorText}</h3>
                        <input className="textarea"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <input className="textarea"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                        <div>
                            <button type="submit" className='button'>Login</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}