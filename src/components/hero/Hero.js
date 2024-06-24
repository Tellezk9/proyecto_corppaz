import React, { useState, useEffect, useRef } from "react";
import style from './Hero.module.css';
import { Box, Container } from '@mui/material';

function Hero() {

    return (
        <section className={style.section}>
            <div className={style.container_banner}>
                <div className={style.elementor_widget_warp}>
                    <div className={style.elementor_image_background}>
                        <div  className={style.elementor_widget_warp_1}>
                            <div className={style.elementor_widget_warp_2}></div>
                            <div className={style.container_text}>
                                <h1 className={style.h1}>CORPPAZ</h1>
                                <h2 className={style.h2}>Empoderando comunidades, construyendo un futuro más brillante.</h2>
                            </div>
                            <div className={style.elementor_widget_warp_3}></div>
                            <div className={style.elementor_widget_warp_3}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;