import React from 'react';
import style from './Projects.module.css';
import { Box } from '@mui/material';

import Feria from '../../assets/Proyectos/Feria.png';
import Verduras from '../../assets/Proyectos/verduras.png';
import Cena from '../../assets/Proyectos/cena.png';
import Campo from '../../assets/Proyectos/campo.png';
import Flecha from '../../assets/Proyectos/flecha.png';

function Projects() {
    return (
        <section className={style.section}>
            <Box sx={style.Box}>
                <div className={style.element_container}>
                    <div className={style.element_text_projects}>
                        <h2>Proyectos</h2>
                    </div>
                    <div className={style.container_card}>
                        <div className={style.divisor_card}>
                            <div className={style.card}>
                                <div className={style.header_card}>
                                    <h3>Jornadas de Inclusión Económica para Pequeños Productores</h3>
                                </div>
                                <div className={style.content_card}>
                                    <p className={style.p}>
                                        Brinda información y facilita el acceso a programas y beneficios gubernamentales para pequeños productores agrícolas, especialmente en las líneas de café e integral.
                                    </p>
                                </div>
                                <div className={style.image_card}>
                                    <img src={Campo} alt='imagen Campo' className={style.image}></img>
                                </div>
                            </div>
                            <div className={style.card}>
                                <div className={style.header_card}>
                                    <h3>Jornadas de Inclusión Económica para Pequeños Productores</h3>
                                </div>
                                <div className={style.content_card}>
                                    <p className={style.p}>
                                        Fomenta el espíritu comunitario, preserva las tradiciones navideñas y promueve el bienestar social en las comunidades.
                                    </p>
                                </div>
                                <div className={style.image_card}>
                                    <img src={Cena} alt='imagen Campo' className={style.image}></img>
                                </div>
                            </div>
                        </div>
                        <div className={style.divisor_card}>
                            <div className={style.card}>
                                <div className={style.header_card}>
                                    <h3>Jornadas de Inclusión Económica para Pequeños Productores</h3>
                                </div>
                                <div className={style.content_card}>
                                    <p className={style.p}>
                                        Celebra la cultura campesina, reconoce el trabajo de las personas dedicadas al campo y promueve el desarrollo económico local.
                                    </p>
                                </div>
                                <div className={style.image_card}>
                                    <img src={Feria} alt='imagen Campo' className={style.image}></img>
                                </div>
                            </div>
                            <div className={style.card}>
                                <div className={style.header_card}>
                                    <h3>Jornadas de Inclusión Económica para Pequeños Productores</h3>
                                </div>
                                <div className={style.content_card}>
                                    <p className={style.p}>
                                        Fortalece la seguridad alimentaria en comunidades vulnerables de Cúcuta, empoderando a las familias para cultivar sus propios alimentos en huertas comunitarias sostenibles. A través de capacitación y recursos, se mejora la nutrición y se generan ingresos adicionales
                                    </p>
                                </div>
                                <div className={style.image_card}>
                                    <img src={Verduras} alt='imagen Campo' className={style.image}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.container_button_more}>
                        <div className={style.button_more}>
                            <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer" className={style.a}>Conoce más proyecos en redes<img src={Flecha} alt='flecha'></img></a>

                        </div>
                    </div>
                </div>
            </Box>
        </section>
    )
}

export default Projects