import React from 'react'
import emailjs from '@emailjs/browser'
export default function Register() {
    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_yyw7gpo','template_gf5d56f',event.target,'6CtWNYVRNqRmedPgn')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }
  return (
    <div className='div-form'>
      <h1 className='title-form'>Register</h1>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name' />
        <hr />

        <label>Email</label>
        <input type="email" name='user_email' />
        <hr />
        <button>Send</button>
      </form>
    </div>
  )
}
