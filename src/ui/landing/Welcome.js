import React from 'react'

const Welcome = () => {
  return (
    <div className="welcome-area" id="welcome">
		<div className="header-text">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
						<h1>Simple online hotel management system</h1>
						<p>Maecenas sed ligula ut dui pharetra aliquet. Vestibulum eget orci libero. Sed est sem, mollis nec lectus nec, varius suscipit ligula.</p>
						<div className="email-box">
							<div className="input">
								<input type="email" placeholder="Enter your email"/>
								<button>Get started</button>
							</div>
							<span>30-day FREE trial - no credit card needed</span>
						</div>
					</div>
					<div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center">
					 <h1>Placeholder</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Welcome