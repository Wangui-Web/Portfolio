import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from "../styles/Contact.module.css"

const ContactUs =() => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('portfolio', 'template_xnugr3w', form.current, 'user_ic3Gm8vjl5jUfFESHQeGb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    form.current.reset()  
  };

    return (
    <div className={styles.contactUsContainer}>
      <h1 className={ styles.contactUsMainTitle}>Talk to me:</h1>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm} >
        <div className={ styles.contactSubContainer}>
          <label className={styles.contactUsLabel}>Name</label>
          <input type="text" name="user_name" className={styles.contactUsInput} />
        </div>
        <div className={ styles.contactSubContainer}>
          <label className={styles.contactUsLabel}>Email</label>
          <input type="email" name="user_email" className={styles.contactUsInput} />
        </div>
        <div className={ styles.contactSubContainer}>
          <label className={styles.contactUsLabel}>Message</label>
          <textarea className={styles.contactUsText}name="message" />
        </div>  
        <input type="submit" value="Send" className={styles.contactUsButton}/>
      </form>
        <p className={ styles.contactUsCopyright}>Designed and Developed by Christine Wangui. @2021</p>
    </div>      
  );
};
export default ContactUs;