import React from 'react';
import style from './AboutUs.module.css';
import { Box } from '@mui/material';

import img_handshake from '../../assets/Nosotros/handshake.svg'
import img_family from '../../assets/Nosotros/family.svg'
import img_leaf from '../../assets/Nosotros/leaf.svg'
import img_person from '../../assets/Nosotros/person.svg'

function AboutUs() {
    return (
        <section className={style.section} id='about_us'>
            <Box sx={style.box}>
                <div className={style.container_elements}>
                    <div className={style.element_text_about_us}>
                        <h1 className={style.h1}>Corporación Todos Por La Paz <span className={style.span_title}>“CORPPAZ”</span>: Unión que transforma</h1>
                        <p className={style.p}>Trabajamos incansablemente para transformar a las comunidades más vulnerables, creando oportunidades que permitan satisfacer integralmente sus necesidades y de esta manera contribuir a mejores condiciones de vida.
                            Para lograr este objetivo, participamos activamente, nos concentramos en cuatro líneas de acción:</p>
                    </div>
                    <div className={style.element_container_text}>
                        <div className={style.element_text}>
                            <div className={style.card_container}>
                                <div className={`${style.container_img} ${style.container_img_up}`}>
                                    <img src={img_handshake} alt='HandShake icon' className={style.image}></img>
                                </div>
                                <div className={style.card_text_container}>
                                    <div className={style.card_text_h2}>
                                        <h2 className={style.humanitarian_assistance_text}>Asistencia Humanitaria</h2>
                                    </div>
                                    <div>
                                        <p className={style.p}>
                                            Entrega inmediata de suministros esenciales (alimentos, agua, refugio) a poblaciones afectadas por crisis y desastres naturales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card_container}>

                                <div className={`${style.container_img} ${style.container_img_up}`}>
                                    <img src={img_leaf} alt='Leaf icon' className={style.image}></img>
                                </div>
                                <div className={style.card_text_container}>
                                    <div className={style.card_text_h2}>
                                        <h2 className={style.environmental_care_text}>Apoyo a la Agricultura y Cuidado Ambiental</h2>
                                    </div>
                                    <div>
                                        <p className={style.p}>
                                            Implementación de proyectos sostenibles para mejorar la productividad agrícola, conservar los recursos naturales y promover prácticas respetuosas con el medio ambiente
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.element_text_warp}></div>
                        <div className={style.element_text}>
                            <div className={style.card_container}>

                                <div className={style.container_img}>
                                    <img src={img_person} alt='Person' className={style.image}></img>
                                </div>
                                <div className={style.card_text_container}>
                                    <div className={style.card_text_h2}>
                                        <h2 className={style.social_development_text}>Desarrollo Social</h2>
                                    </div>
                                    <div>
                                        <p className={style.p}>
                                            Diseño y ejecución de programas que fomenten la inclusión social, el empoderamiento comunitario y el acceso a servicios básicos como educación, salud y vivienda.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.card_container}>
                                <div className={style.container_img}>
                                    <img src={img_family} alt='Family' className={style.image}></img>
                                </div>
                                <div className={style.card_text_container}>
                                    <div className={style.card_text_h2}>
                                        <h2 className={style.community_text}>Fortalecimiento Comunitario</h2>
                                    </div>
                                    <div>
                                        <p className={style.p}>
                                            Entrega inmediata de suministros esenciales (alimentos, agua, refugio) a poblaciones afectadas por crisis y desastres naturales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box >
        </section >
    )
}

export default AboutUs