import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'
const Join = () => {
    const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='text-stroke'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='text-stroke'> WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} action=""  className="email-conatiner" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter Your email' id="" />
                <button className='btn btn-j'>Join Us</button>
            </form>
        </div>
    </div>
  )
}

export default Join