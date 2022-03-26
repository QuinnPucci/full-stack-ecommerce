import React from "react";

function Contact() {
  return (
    <section>
      <div>
        <h1 className="title">Contact Us</h1>
      </div>

      <div>
        <form action="mailto: ouremail@gmail.com" method="POST">
          <label htmlFor="name">Name:</label>
          <input name="name" type="input" className="tooltip"></input>
          <br></br>
          <span className="required"> * Required *</span>
          <br></br> <br></br>
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" className="tooltip"></input>
          <br></br>
          <span className="required"> * Required *</span>
          <br></br> <br></br>
          <label htmlFor="textbox">Comment:</label>
          <input name="textbox" type="text" className="tooltip"></input>
          <br></br>
          <span className="required">* Required *</span>
          <br></br> <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
