import React from "react";
import { Box } from "@mui/material";

import style from './Services.module.css';

import image from '../../assets/Servicios/Hombre_canasta.png'

function Services() {
    return (
        <section className={style.section} id="services">
            <Box sx={style.box}>
                <div className={style.container_programs}>
                    <div className={style.container_elements}>
                        <div className={style.elements_text}>
                            <div className={style.title_section}>
                                <h2 className={style.title}>Servicios</h2>
                            </div>
                            <div className={style.paragraph_section}>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Capacitación </b> en gestión y formulación de proyectos.
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Programas de fortalecimiento</b> comunitario y control social.
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Asistencia Técnica Profesional  </b> (Brindar asesoría y acompañamiento
                                    técnico permanente a los beneficiarios (comunidades) que
                                    se atienden en cada una de las ejecuciones de los proyectos).
                                </p>
                                <p className={style.paragraph}>
                                    <span className={style.middle_point}>&#183;</span>Proyectos de <b> Desarrollo social, rural y agropecuario.</b>
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Consultoría</b> en ejecución y gestión de proyectos
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Intervención Social y Psicosocial.</b>
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Asistencia Alimentaria.</b>
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Asistencia Humanitaria.</b>
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Implementación de Iniciativas, programas y proyectos ambientales de conservación y restauración del cambio climático.</b>
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Cultura ciudadana.</b>
                                </p>
                            </div>
                        </div>
                        <div className={style.element_img}>
                            <img src={image} alt="voluntarios" className={style.img}></img>
                        </div>
                    </div>
                </div>
            </Box>
        </section>
    )
}

export default Services