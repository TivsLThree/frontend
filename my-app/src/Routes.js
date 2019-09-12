import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./containers/Home"
import NotFound from "./containers/NotFound"
import Login from "./containers/Login"
import Contacts from "./containers/Contacts"
// arrow function from js
// the same as the following
/*
function F ()
{
	return 	(
		<Switch>
			<Route path = "/" component = {Home}>
		</Switch>
	);
}
export default F;
*/
export default () =>
	<Switch>
	{/*Make sure to end the routes with a / */}
		{/*putting exact here is required! This will basically be a giant if else chain*/}
		<Route path = "/" exact component = {Home}/>
		<Route path = "/contacts" exact component = {Contacts}/>
		<Route path = "/login" exact component = {Login}/>
		{/*If the previous routes didn't match, we render our not found page*/}
		<Route component = {NotFound}/>
	</Switch>;
