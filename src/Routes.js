import React from "react"
import AppliedRoute from "./components/AppliedRoute"
import {Route, Switch} from "react-router-dom"
import Home from "./containers/Home"
import NotFound from "./containers/NotFound"
import Login from "./containers/Login"
import Register from "./containers/Register"
import Contact from "./components/Contact"
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
export default ({childProps}) =>
	<Switch>
	{/*Make sure to end the routes with a / */}
		{/*putting exact here is required! This will basically be a giant if else chain*/}
		<AppliedRoute path = "/home" exact component = {Home} props={childProps}/>
		<AppliedRoute path = "/contacts" exact component = {Contact} props={childProps}/>
		<AppliedRoute path = "/register" exact component = {Register} props={childProps}/>
		<AppliedRoute path = "/login" exact component = {Login} props={childProps}/>
		{/*If the previous routes didn't match, we render our not found page*/}
		<Route component = {NotFound}/>
	</Switch>;
