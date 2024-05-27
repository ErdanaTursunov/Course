import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import withAuth from './WithAuth';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Сообщение отправлено!');
      }, (error) => {
        console.log(error.text);
        alert('Ошибка при отправке сообщения.');
      });
  };

  return (
    <div className='home'>
      <Header />
      <section className="contact">
        <div className="row">
          <div className="image">
            <img src="/images/contact-img.svg" alt="Контактное изображение" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <h3>По поводу платформы:</h3>
            <input type="text" placeholder="Полное имя" name="name" required maxLength="50" className="box" />
            <input type="text" placeholder="Instagram" name="email" required maxLength="50" className="box" />
            <input type="number" placeholder="Номер телефона" name="number" required maxLength="50" className="box" />
            <textarea name="msg" className="box" placeholder="Ваше сообщение" required maxLength="1000" cols="30" rows="10"></textarea>
            <input type="submit" value="Отправить" className="inline-btn" />
          </form>
        </div>
        <div className="box-container">
          <div className="box">
            <h3>Социальные сети</h3>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="box">
            <h3>Обратная связь</h3>
            <a href="mailto:eskendirhasoiya@gmail.com">Тех. Поддержка</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withAuth(Contact, ['admin']);
