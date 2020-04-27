import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img src={require('../images/headshot.png')} alt="avatar" className="headshot-img" />

						<div className="banner-text">
							<h1>Full Stack Web Developer</h1>

							<hr />

							<p>React | React Native | JavaScript | Node.js | Ruby on Rails | PHP | PostgreSQL</p>

							<div className="social-links">
								{/* LinkedIn */}
								<a href="https://www.linkedin.com/in/kevin-schroeder-5b9b738a/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="https://github.com/kschroeder20" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default LandingPage;
