import React from 'react'
import Header from './Header';
import withAuth from './WithAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faWhatsapp, faTelegram} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='home'>
      <Header />
      <section class="contact">

        <div class="row">

          <div class="image">
            <img src="images/contact-img.svg" alt="" />
          </div>

          <form action="" method="post">
            <h3>По поводу платформы: </h3>
            <input type="text" placeholder="Полное имя" name="name" required maxlength="50" class="box" />
              <input type="text" placeholder="Instagram" name="email" required maxlength="50" class="box" />
                <input type="number" placeholder="Номер телефона" name="number" required maxlength="50" class="box" />
                  <textarea name="msg" class="box" placeholder="Ваше сообщение" required maxlength="1000" cols="30" rows="10"></textarea>
                  <input type="submit" value="Отправить" class="inline-btn" name="submit" />
                  </form>

                </div>

                <div class="box-container">

                  <div class="box">
                    <h3>Социальные сети</h3>
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <a href='#'><FontAwesomeIcon style={{fontSize:'30px', marginRight:'5px'}} icon={faInstagram} /></a>
                    <a href='#'><FontAwesomeIcon style={{fontSize:'30px', marginRight:'5px'}} icon={ faWhatsapp} /></a>
                    <a href='#'><FontAwesomeIcon style={{fontSize:'30px', marginRight:'5px'}} icon={ faTelegram} /></a>
                    </div>
                  </div>

                  <div class="box">
                    <h3>Обратная связь</h3>
                    <a href="mailto:eskendirhasoiya@gmail.com">Тех. Поддержка</a>
                  </div>

                </div>

              </section>

            </div>
)
}

 export default withAuth(Contact, ['user']);