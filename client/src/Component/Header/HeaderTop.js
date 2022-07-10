import React from 'react';
import { Link } from 'react-router-dom';
import phone from "../../SVG/phone.svg"
import delivery from "../../SVG/delivery.svg"

export function HeaderTop() {
  return (
    <div className="headerTop">
        <div className="headerTop__container container">
            <nav className="headerTop__nav">
                <Link to={"/"}>Головна</Link>
                <Link to={"/aboutUs"}>Про нас</Link>
                <Link to={"/contact"}>Контакти</Link>
            </nav>
            
            <ul className="headerTop__list">
                <li className="headerTop__link">
                    <img src={phone} alt="" className="headerTop__img" />
                    <a href="tel:+380996754715">+380996754715</a>
                </li>
                <li className="headerTop__link">
                    <img src={delivery} alt="" className="headerTop__img" />
                    <Link to={"/delivery"}>Доставка</Link>
                </li>
            </ul>
        
        </div>
    </div>
    )
}
