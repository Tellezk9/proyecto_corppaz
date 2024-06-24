import React from "react";
import { Box } from "@mui/material";

import style from'./Clients.module.css';

import Alcaldia_1 from '../../assets/alcaldias/Alcaldia_1.png';
import Alcaldia_2 from '../../assets/alcaldias/Alcaldia_2.png';
import Alcaldia_3 from '../../assets/alcaldias/Alcaldia_3.png';
import Alcaldia_4 from '../../assets/alcaldias/Alcaldia_4.png';
import Alcaldia_5 from '../../assets/alcaldias/Alcaldia_5.png';

function Clients() {
    const Alcaldias = [
        {
            src: Alcaldia_1,
            alt: "Alcaldia 1"
        },
        {
            src: Alcaldia_2,
            alt: "Alcaldia 2"
        },
        {
            src: Alcaldia_3,
            alt: "Alcaldia 3"
        },
        {
            src: Alcaldia_4,
            alt: "Alcaldia 4"
        },
        {
            src: Alcaldia_5,
            alt: "Alcaldia 5"
        }
    ]

    return (
        <section>
            <Box sx={style.box_carousel}>
                <div className={style.container_carousel}>
                    {Alcaldias.map(({ src, alt }, index) => {
                        return (
                            <img src={src} alt={alt} key={index}></img>
                        )
                    })}
                </div>
            </Box>
        </section>
    )
}

export default Clients