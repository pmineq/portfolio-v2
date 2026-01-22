import { useRef, useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import Layout from '../../components/Layout';
import { EMAIL_CONFIG, CONTACT_INFO, VALIDATION_MESSAGES } from './constants';
import type { ContactFormElement } from './types';

import '../../assets/scss/contact.scss';

const Contact = () => {
  const form = useRef<ContactFormElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const formUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (textRef.current) {
      tl.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'ease.out',
      });
    }

    if (formUpRef.current) {
      tl.from(formUpRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'ease.out',
      });
    }
  }, []);

  const validateForm = (): boolean => {
    if (!form.current) return false;

    const { contact_name, contact_email, contact_message } = form.current.elements;

    if (!contact_name.value.trim()) {
      alert(VALIDATION_MESSAGES.name);
      contact_name.focus();
      return false;
    }

    if (!contact_email.value.trim()) {
      alert(VALIDATION_MESSAGES.email);
      contact_email.focus();
      return false;
    }

    if (!contact_message.value.trim()) {
      alert(VALIDATION_MESSAGES.message);
      contact_message.focus();
      return false;
    }

    return true;
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm() || !form.current) return;

    try {
      await emailjs.sendForm(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        form.current,
        { publicKey: EMAIL_CONFIG.publicKey }
      );

      alert(VALIDATION_MESSAGES.success);
      form.current.reset();
    } catch (error) {
      console.error('Email send error:', error);
      alert(VALIDATION_MESSAGES.error);
    }
  };

  return (
    <Layout header>
      <div className='contact-wrap'>
        <div ref={textRef} className='contact-info'>
          <h2>Contact Me.</h2>
          <p>
            궁금한 내용이 있으시면 연락 주세요!<br/>
            작은 의견도 소중히 듣습니다.
          </p>
          <div className='box'>
            <p>
              연락처: <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phoneDisplay}</a>
            </p>
            <p>
              메일: <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </p>
          </div>
        </div>
        <div ref={formUpRef} className='contact-letter'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='input-wrap'>
              <label htmlFor='contact_name'>성함</label>
              <input
                type="text"
                id="contact_name"
                name="contact_name"
                autoComplete="name"
              />
            </div>
            <div className='input-wrap'>
              <label htmlFor='contact_email'>답장 받을 메일주소</label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                placeholder='email@mail.com'
                autoComplete="email"
              />
            </div>
            <div className='input-wrap'>
              <label htmlFor='contact_message'>내용</label>
              <textarea
                id='contact_message'
                name="contact_message"
                rows={5}
              />
            </div>
            <input type="submit" value="전송" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
