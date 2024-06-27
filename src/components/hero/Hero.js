import React from "react";
import style from './Hero.module.css';
import Header from "../header/Header";

function Hero() {

    return (
        <section className={style.section}>
            <Header></Header>
            <div className={style.container_banner}>
                <div className={style.elementor_widget_warp}>
                    <div className={style.elementor_widget_warp_2}></div>
                    <div className={style.container_text}>
                        <h1 className={style.title}>Corppaz</h1>
                        <h1 className={style.h1}>Unión que transforma</h1>
                        <h2 className={style.h2}>Una Organizacion sin animo de lucro que impulsa el desarrollo social</h2>
                    </div>
                    <div className={style.elementor_widget_warp_3}></div>
                    <div className={style.elementor_widget_warp_3}></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;