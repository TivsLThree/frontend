import React, {Component} from "react"
import {Button, Form} from "react-bootstrap"
import "./Login.css"
import {LinkContainer} from "react-router-bootstrap"
import {Redirect} from 'react-router'
export default class Login extends Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			email: "",
			password: "",
			redirect:false
		};
	}
	validateForm()
	{
		return (this.state.email.length > 0) && (this.state.password.length > 0);
	}
	handleChange = event => {
		console.log(event)
		this.setState({
			[event.target.id]: event.target.value
		});
	}
	handleSubmit = event => {
		//	event.preventDefault();
		//TODO(Levi): DATABASE CALLS to log in
		this.props.hasAuthenticated(true);
		if(true)
		{
			this.setState({redirect:true})
		}
	}
	render() {
		if(this.state.redirect)
			return (
				<Redirect push to="/contacts"/>
			)
		return (
			<div className="Login">
				<Form onSubmit={this.handleSumbit}>
					<Form.Group controlId = "email" bize ="large">
						<Form.Label>Email</Form.Label>

						<Form.Control
							autoFocus
							type = "email"
							value = {this.state.email}
							onChange = {this.handleChange}
						/>
					</Form.Group>
					<Form.Group controlId = "password" bssize = "large">
						<Form.Label>Password</Form.Label>
						<Form.Control
							value = {this.state.password}
							onChange = {this.handleChange}
							type = "password"
						/>
					</Form.Group>
						<Button
						block
						bssize = "large"
						disabled = {!this.validateForm()}
						type = "submit"
						onClick ={this.handleSubmit}
					>
					Login
					</Button>
				</Form>
			</div>
		);
	}
}
