import React, { useRef, useEffect } from 'react';

import '../assets/scss/contact.scss';

import Layout from '../components/Layout';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';



const Contact = (props) => {

	const form = useRef();

	const textRef = useRef();
	const formUpRef = useRef();

	useEffect(() => {
		let tl = gsap.timeline(); //순서대로
		tl.from(textRef.current, {
			y: 100,
			opacity: 0,
			duration: 1,
			ease: "ease.out",
		});

		tl.from(formUpRef.current, {
			y: 100,
			opacity: 0,
			duration: 1,
			ease: "ease.out",
		})

	}, []);


	//메일
  const sendEmail = (e) => {
    e.preventDefault();

		// 폼 필드 값 가져오기
		const name = form.current.querySelector('#contact_name');
		const email = form.current.querySelector('#contact_email');
		const message = form.current.querySelector('#contact_message');

		// 유효성 검사
		if (!name.value) {
			alert('성함을 입력해 주세요.');
			name.focus();
			return;
		} 

		if (!email.value) {
			alert('메일 주소를 입력해 주세요');
			email.focus();
			return;
		}

		if (!message.value) {
			alert('내용을 입력해 주세요');
			message.focus();
			return;
		}

		//메일 전송
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
				<div ref={textRef} className='contact-info'>
					<h2>Contact Me.</h2>
					<p>궁금한 내용이 있으시면 연락 주세요!<br/>작은 의견도 소중히 듣습니다.</p>
					<div className='box'>
						<p>연락처: <a href='tel:+821031938441'>+82 10-3193-8441</a></p>
						<p>메일: <a href='mailto:pmineq.12@gmail.com'>pmineq.12@gmail.com</a></p>
					</div>
				</div>
				<div ref={formUpRef} className='contact-letter'>
					<form ref={form} onSubmit={sendEmail}>
						<div className='input-wrap'>
							<label htmlFor='contact_name'>성함</label>
							<input type="text" id="contact_name" name="contact_name" />
						</div>
						<div className='input-wrap'>
							<label htmlFor='contact_email'>답장 받을 메일주소</label>
							<input type="email" id="contact_email" name="contact_email" placeholder='email@mail.com' />
						</div>
						<div className='input-wrap'>
							<label htmlFor='contact_message'>내용</label>
							<textarea id='contact_message' name="contact_message"/>
						</div>
						<input type="submit" value="전송" />
					</form>
				</div>
			</div>
		</Layout>
	);
};


export default Contact;