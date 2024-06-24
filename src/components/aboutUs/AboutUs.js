import React from 'react';
import style from './AboutUs.module.css';
import { Box } from '@mui/material';

function AboutUs() {
    return (
        <section className={style.section}>
            <Box sx={style.box}>
                        <div className={style.element_text_about_us}>
                            <h2>Corporación Todos Por La Paz “CORPPAZ”: Un faro de esperanza en las comunidades</h2>
                            <p>Somos una organización no gubernamental (ONG) sin fines de lucro, impulsada por un equipo apasionado y comprometido con la inclusión social y el desarrollo sostenible de las comunidades más vulnerables.</p>
                        </div>
                    <div className={style.element_image_background}>
                        <div className={style.element_container_text}>
                            <div className={style.element_mision_vision}>
                                <div className={style.element_text}>
                                    <h2 className={style.h2}>misión</h2>
                                    <p className={style.p}>
                                        Promover la inclusión social de las poblaciones vulnerables, especialmente en las zonas rurales, para que tengan acceso a oportunidades y servicios esenciales.
                                    </p>
                                    <p className={style.p}>
                                        Restablecer los derechos de estas comunidades, brindándoles las herramientas y el apoyo necesarios para defender sus intereses y mejorar su calidad de vida.
                                    </p>
                                </div>
                                <div className={style.element_text_warp}></div>
                                <div className={style.element_text}>
                                    <h2 className={style.h2}>visión</h2>
                                    <p className={style.p}>Aspiramos a convertirnos en una organización líder en la promoción de la inclusión social y el desarrollo sostenible, reconocida por nuestro impacto tangible y duradero en la vida de las personas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </Box>
        </section>
    )
}

export default AboutUs