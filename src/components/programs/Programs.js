import React from "react";
import { Box } from "@mui/material";

import style from './Programs.module.css';

import image from '../../assets/Programas/voluntarios.png'

function Programs() {
    return (
        <section>
            <Box sx={style.box}>
                <div className={style.container_programs}>
                    <div className={style.container_elements}>
                        <div className={style.elements_text}>
                            <div className={style.title_section}>
                                <h2 className={style.h2}>Programas</h2>
                            </div>
                            <div className={style.paragraph_section}>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Apoyo a víctimas del conflicto y posconflicto:</b> Programas de atención psicosocial, asesoría legal y reintegración económica.
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Programas para la niñez, infancia y adolescencia:</b>  Educación, protección y desarrollo de habilidades para la vida.
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Atención a adultos mayores:</b> Servicios de cuidado, acompañamiento y actividades recreativas.
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Programas para personas con discapacidad:</b> Promoción de la inclusión y acceso a oportunidades.
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Proyectos productivos:</b> Apoyo a emprendimientos y generación de ingresos en comunidades vulnerables.
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Educación familiar:</b> Fortalecimiento de los lazos familiares y promoción de una crianza positiva.
                                </p>
                                <p className={style.paragraph}>
                                    <b><span className={style.middle_point}>&#183;</span>Prevención y promoción de la salud:</b> Campañas de sensibilización y servicios de salud.
                                </p>
                            </div>
                        </div>
                        <div className={style.element_img}>
                            <img src={image} alt="voluntarios"></img>
                        </div>
                    </div>
                </div>
            </Box>
        </section>
    )
}

export default Programs