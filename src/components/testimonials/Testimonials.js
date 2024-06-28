import React, { useState, useEffect, useCallback, useMemo } from 'react';
import style from './Testimonials.module.css';
import { Box } from '@mui/material';

import Img_regalos from '../../assets/Testimonios/regalos.png'
import Img_raza from '../../assets/Testimonios/dia_de_la_raza.png'
import Img_arte from '../../assets/Testimonios/arte.png'


function Testimonials() {

    const Carrouser_testimonials = useMemo(() => [
        {
            src: Img_arte,
            alt: "Foto Jornada_artistica",
            title:"Arte y cultura para el Día del Niño",
            description: "“CORPPAZ realizó Jornadas Artísticas y Expresiones Culturales para los niños y niñas del Municipio de Los Patios - Norte de Santander, en el marco de la celebración del día del niño vigencia 2019.”",
        },
        {
            src: Img_raza,
            alt: "Foto dia_raza",
            title:"Celebrando el Día de la Raza con Motilón Bari",
            description: "“Tenemos una historia en la que la unión de muchas culturas y la diversidad son las protagonistas. Juntos construimos un mundo donde somos socialmente iguales, humanamente diferentes y totalmente libres. Conmemoramos el Dia de la Raza indígena con comunidad Motilón Bari del municipio de Tibú.”",
        },
        {
            src: Img_regalos,
            alt: "Foto regalos",
            title:" Alegría y regalos para niños vulnerables",
            description: "“CORPPAZ realizó Jornada de Entrega de regalos a niños poblacion vulnerable Cucuta, Villa del Rosario y Capitanejo!! Porque en el Servicio está la verdadera satisfacción del ser humano ”",
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
            }, 100000);
        }

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, [Carrouser_testimonials, imagenesCargadas, siguienteImagen]); // Dependencia del array de imágenes

    return (
        <section className={style.section}>
            <Box sx={style.box_carousel}>
                <div className={style.element_image_background}>
                    <div className={style.container_elements}>

                        <div className={style.container_carousel}>

                            {Carrouser_testimonials.map(({ src, alt, title, description }, index) => {
                                return (
                                    <>
                                        {imagenActual === index && (
                                            <div className={style.card}>
                                                <div className={style.header_card}>
                                                    <h3 className={style.h3}>{title}</h3>
                                                </div>
                                                <div className={style.content_card}>
                                                    <p className={style.p}>
                                                        {description}
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