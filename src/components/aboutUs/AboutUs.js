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
                                            Entrega inmediata de suministros esenciales (alimentos, agua, refugio) a poblaciones vulnerables, incluyendo migrantes, en situaciones de crisis y desastres.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.element_text_warp_cards}></div>
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
                                            Implementación de proyectos que fortalezcan la producción agropecuaria, mejoren los medios de vida de las comunidades rurales y promuevan prácticas agrícolas sostenibles.
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
                                            Diseño e implementación de programas que fomenten la inclusión social, la reconciliación y el desarrollo de capacidades en comunidades afectadas por el conflicto armado y la violencia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.element_text_warp_cards}></div>

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
                                            Empoderamiento de las comunidades locales a través de la formación en asociatividad, emprendimiento y desarrollo de proyectos productivos que impulsen la economía local y mejoren la calidad de vida.
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