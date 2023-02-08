import React from 'react'
import './Signup.css'
const Signup = () => {
  return (

    <div className="signup" id="sign">
            <div className="shead">
               <h1> SIGN UP</h1>
               <p> Sign in now and register for upcoming events and <br/>
                     future announcements.</p>
            </div>
            
             <div className="s-content">
              <div className="email">
                <span> Email</span> <input type="email"/> 
              </div>
              
              <div className="sbtn">

              <button type="button" > Get Link </button>
              </div>
             </div>


              
              
            
    </div>
  )
}

export default Signup