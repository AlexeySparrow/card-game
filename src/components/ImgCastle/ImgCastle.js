import React from "react";
import style from "./ImgCastle.module.scss";

import imgDark from "../../assets/img/dark.png";
import imgLight from "../../assets/img/light.png";

export const ImgCastle = () => {
    return (
        <section className={style.container}>
            <img src={imgDark} alt=""/>
            <img src={imgLight} alt=""/>
        </section>
    )
}
