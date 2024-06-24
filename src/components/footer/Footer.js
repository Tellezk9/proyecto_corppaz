import React from 'react';
import style from './Footer.module.css';
import { Box } from '@mui/material';

import Whatsapp_logo from '../../assets/Redes_sociales/whatsapp.svg';
import Facebook_logo from '../../assets/Redes_sociales/facebook.svg';
import Instagram_logo from '../../assets/Redes_sociales/instagram.svg';
import Logo_corppaz from '../../assets/logos/Corppaz_logo_horizontal.png';


function Footer() {
    let fecha_actual = new Date()
    let año_actual = fecha_actual.getFullYear();
    return (
        <section>
            <Box>
                <div className={style.background}>
                    <div className={style.container}>
                        <div className={style.elements}>
                            <div className={style.description_text_container}>
                                <img src={Logo_corppaz} alt='logo'></img>
                                <p className={style.p_description}>CORPPAZ es una organización sin ánimo de lucro comprometida con la transformación social y el desarrollo sostenible en Cúcuta y la región. A través de proyectos innovadores en áreas sociales, económicas, agrícolas y de infraestructura, empoderamos a las comunidades más vulnerables y promovemos un futuro más equitativo y próspero para todos.</p>
                            </div>
                            <div className={style.contact_container}>
                                <div className={style.social_media}>
                                    <div className={style.social_media_logo_container}>
                                        <a href='#' role='button'><img src={Whatsapp_logo} alt='logo whatsapp' className={style.social_media_logo}></img></a>
                                    </div>

                                    <div className={style.social_media_logo_container}>
                                        <a href='#'><img src={Facebook_logo} alt='logo instagram' className={style.social_media_logo}></img></a>
                                    </div>

                                    <div className={style.social_media_logo_container}>
                                        <a href='#'><img src={Instagram_logo} alt='logo instagram' className={style.social_media_logo}></img></a>
                                    </div>
                                </div>
                                <p className={style.p}>Contacto: +57 302 4431752</p>
                                <p className={style.p}>Email: fundaciontradein@gmail.com</p>
                            </div>
                        </div>
                        <p className={style.p}>© {año_actual} Corppaz. Todos los derechos reservados.</p>
                    </div>
                </div>
            </Box>
        </section>
    )
}

export default Footer