import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import httpHandler from '../services/httpHandler';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    login = () => {
        httpHandler.authLogin(this.state.email, this.state.password)
        this.props.history.push('/dashboard')
        return 
    }
    render(){
        return (
            <form className="form-signin">
                <label htmlFor="inputEmail">Email</label>
                <input
                  name="email"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  value={this.state.email}
                  className="form-control"
                  placeholder="Email"
                  required
                /> <br/>
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    name="password"
                    onChange={e => {
                      this.handleChange(e);
                    }}
                    value={this.state.password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="submit"
                    onClick={e => {
                      this.login(e);
                    }}
                    className="login btn btn-lg btn-primary btn-block"
                  >
                    Login
                  </button>
            </form>
        )
    }
}

export default withRouter(Login)