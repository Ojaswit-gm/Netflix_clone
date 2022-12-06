import React, { useState } from 'react';
import "./Login.css";
import SignupScreen from './SignupScreen';


function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginscreen'>
        <div className='loginscreen_background'>
            <img className='loginscreen_logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=''></img>
          <button onClick={() => setSignIn(true)} className='loginscreen_button'>Sign In</button>
          <div className='loginscreen_gradient'></div>
        </div>
        <div className='loginscreen_body'>
          {signIn ? (<SignupScreen />) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch? Enter your email to create or restart
                your membership.
              </h3>
              <div className='loginscreen_input'>
                <form>
                  <input type="email" placeholder="Email Address"></input>
                  <button onClick={() => setSignIn(true)} className='getstarted'>GET STARTED</button>
                </form>
              </div>
            </>
          )}
          
        </div>
    </div>
  )
}

export default Login