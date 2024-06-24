import React, { useState, useEffect, useRef } from 'react';
import style from './Contact.module.css';
import { Box } from '@mui/material';

import Whatsapp_logo from '../../assets/Redes_sociales/whatsapp.svg';
import Facebook_logo from '../../assets/Redes_sociales/facebook.svg';
import Instagram_logo from '../../assets/Redes_sociales/instagram.svg';

function Contact() {
    return (
        <section>
            <Box>
                <div className={style.container}>
                    <div>
                        <h2>Contactanos</h2>
                    </div>
                    <div className={style.container_elements}>
                        <div className={style.contact_text}>
                            <p className={style.p}>Teléfono: 58<span class={style.font_fix}>4</span>3204</p>
                            <p className={style.p}>Contacto: +57 302 4431752</p>
                            <p className={style.p}>Email: fundaciontradein@gmail.com</p>
                        </div>
                        <div className={style.social_media_container}>
                            <h4><b>Descubre cómo estamos transformando vidas en nuestras redes sociales</b></h4>
                            <div className={style.social_media}>
                                <div className={style.social_media_logo_container}>
                                    <a href='#'><img src={Whatsapp_logo} alt='logo whatsapp' ></img></a>
                                </div>
                                <div className={style.social_media_logo_container}>
                                    <a href='#'><img src={Facebook_logo} alt='logo instagram' ></img></a>
                                </div>
                                <div className={style.social_media_logo_container}>
                                    <a href='#'><img src={Instagram_logo} alt='logo instagram'></img></a>
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