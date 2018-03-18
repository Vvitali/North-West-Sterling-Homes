import React, { Component } from 'react';
import "./style.css";
const Header = ()=>{

console.log("Tteasdast!")
return(<div>
	<a name="anchor"></a>
	<nav className="navbar navbar-default menu">
		<div className="container-fluid"> 
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand" href="./">NV Sterling Homes</a>
			</div>


			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


				<ul className="nav navbar-nav navbar-right">
					<li><a href="/portfolio">Projects</a></li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services <span className="caret"></span></a>
						<ul className="dropdown-menu">
							<li><a href="#">Masonry</a></li>
							<li><a href="#">Painting</a></li>
							<li><a href="#">Something else here</a></li>
							<li role="separator" className="divider"></li>
							<li><a href="#">Separated link</a></li>
						</ul>
					</li>
					<li><a href="/contact">Contacts</a></li>
				</ul>
			</div> 
		</div> 
	</nav>

</div>);
}
export default Header;