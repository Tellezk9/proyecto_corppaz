import React from "react";
import { Box } from "@mui/material";

import style from'./Clients.module.css';

import Agricultura from '../../assets/Clients/Agricultura_gris.png';
import Fidaguria from '../../assets/Clients/fiduagraria_gris.png';
import Gobernacion_santander from '../../assets/Clients/Santander_logo_gris.png';
import Alianza_productiva from '../../assets/Clients/Alianzas_gris.png';
import Presidencia from '../../assets/Clients/presidencia_gris.png';
import Insumos from '../../assets/Clients/Faia_gris.png';

function Clients() {
    const Clients_images = [
        {
            src: Agricultura,
            alt: "logo_Agricultura"
        },
        {
            src: Fidaguria,
            alt: "logo_Fidaguria"
        },
        {
            src: Gobernacion_santander,
            alt: "logo_Gob_santander"
        },
        {
            src: Alianza_productiva,
            alt: "logo_alianza"
        },
        {
            src: Presidencia,
            alt: "logo_presidencia"
        },
        {
            src: Insumos,
            alt: "logo_insumos"
        }
    ]
    return (
        <section>
            <Box sx={style.box_carousel}>
                <div className={style.container_carousel}>
                    {Clients_images.map(({ src, alt }, index) => {
                        return (
                            <img src={src} alt={alt} key={index} className={style.img}></img>
                        )
                    })}
                </div>
            </Box>
        </section>
    )
}

export default Clients