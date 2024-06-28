import React from 'react';
import style from './Footer.module.css';
import { Box } from '@mui/material';

import Whatsapp_logo from '../../assets/Redes_sociales/whatsapp.svg';
import Facebook_logo from '../../assets/Redes_sociales/facebook.svg';
import Instagram_logo from '../../assets/Redes_sociales/instagram.svg';
import Logo_corppaz from '../../assets/logos/Logo_corppaz_letras_blancas.png';


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
                                <img src={Logo_corppaz} alt='logo' className={style.logo_corppaz}></img>
                                <p className={style.p_description}>CORPPAZ es una organización sin ánimo de lucro comprometida con la transformación social y el desarrollo sostenible en Cúcuta y la región. A través de proyectos innovadores en áreas sociales, económicas, agrícolas y de infraestructura, empoderamos a las comunidades más vulnerables y promovemos un futuro más equitativo y próspero para todos.</p>
                            </div>
                            <div className={style.contact_container}>
                                <div className={style.social_media}>
                                    <div className={style.social_media_logo_container}>
                                        <a href='https://wa.me/573147711678?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios.' target='_blank' rel="noopener noreferrer"><img src={Whatsapp_logo} alt='logo whatsapp' className={style.social_media_logo}></img></a>
                                    </div>

                                    <div className={style.social_media_logo_container}>
                                        <a href='https://www.facebook.com/corpopaz' target='_blank' rel="noopener noreferrer"><img src={Facebook_logo} alt='logo facebook' className={style.social_media_logo}></img></a>
                                    </div>

                                    <div className={style.social_media_logo_container}>
                                        <a href='https://www.instagram.com/corporaciontodosporlapaz/' target='_blank' rel="noopener noreferrer"><img src={Instagram_logo} alt='logo instagram' className={style.social_media_logo}></img></a>
                                    </div>
                                </div>
                                <p className={style.p}>Contacto: 314 771 16 78 | 324 628 82 66 </p>
                                <p className={style.p}>Email: <a href="mailto:corporacion@corppaz.org?subject=Solicitud de información&body=Hola,%20me gustaría obtener más información sobre sus servicios." className={style.link_mail}>corporacion@corppaz.org</a></p>
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