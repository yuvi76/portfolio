/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo2.png';
import '../css/App.css';

class AppNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}
	ToggleClass = (e) => {
		this.setState({ isActive: !this.state.isActive })
	}

	Closenav = (e) => {
		this.setState({ isActive: false })
	}

	render() {
		return (

			<div className="home">
				<div className="container">
					<div className="cursor-follower"></div>
					<header className={(this.state.isActive) ? 'header active' : 'header'}>
						<div className="head-top">

							{/* <!-- menu button --> */}
							<a className='menu-btn' onClick={this.ToggleClass}><span></span></a>

							{/* <!-- logo --> */}
							<div className="logo hover-masks-logo">
								<a >
									<span className="mask-lnk"> <img src={logo} alt="" /></span>
									<span className="mask-lnk mask-lnk-hover">Download <strong>CV</strong></span>
								</a>
							</div>

							{/* <!-- top menu --> */}
							<div className="top-menu hover-masks">
								<div className="top-menu-nav">
									<div className="menu-topmenu-container">
										<nav className="navbar navbar-default navbar-static-top">
											<ul className="nav nav-pills">
												{/* Check the Css section for the selector */}
												<li><NavLink to="/" activeClassName="active" onClick={() => {this.Closenav() }}>Home</NavLink></li>
												<li><NavLink to="/about" activeClassName="active" onClick={() => {this.Closenav() }}>Resume</NavLink></li>
												<li><NavLink to="/work" activeClassName="active" onClick={() => {this.Closenav() }}>Work</NavLink></li>
												<li><NavLink to="/contact" activeClassName="active" onClick={() => {this.Closenav() }}>Contact</NavLink></li>
											</ul>
										</nav>
									</div>
								</div>
							</div>

						</div>
					</header>
				</div>
			</div>
		)
	}

}

export default AppNavbar;