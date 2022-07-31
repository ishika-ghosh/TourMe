import React, { useRef } from "react";
import girl from "../assets/girl.png";
import "./contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aup68ri",
        "template_b2f3q4b",
        form.current,
        "user_DHy3pvYM1HO3VsKODw8SK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <section className="contact">
        <div className="container">
          <div className="formbox">
            <form ref={form} onSubmit={sendEmail}>
              <h2>CONTACT US</h2>
              <div className="input-box">
                <input type="text" required="required" name="name" />
                <span>Full Name</span>
              </div>
              <div className="input-box">
                <input type="text" required="required" name="subject" />
                <span>Subject</span>
              </div>
              <div className="input-box">
                <input type="email" required="required" name="email" />
                <span>Your Email address</span>
              </div>
              <div className="input-box">
                <textarea required="required" name="message"></textarea>
                <span>Type your message</span>
              </div>
              <div className="input-box">
                <input type="submit" value="SEND"></input>
              </div>
            </form>
          </div>
          <div className="imagebox">
            <img src={girl} alt="nothing" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
