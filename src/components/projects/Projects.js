import React from 'react';
import style from './Projects.module.css';
import { Box } from '@mui/material';

import Alimentos from '../../assets/Proyectos/entrega_productos.png';
import Muchas_personas from '../../assets/Proyectos/muchas_personas.png';
import Hombre from '../../assets/Proyectos/hombre.png';
import Flecha from '../../assets/Proyectos/flecha.png';

function Projects() {
    return (
        <section className={style.section} id='projects'>
            <Box sx={style.Box}>
                <div className={style.container_programs}>
                    <div className={style.element_container}>
                        <div className={style.element_text_projects}>
                            <h1 className={style.h1}><span className={style.span_title_color}>Nuestros</span> Proyectos</h1>
                        </div>
                        <div className={style.container_card}>
                            <div className={style.divisor_card}>
                                <div className={style.card}>
                                    <div className={style.image_card}>
                                        <img src={Alimentos} alt='img_campo' className={style.image}></img>
                                    </div>
                                    <div className={style.container_content_card}>
                                        <div className={style.header_card}>
                                            <h3 className={style.h3_title_card_first}>ENTREGA DE 35.771 KITS DE ALIMENTOS CON  DESTINO A POBLACIÓN VULNERABLE MIGRANTE</h3>
                                        </div>
                                        <div className={style.content_card}>
                                            <p className={style.p}>
                                                Corppaz, en alianza con la Gerencia para la Frontera Nortesantandereana y la Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD), lideró una iniciativa de asistencia humanitaria de emergencia para atender las necesidades de la población migrante vulnerable en Norte de Santander durante la vigencia 2020, en el contexto de la Declaratoria de Estado de Emergencia Económica, Social y Ecológica en todo el territorio nacional.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.divisor_card}>
                                <div className={style.card_normal}>
                                    <div className={style.container_content_card}>
                                        <div className={style.header_card}>
                                            <h3 className={style.h3_title_card_second}>FORTALECIMIENTO DE LOS MEDIOS DE VIDA  COLECTIVOS EN LA ZONA RURAL DEL MUNICIPIO  DE SAN JOSÉ DE CÚCUTA DE LA POBLACIÓN  VÍCTIMA DEL CONFLICTO ARMADO</h3>
                                        </div>
                                        <div className={style.content_card}>
                                            <p className={style.p}>
                                                Transformando la zona rural de Cúcuta en territorio  de Paz y Emprendimiento a través de la puesta en  marcha de Unidades Productivas en Líneas de  Ganadería, Cacao, Mango Tommy, Caña de Azúcar y  Apicultura
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.image_card}>
                                        <img src={Muchas_personas} alt='img_personas' className={style.image}></img>
                                    </div>
                                </div>
                                {/* formato mobile */}
                                <div className={style.card_reduced}>
                                    <div className={style.image_card}>
                                        <img src={Muchas_personas} alt='img_personas' className={style.image}></img>
                                    </div>
                                    <div className={style.container_content_card}>
                                        <div className={style.header_card}>
                                            <h3 className={style.h3_title_card_second}>FORTALECIMIENTO DE LOS MEDIOS DE VIDA  COLECTIVOS EN LA ZONA RURAL DEL MUNICIPIO  DE SAN JOSÉ DE CÚCUTA DE LA POBLACIÓN  VÍCTIMA DEL CONFLICTO ARMADO</h3>
                                        </div>
                                        <div className={style.content_card}>
                                            <p className={style.p}>
                                                Transformando la zona rural de Cúcuta en territorio  de Paz y Emprendimiento a través de la puesta en  marcha de Unidades Productivas en Líneas de  Ganadería, Cacao, Mango Tommy, Caña de Azúcar y  Apicultura
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Fin formato mobile */}
                            </div>
                            <div className={style.divisor_card_reduced}>
                            </div>
                            <div className={style.divisor_card}>
                                <div className={style.card}>
                                    <div className={style.image_card}>
                                        <img src={Hombre} alt='imagen Campo' className={style.image}></img>
                                    </div>
                                    <div className={style.container_content_card}>
                                        <div className={style.header_card}>
                                            <h3 className={style.h3_title_card_first}>MEJORAMIENTO DE LA PRODUCCIÓN AGROPECUARIA EN CORREGIMIENTOS DE CÚCUTA</h3>
                                        </div>
                                        <div className={style.content_card}>
                                            <p className={style.p}>
                                                Este proyecto impulsó la producción cárnica y láctea en los corregimientos de San Faustino y Guaramito mediante la creación de una asociación de ganaderos, capacitación en buenas prácticas y mejoramiento genético, e implementación de tecnologías como inseminación artificial y bancos de proteínas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.container_button_more}>
                            <div className={style.button_more}>
                                <a href='https://www.facebook.com/corpopaz' target='_blank' rel="noopener noreferrer" className={style.a}>Conoce más proyectos en redes<img src={Flecha} alt='flecha'></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </section>
    )
}

export default Projects