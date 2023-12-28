import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div>
      <div class="contact-form-wrapper d-flex justify-content-center">
        <form action="#" class="contact-form">
          <h5 class="title">Contact us</h5>
          <p class="description">
            Feel free to contact us if you need any assistance, any help or
            another question.
          </p>
          <div>
            <input
              type="text"
              class="form-contro  rounded border-white text-2xl w-full mb-6 form-input"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              class="form-control rounded border-white text-2xl w-full mb-6 form-input"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="text"
              class="form-control rounded border-white text-2xl w-full mb-6 form-input"
              placeholder="Phone number"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              class="form-control rounded border-white text-2xl w-full mb-6 form-text-area"
              rows="5"
              cols="30"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div class="submit-button-wrapper">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
