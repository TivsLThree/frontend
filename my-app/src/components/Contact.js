import React, {Component} from "react"
import Dropdown from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form"
import "bootstrap/dist/js/bootstrap.bundle"


// Contact name, [Picture]
// Phone number. Email address
// [date added]
class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			contacts: [{key:1, name: "Levi Huchingson", phone:"123123123", email:"test@test.test"}, {key:1, name: "Levi Huchingson", phone:"123123123", email:"test@test.test"}, {key:1, name: "Levi Huchingson", phone:"123123123", email:"test@test.test"}]
		}
	}
	handleFilterTextInput() {

	}
	render ()
	{
		return (
			<div>
				<SearchBar
					test = "test!"/>
				<NewContact/>
				<ContactTable
					contacts = {this.state.contacts}
					filterText = {this.state.filterText}/>
			</div>
		);
	}
}
class ContactRow extends Component {
	onDelete() {
		console.log("Delete clicked!");
	}
	onModify() {
		console.log("Modify clicked!");
	}
	onFavorite() {
		console.log("Favorite clicked!");
	}
	render() {
		return (
			<tr>
				<td>
					{this.props.contact.name} </td>
				<td>
					{this.props.contact.phone} </td>
					{/*TODO, Levi: Find out how format as phone number*/}
				<td>
					{this.props.contact.email} </td>
				<td>
				<div visible="false">
				<Dropdown title = "Options">
					<div className="d-flex flex-column">
						 <Button variant="danger" onClick={this.onDelete} block>Delete</Button>
						 <Button variant="success" onClick={this.onModify} block>Modify</Button>
						 <Button variant="warning" onClick={this.onFavorite} block>Favorite</Button>
					</div>
					</Dropdown>
				</div>
				</td>
			</tr>
		)
	}
}

class ContactTable extends Component {
	render() {
		// Do some js stuff outside of the return of jsx.
		var rows = [];
		console.log(this.props.contacts)
		this.props.contacts.forEach(
			(contact) => {
					if(contact.name.indexOf(this.props.filterText) === -1) {
						return;
					}
					rows.push(
						<ContactRow
							key = {contact.key}
							contact ={contact}/>
						)
			}
		)
		return (
			<table className ="table table-hover">
				<thead>
					<tr>
						<th>
							<i className="fa fa-fw fa-user">
							</i>
							Name
						</th>
						<th>
							<i className="fa fa-fw fa-user">
							</i>
							Phone
						</th>
						<th>
							<i className="fa fa-fw fa-user">
							</i>
							Email
						</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		)
	}
}

class NewContact extends Component {
	constructor(props){
		super(props);
	//	this.handleSubmit = this.handleSumbit.bind(this);
	}
	render() {
		return (
			<div className="pl-3">
			<Form>
				<Form.Row>
					<Form.Group as = {Form.Col} md="4">
						<Form.Label>First name</Form.Label>
						<Form.Control
						type="text"
						name="firstName"
						placeholder="John"
						onChange=""
						/>
					</Form.Group>
					<Form.Group as = {Form.Col} md="4">
						<Form.Label>Last name</Form.Label>
						<Form.Control
						type="text"
						name="lastName"
						placeholder = "Doe"
						onChange=""
						/>
					</Form.Group>

					<Form.Group as = {Form.Col} md="6">
						<Form.Label>Email </Form.Label>
						<Form.Control
							type="email"
							placeholder = "@"
							name="email"
						/>
					</Form.Group>
					<Form.Group as = {Form.Col} md="6">
						<Form.Label>Phone Number </Form.Label>
						<Form.Control
							type="tel"
							placeholder = "#"
							name="phoneNumber"
						/>
					</Form.Group>
					<button type="submit" className="btn btn-success btn-sm"><b>Add Contact</b></button>
				</Form.Row>
			</Form>
			</div>
		)
	}
}
class SearchBar extends Component {
	constructor (props) {
		super(props);
		this.state = {
			searchText : ""
		};
		this.handleTextChange = this.handleTextChange.bind(this)
	}
	handleTextChange = e => {
		this.setState({
			searchText:e.target.value
		})
		console.log(this.state.searchText);
	}
	render() {
		return  (
			<form class="form-inline md-form form-sm mt-0">
			  <i class="fas fa-search" aria-hidden="true"></i>
			  <input
					class="form-control form-control-sm ml-3 w-75"
					type= "text"
					onChange = {e => this.handleTextChange(e)}
					placeholder="Search"
					value = {this.state.searchText}
			    aria-label="Search"
					/>
			</form>
		)
	}
}
export default Contact;
