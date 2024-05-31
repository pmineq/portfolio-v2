import React, { useRef } from 'react';

import '../assets/scss/contact.scss';

import Layout from '../components/Layout';
import emailjs from '@emailjs/browser';



const Contact = (props) => {

	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7edqrss', 'template_v2umrrj', form.current, {
        publicKey: 'upGj3_ip3VdmDn5j9',
      })
      .then(
        () => {
					alert("성공적으로 이메일이 전송되었습니다.");
					form.current.reset();
        },
        (error) => {
					console.log(error.text);
					alert("이메일이 전송이 실패되었습니다.");
        },
      );
  };


  return (
		<Layout header>
			<div className='contact-wrap'>
				<div className='contact-info'>
					<h2>Contact Me.</h2>
					<p>작은 의견도 소중히 듣습니다.</p>
				</div>
				<div className='contact-letter'>
					<form ref={form} onSubmit={sendEmail}>
						<div className='input-wrap'>
							<label>Name</label>
							<input type="text" name="contact_name" />
						</div>
						<div className='input-wrap'>
							<label>Email</label>
							<input type="email" name="contact_email" />
						</div>
						<div className='input-wrap'>
							<label>Message</label>
							<textarea name="contact_message" />
						</div>
						<input type="submit" value="전송" />
					</form>
				</div>
			</div>
		</Layout>
	);
};


export default Contact;