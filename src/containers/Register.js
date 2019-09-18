import React, {Component} from "react"
import {Form, Button} from "react-bootstrap";
import "./Register.css";
export default class Register extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isLoading: false,
			email: "",
			password: "",
			username: "",
			confirmPassword: "",
			confirmationCode: "",
			newUser: null
		};
	}

	validateForm() {
		return (
			this.state.email.length > 0 && this.state.password.length > 0 && this.state.password === this.state.confirmPassword
		)
	}
	validateConfirmationForm () {
		return this.state.confirmationCode.length > 0;
	}
	handleSubmit = async e => {
		e.preventDefault();
		this.setState({isLoading: true});
		this.setState({newUser: "test"}); // TODO(Levi), something has to change here
		this.setState({isLoading: false});
	}
	handleChange = e => {
		this.setState(
			{
				[e.target.id]: e.target.value
		});
	}
	handleConfirmationSubmit = async e => {
			e.preventDefault();
			this.setState({isLoading: true});
	}
	renderForm() {
		return (
			<Form onSubmit = {this.handleSubmit} >
				{/*<Form.Group controlId="name" bsSize="large">
					<Form.Label> Name </Form.Label>
					<Form.Control
						autoFocus
						type = "text"
						value={this.state.userName}
						onChange={this.handleChange}/>
						</Form.Group> */}
				<Form.Group controlId="email" bsSize="large">
					<Form.Label> Email </Form.Label>
					<Form.Control
						autoFocus
						type = "email"
						value={this.state.email}
						onChange={this.handleChange}/>
					</Form.Group>
					<Form.Group controlId="password" bsSize="large">
						<Form.Label> Password </Form.Label>
						<Form.Control
							value={this.state.password}
							onChange={this.handleChange}
							type="password"
						/>
					</Form.Group>
					<Form.Group controlId="confirmPassword" bsSize="large">
						<Form.Label> Confirm Password </Form.Label>
						<Form.Control
							value={this.state.confirmPassword}
							onChange={this.handleChange}
							type="password"
						/>
					</Form.Group>
					<Button
					variant = "primary"
					type = "submit"
					block
					disabled ={!this.validateForm()}> Register </Button>
				</Form>
		)
	}
	renderConfirmationForm() {
    return (
      <Form onSubmit={this.handleConfirmationSubmit}>
        <Form.Group controlId="confirmationCode" bsSize="large">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <Form.Text>Please check your email for the code.</Form.Text>
        </Form.Group>
        <Button style={{height:40}}
					block
          bsSize="large"
          disabled={!this.validateConfirmationForm()}
          type="submit"
        >Verify</Button>
      </Form>
    );
  }

	render () {
		return (
			 <div className="Signup">
			 {
				 this.state.newUser === null ? this.renderForm() : this.renderConfirmationForm()
			 }
			 </div>
		)
	}
}
