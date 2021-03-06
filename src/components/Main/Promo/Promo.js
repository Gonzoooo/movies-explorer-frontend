import React from "react";
import "./Promo.css";

function Promo() {
    return (
        <div className="promo">
            <div className="promo_info">
                <h1 className="promo_info-header">
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <h2 className="promo_info-text">
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                </h2>
                <a href="#project" className="promo_info-link">
                    Узнать больше
                </a>
            </div>
            <div className="promo_img" />
        </div>
    );
}

export default Promo;
