import React, { Component } from 'react';
import b1 from '../images/voting1-blog-banner.jpg';
import b2 from '../images/first-transaction-on-libra-blockchain.jpg';
import b3 from '../images/building-a-restful-API-with-node.js-and-mongoDB-Atlas.jpg';
import b4 from '../images/CryptoCurrency-Is-Proving-The-Best-Gauge-Of-The-Coronavirus-Outbreak-After-China-Stats-Shock.jpg';
import b5 from '../images/Mebook-Logo.PNG';
import b6 from '../images/BFK-logo.png';
import b7 from '../images/dot-logo.webp';

class Work extends Component {

	render() {
		return (
			<div>
				{/*  <!-- Works --> */}
				<div className="section works" id="section-portfolio">
					<div className="content">

						{/* <!-- title --> */}
						<div className="title">
							<div className="title_inner">Blog</div>
						</div>

						{/* <!-- portfolio items --> */}
						<div className="box-items portfolio-items">
							<ul className="cards">
								<li className="cards_item">
									<div className="card">
										<div className="card_image"><img src={b4} alt="blog4" /></div>
										<div className="card_content">
											<h2 className="card_title">Cryptocurrency Is Proving The Best Gauge Of The Coronavirus Outbreak After China Stats Shock.</h2>
											<p className="card_text">China has declared that they're going to be cleaning banknot...</p>
											<a href="https://blog.yudiz.com/cryptocurrency_proving_as_best_gauge_of_coronavirus_outbreak_post_china_stats_shock/" className="btn hover-animated" target="_blank" rel="noopener noreferrer">
												<span className="lnk">Read Blog </span>
											</a>
											<p className="card_text">2nd Mar 2020</p>
										</div>
									</div>
								</li>
								<li className="cards_item">
									<div className="card">
										<div className="card_image"><img src={b3} alt="blog3" /></div>
										<div className="card_content">
											<h2 className="card_title">Building a RESTful API with Node.js and MongoDB Atlas.</h2>
											<p className="card_text">In the domains of JavaScript and Node.js, MongoDB has set up itself as the go-to database. MongoDB A...</p>
											<a href="https://blog.yudiz.com/building-a-restful-api-with-node-js-and-mongodb-atlas/" className="btn hover-animated" target="_blank" rel="noopener noreferrer" >
												<span className="lnk">Read Blog </span>
											</a>
											<p className="card_text">3rd Feb 2020</p>
										</div>
									</div>
								</li>
								<li className="cards_item">
									<div className="card">
										<div className="card_image"><img src={b2} alt="blog2" /></div>
										<div className="card_content">
											<h2 className="card_title">First Transaction on Libra Blockchain.</h2>
											<p className="card_text">Imagine that one of your friends lives across the sea & he/she requires some Libra coin, which you have in abundance. How cool it would be if you... </p>
											<a href="https://blog.yudiz.com/first-transaction-on-libra-blockchain/" className="btn hover-animated" target="_blank" rel="noopener noreferrer">
												<span className="lnk">Read Blog </span>
											</a>
											<p className="card_text">26th Jun 2019</p>
										</div>
									</div>
								</li>
								<li className="cards_item">
									<div className="card">
										<div className="card_image"><img src={b1} alt="blog1" /></div>
										<div className="card_content">
											<h2 className="card_title">Truly Decentralized Voting System powered by Blockchain (Version 1.0).</h2>
											<p className="card_text">Think what would happen if the voting system is 100% trans...</p>
											<a href="https://blog.yudiz.com/truly-decentralized-voting-system-powered-by-blockchain-version-1-0/" className="btn hover-animated" target="_blank" rel="noopener noreferrer" >
												<span className="lnk">Read Blog </span>
											</a>
											<p className="card_text">23rd Apr 2019</p>
										</div>
									</div>
								</li>
							</ul>



						</div>

						<div className="title">
							<div className="title_inner">Project</div>
						</div>

						<div className="box-items portfolio-items">
							<ul className="cards">
								<li className="cards_item">
									<div className="card">
										<a href="https://bfkwarzone.com" target="_blank" rel="noopener noreferrer" >
											<div className="card_image"><img src={b6} alt="blog3" /></div>
											<div className="card_content">
												<h2 className="card_title"><center>BFKWARZONE</center></h2>
											</div>
										</a>
									</div>
								</li>
								<li className="cards_item">
									<div className="card">
										<a href="https://play.google.com/store/apps/details?id=com.a300mind.dotsandboxes" target="_blank" rel="noopener noreferrer" >
											<div className="card_image"><img src={b7} alt="blog3" /></div>
											<div className="card_content">
												<h2 className="card_title"><center>Dots and Boxes</center></h2>
											</div>
										</a>
									</div>
								</li>
							</ul>
						</div>

						<div className="clear"></div>

						<div className="title">
							<div className="title_inner">Website</div>
						</div>

						<div className="clear"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Work;
