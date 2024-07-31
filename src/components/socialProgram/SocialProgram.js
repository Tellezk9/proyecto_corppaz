import style from './SocialProgram.module.css'


import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Acta_corppaz from '../../assets/SocialProgram/ACTA_CORPPAZ_007_AUTORIZACION_TRAMITE_RLEGAL_REGIMEN_ESPECIAL.pdf';
import Acta_estatutaria from '../../assets/SocialProgram/ACTA_ESTATUTARIA_CORPPAZ_1_11zon.pdf';
import Certificacion_antecedentes from '../../assets/SocialProgram/CERTIFICACIÓN_DE_LOS_ANTECEDENTES_JUDICIALES_Y_DECLARACIÓN_DE_CADUCIDAD_DE_CONTRATOS_ESTATALES_CORPPAZ.pdf';
import Certificado_cumplimiento from '../../assets/SocialProgram/CERTIFICADO_CUMPLIMIENTO_REQUISITOS_NUMERAL_13_CORPPAZ.pdf';
import Estados_financieros from '../../assets/SocialProgram/ESTADOS_FINANCIEROS_2023.pdf';
import Existencia_corppaz from '../../assets/SocialProgram/EXISTENCIA_CORPAZZ.pdf';
import Renta_corppaz from '../../assets/SocialProgram/RENTA_CORPAZ_2023.pdf';
import Estatutos_corppaz from '../../assets/SocialProgram/ESTATUTOS_CORPPAZ.pdf';
import Informe_gestion from '../../assets/SocialProgram/INFORME_DE_GESTION_CORPPAZ_2023_RESPONSABILIDAD_SOCIAL.pdf';
import { Box } from '@mui/material';

function SocialProgram() {
    return (
        <section className={style.section}>
            <div className={style.container}>

                <h1 className={style.h1}>Transparencia y Cumplimiento</h1>
                <p className={style.p}>
                    En CORPPAZ, estamos comprometidos con la transparencia y la rendición de cuentas en todas nuestras acciones. Creemos que la transparencia es fundamental para construir confianza con nuestros donantes, colaboradores, beneficiarios y la comunidad en general. Por eso, ponemos a disposición del público toda la información relevante sobre nuestra organización, incluyendo nuestros estados financieros, informes de auditoría, documentos legales y detalles de nuestros proyectos.
                </p>
                <p className={style.p}>
                    Creemos en el poder de la colaboración y la participación ciudadana para lograr un cambio social positivo. Por ello, trabajamos en alianza con diversas instituciones gubernamentales y organizaciones de la sociedad civil para maximizar nuestro impacto y llegar a más personas en situación de vulnerabilidad.
                </p>
                <p className={style.p}>
                    Nuestros proyectos se enfocan en áreas clave como la seguridad alimentaria, el desarrollo agropecuario, el emprendimiento y la construcción de paz en comunidades afectadas por el conflicto armado. Buscamos generar oportunidades, fortalecer capacidades y promover la inclusión social para construir un futuro más equitativo y sostenible para todos.
                </p>
                <Box className={style.box}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon="▼"
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography><h4>Documentos Legales</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={style.lu}>
                                <li>
                                    <p className={style.p}>Acta CORPPAZ 007: Autorización de trámite de régimen legal especial.
                                        <a href={Acta_corppaz} download className={style.a}>(Descargar PDF)</a>
                                    </p>
                                </li>

                                <li>
                                    <p className={style.p}>Acta Estatutaria CORPPAZ: Acta estatutaria de CORPPAZ.
                                        <a href={Acta_estatutaria} download className={style.a}>(Descargar PDF)</a>
                                    </p>
                                </li>

                                <li>
                                    <p className={style.p}>Certificación de Antecedentes: Certificación de los antecedentes judiciales y declaración de caducidad de contratos estatales de CORPPAZ.
                                        <a href={Certificacion_antecedentes} download className={style.a}>(Descargar PDF)</a>
                                    </p>
                                </li>

                                <li>
                                    <p className={style.p}>Estatutos CORPPAZ: Estatutos de la organización.
                                        <a href={Estatutos_corppaz} download className={style.a}>(Descargar PDF)</a>
                                    </p>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon="▼"
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography><h4>Certificados y Estados Financieros</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={style.lu}>
                                <li>
                                    <p className={style.p}>Certificado de Cumplimiento: Certificado de cumplimiento de requisitos numeral 13 de CORPPAZ.
                                        <a href={Certificado_cumplimiento} download className={style.a}>(Descargar PDF)</a>
                                    </p>
                                </li>

                                <li>
                                    <p className={style.p}>Estados Financieros 2023: Estados financieros de CORPPAZ correspondientes al año 2023.
                                        <a href={Estados_financieros} download className={style.a}>(Descargar PDF)</a>
                                    </p>
                                </li>

                                <li>
                                    <p className={style.p}>Renta CORPPAZ 2023: Declaración de renta de CORPPAZ correspondiente al año 2023.
                                        <a href={Renta_corppaz} download className={style.a}>(Descargar PDF)</a>
                                    </p>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon="▼"
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography><h4>Otros Documentos</h4></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={style.lu}>
                                <li>
                                    <p className={style.p}>Existencia CORPPAZ: Documento que certifica la existencia legal de CORPPAZ.
                                        <a href={Existencia_corppaz} download className={style.a}>(Descargar PDF)</a>
                                    </p>
                                </li>
                                <li>
                                    <p className={style.p}>Informe de Gestión CORPPAZ 2023: Responsabilidad Social.
                                        <a href={Informe_gestion} download className={style.a}>(Descargar PDF)</a>
                                    </p>
                                </li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </Box>

            </div >
        </section>
    )
}

export default SocialProgram;
