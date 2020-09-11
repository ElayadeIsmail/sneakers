import React from "react";
import "./contact.scss";
import ContactForm from "../../components/contact-form/ContactForm";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='header'></div>
      <div className='contact-content'>
        <div className='container'>
          <h1 className='section-title'>Contact Us</h1>
          <div className='contact-content-info'>
            <div className='contact-info spacing'>
              <div>
                <h4>Information</h4>
                <p>
                  As you might expect of a company that began as a high-end
                  interiors contractor, we pay strict attention.
                </p>
              </div>
              <div>
                <h4>America</h4>
                <p>195 E Parker Square Dr, Parker, CO 801</p>
                <p>+43 982-314-0958</p>
              </div>
              <div>
                <h4>France</h4>
                <p>109 Avenue Léon, 63 Clermont-Ferrand</p>
                <p>+12 345-423-9893</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
