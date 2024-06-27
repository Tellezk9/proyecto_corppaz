import React from 'react';
import style from './Contact.module.css';
import { Box } from '@mui/material';

import Whatsapp_logo from '../../assets/Redes_sociales/whatsapp.svg';
import Facebook_logo from '../../assets/Redes_sociales/facebook.svg';
import Instagram_logo from '../../assets/Redes_sociales/instagram.svg';

function Contact() {
    return (
        <section id='contact'>
            <Box>
                <div className={style.container}>
                    <div className={style.image_heart}>
                        <h1>Contactanos</h1>
                        <div className={style.container_elements}>
                            <div className={style.contact_text}>
                                <p className={style.p}>Teléfono: 58<span class={style.font_fix}>4</span>3204</p>
                                <p className={style.p}>Contacto: +57 302 4431752</p>
                                <p className={style.p}>Email: fundaciontradein@gmail.com</p>
                            </div>
                            <div className={style.social_media_container}>
                                <h3 className={style.h3}><b>Descubre cómo estamos transformando vidas en nuestras redes sociales</b></h3>
                                <div className={style.social_media}>
                                    <div className={style.social_media_logo_container}>
                                        <a href='https://wa.me/573137711678?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios.' target='_blank' rel="noopener noreferrer"><img src={Whatsapp_logo} alt='logo whatsapp' ></img></a>
                                    </div>
                                    <div className={style.social_media_logo_container}>
                                        <a href='https://www.facebook.com/corpopaz' target='_blank' rel="noopener noreferrer"><img src={Facebook_logo} alt='logo instagram' ></img></a>
                                    </div>
                                    <div className={style.social_media_logo_container}>
                                        <a href='https://www.instagram.com/corporaciontodosporlapaz/' target='_blank' rel="noopener noreferrer"><img src={Instagram_logo} alt='logo instagram'></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </section>
    )
}
export default Contact