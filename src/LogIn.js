import React from "react"

function LogIn()
{
	return (
		<div className="Form">
			<form>
				<input type = "text"/>
				<br/>
				<input type = "password"/>
				<br/>
				<input type= "submit" value = "Log In"/>
				</form>
		</div>
	);
}
export default LogIn;
