import React, { useState, useEffect, useCallback, useMemo } from 'react';
import style from './Testimonials.module.css';
import { Box } from '@mui/material';

import Img_madre from '../../assets/Testimonios/madre.png'
import Img_anciana from '../../assets/Testimonios/anciana.png'
import Img_emprendedor from '../../assets/Testimonios/emprendedor.png'
import Img_anciano from '../../assets/Testimonios/anciano.png'


function Testimonials() {

    const Carrouser_testimonials = useMemo(() => [
        {
            src: Img_madre,
            alt: "Foto madre",
            name: "Ana María Pérez",
            profession: "madre cabeza de familia",
            testimony: "“Gracias a CORPPAZ, pude superar el trauma del desplazamiento y brindar un futuro mejor a mis hijos. Sus programas de apoyo psicosocial y capacitación laboral me dieron las herramientas para salir adelante y emprender mi propio negocio.”",
        },
        {
            src: Img_anciana,
            alt: "Foto anciana",
            name: "Doña Carmen",
            profession: "líder comunitaria del barrio La Esperanza",
            testimony: "“CORPPAZ ha sido un verdadero ángel para nuestra comunidad. Gracias a sus talleres de agricultura urbana, ahora tenemos una hermosa huerta comunitaria que nos provee de alimentos frescos y saludables. Además, hemos aprendido a trabajar juntos y a apoyarnos mutuamente, fortaleciendo nuestros lazos como vecinos.”",
        },
        {
            src: Img_emprendedor,
            alt: "Foto emprendedor",
            name: "Luis Fernando",
            profession: "joven emprendedor",
            testimony: "“Después de años de incertidumbre y dificultades, CORPPAZ me brindó la oportunidad de capacitarme en carpintería y emprender mi propio negocio. Ahora tengo un taller donde fabrico muebles y puedo sostener a mi familia con dignidad. Estoy muy agradecido por su apoyo y confianza en mi potencial.”",
        },
        {
            src: Img_anciano,
            alt: "Foto anciano",
            name: "Juan Carlos",
            profession: "desplazado interno",
            testimony: "“Llegué a Cúcuta con mi familia, buscando refugio de la violencia en nuestro pueblo. CORPPAZ fue nuestro salvavidas. Nos brindaron un lugar seguro para vivir, nos ayudaron a tramitar nuestros documentos y nos dieron herramientas para superar el trauma. Hoy, gracias a su apoyo, tengo un trabajo estable y mis hijos pueden ir a la escuela sin miedo. CORPPAZ nos devolvió la esperanza y nos permitió reconstruir nuestras vidas.”",
        },
    ], [])
    const [imagenActual, setImagenActual] = useState(0);
    const [imagenesCargadas, setImagenesCargadas] = useState(false);

    const siguienteImagen = useCallback(() => {
        setImagenActual(imagenActual => imagenActual === (Carrouser_testimonials.length - 1) ? 0 : imagenActual + 1)
    }, [Carrouser_testimonials.length]);

    const selectImagen = (index) => {
        setImagenActual(index)
    }

    useEffect(() => {
        if (!Array.isArray(Carrouser_testimonials) || Carrouser_testimonials.length === 0) {
            return
        }

        const imagenesCargando = Carrouser_testimonials.map(() => false);

        const cargarImagenes = async () => {
            await Promise.all(
                Carrouser_testimonials.map(async ({ src }, index) => {
                    const img = new Image();
                    img.src = src;
                    await new Promise((resolve) => (img.onload = resolve));
                    imagenesCargando[index] = true;

                    // Verificar si todas las imágenes han cargado después de cada carga
                    if (imagenesCargando.every(Boolean)) {
                        setImagenesCargadas(true);
                    }
                })
            );
        };

        cargarImagenes();

        // Iniciar el intervalo solo si las imágenes han cargado
        let interval;
        if (imagenesCargadas) {
            interval = setInterval(() => {
                siguienteImagen();
            }, 5000);
        }

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, [Carrouser_testimonials, imagenesCargadas, siguienteImagen]); // Dependencia del array de imágenes

    return (
        <section className={style.section}>
            <Box sx={style.box_carousel}>
                <div className={style.element_image_background}>
                    <div className={style.container_elements}>
                        <div className={style.element_text_about_us}>
                            <h2 className={style.h2}>Testimonios</h2>
                        </div>

                        <div className={style.container_carousel}>

                            {Carrouser_testimonials.map(({ src, alt, name, profession, testimony }, index) => {
                                return (
                                    <>
                                        {imagenActual === index && (
                                            <div className={style.card}>
                                                <div className={style.header_card}>
                                                    <h3 className={style.h3}>{name}, {profession}</h3>
                                                </div>
                                                <div className={style.content_card}>
                                                    <p className={style.p}>
                                                        {testimony}
                                                    </p>
                                                </div>
                                                <div className={style.image_card}>
                                                    <img src={src} alt={alt} className={style.image}></img>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )
                            })}
                            <div className={style.image_selector}>
                                {Carrouser_testimonials.map((Carrouser_testimonials, index) => {
                                    return (
                                        <>
                                            {
                                                <div onClick={() => selectImagen(index)} className={
                                                    imagenActual === index ? `${style.button_selector} ${style.active}`
                                                        : style.button_selector
                                                }></div>
                                            }
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </Box>
        </section>
    )
}

export default Testimonials