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
            
              <form action="#" className="sform">
              
              <label for="email" className="emaillabel"> EMAIL</label> 
              <div className="inpborder">
                 
              <input type="email" className="email"  required/>
              
              </div>
                <br />
              <button type="submit"> Get Link  </button>

        </form>


              
              
            
    </div>
  )
}

export default Signup