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
                    <h1>Contactanos</h1>
                    <div className={style.container_elements}>
                        <div className={style.contact_text}>
                            <p className={style.p}>Telefono: 607 528 14 75</p>
                            <p className={style.p}>Contacto: 314 771 16 78</p>
                            <p className={style.p}>Email: contactodirecto@corppaz.org</p>
                        </div>
                        <div className={style.social_media_container}>
                            <h2 className={style.h2}><b>Descubre cómo estamos transformando vidas en redes sociales</b></h2>
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
            </Box>
        </section>
    )
}
export default Contact