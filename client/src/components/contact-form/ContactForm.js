import React, { useState } from "react";
import "./contact-form.scss";

const ContactForm = () => {
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { name, email, message } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setAlert("Please Fill in All The Field");
      setAlertType("danger");
      setTimeout(() => {
        setAlert("");
        setAlertType("");
      }, 3000);
      return;
    }
    setAlert("Thank You For Your Message");
    setAlertType("success");
    setTimeout(() => {
      setAlert("");
      setAlertType("");
    }, 3000);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      {alert && <div className={`alert ${alertType}`}>{alert}</div>}
      <div className='form-group'>
        <label>Name</label>
        <input
          value={name}
          type='text'
          name='name'
          placeholder='Enter Name'
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Email</label>
        <input
          value={email}
          type='email'
          name='email'
          placeholder='Enter Email'
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Message</label>
        <textarea
          value={message}
          name='message'
          id=''
          cols='30'
          rows='10'
          onChange={handleChange}
        >
          Enter Message
        </textarea>
      </div>
      <button type='submit' className='btn submit'>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
