import React, { Component } from 'react'
import "./LoginPage.css";
export default class LoginPage extends Component {
  render() {
    return (
        <div >
        <form className='login-form' >
          <div className='page' >
            <h3 style={{color:"white"}}>Sign In</h3>
            <label>Username </label>
            <input type="text" name="uname" required />
            
          </div>
         
          <div className='page'>
            <label>Password </label>
            <input type="password" name="pass" required />
           
          </div>
          <>
          </>
          <div>
            {/* <input type="submit" /> */}
            <button>login</button>
          </div>
        </form>
      </div>
    )
  }
}
