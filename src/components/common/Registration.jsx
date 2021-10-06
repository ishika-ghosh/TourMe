import React from 'react'
import "./RegStyle.css"
export default function Registration() {
    return (
        <div className="regform">
        <div className="regcontainer">
    <div className="title">Registration</div>
    <div className="regcontent">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type="text" placeholder="Enter your first name" required/>
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input type="text" placeholder="Enter your last name" required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Enter your email" required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="tel" placeholder="Enter your number" required/>
            </div>
          
          <div className="input-box" style={{width: "17rem"}}>
            <span className="details">Age</span>
            <input type="number" placeholder="Enter your age" min="10" max="100" required=""/>
          </div>
          <div className="gender-details">
            <div className="gender-title">Gender</div><br/>
            <input type="radio" name="gender" id="dot-1"/>
            <input type="radio" name="gender" id="dot-2"/>
            <input type="radio" name="gender" id="dot-3"/>

            <div className="category">
              <label htmlFor="dot-1">
                <div className="dot one"></div>
                <div className="gender">Male</div>
              </label><br/>
              <label htmlFor="dot-2">
                <div className="dot two"></div>
                <div className="gender">Female</div>
              </label><br/>
              <label htmlFor="dot-3">
                <div className="dot three"></div>
                <div className="gender">Other</div>
              </label><br/>
            </div>
          </div>

          <div className="input-box">
            <span className="details">Tell us about yourself</span>
            <textarea name="comments" id="comments" cols="30" rows="5" placeholder="Description"></textarea>
          </div>

          <div className="form-control" >
            
            <div className="sub">Submit your Photo here.... </div>
            <input type="file" className="form-control" id="image" accept="images/*"/>
            <br/>
            <br/>
            <div className="sub">Submit your ID here.... </div>
            <input type="file" className="form-control" id="idis" accept="images/*"/><br/>
          </div>
        </div>
          
          <button type="Submit" className="btn btn-info form-control">Submit</button>
      </form>
    </div>
  </div>
  </div>
)
}