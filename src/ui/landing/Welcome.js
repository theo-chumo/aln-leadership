import React from 'react'

const Welcome = () => {
  return (
    <div className="welcome-area" id="welcome">
		<div className="header-text">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
						<h1>Welcome to the A&K Automated Tax Risk Toolkit</h1>
						<p>An easy and convenient way to check your tax health status of your company!</p>
						<div className="email-box">
							<div className="input">
								<input type="email" placeholder="Enter your email"/>
								<button>Get started</button>
							</div>
							<span>Enter your email address to get started</span>
						</div>
					</div>
					<div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center">
					<img src="../../assets/images/splash.png" alt="A&K" />
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Welcome