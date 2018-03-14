import React, { Component } from 'react';

const Header = ()=>{

	console.log("Tteasdast!")
	return(<div>
		<a name="anchor"></a>
		<div className="flex-grid menu">
		<div className="logo col"><a href="/"><h1>NV Sterling Homes</h1></a></div>
		<a href="/portfolio"><h1>Homes</h1></a>
		<a href="/contact"><h1>Contacts</h1></a>
		</div>
		</div>);
}
export default Header;