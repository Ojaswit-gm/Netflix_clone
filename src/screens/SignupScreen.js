import React ,{useRef} from 'react';
//import {auth} from "../firebase";
import "./SignupScreen.css";

function Signupscreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    // auth
    //   .createUserWithEmailAndPassword(
    //     emailRef.current.value,
    //     passwordRef.current.value
    //   )
    //   .then((authUser) => {
    //     console.log(authUser);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };

  const signIn = (e) => {
    e.preventDefault();
    // auth
    //   .signInWithEmailAndPassword(
    //     emailRef.current.value,
    //     passwordRef.current.value
    //   )
    //   .then((authUser) => {
    //     console.log(authUser);
    //   })
    //   .catch((error) => alert(error.message));
  };

  return (
    <div className='signupscreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type="email"></input>
            <input ref={passwordRef} placeholder="Password" type="password"></input>
            <button type='submit' onClick={signIn} >Sign In</button>
            <h4>
              <span className='signupscreen_gray'>New to Netflix?</span>
              <span className='signupscreen_link' onClick={register}>Sign Up Now.</span> 
            </h4>
        </form>
    </div>
  )
}

export default Signupscreen