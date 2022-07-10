import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderNavigate() {
  return (

        <div className="headerNavigate__container container">
            <nav className="headerNavigate__navbar">
                <li>
                    <img className='headerNavigate__img' src="" alt="" />
                    <Link className='headerNavigate__link' to={process.env.REACT_APP_LINK_PULT}>Пульти</Link>
                </li>
                <li>
                    <img className='headerNavigate__img' src="" alt="" />
                    <Link className='headerNavigate__link' to={process.env.REACT_APP_LINK_TVBOX}>Приставки</Link>
                </li>
                <li>
                    <img className='headerNavigate__img' src="" alt="" />
                    <Link className='headerNavigate__link' to={"#"}>link</Link>
                </li>
                <li>
                    <img className='headerNavigate__img' src="" alt="" />
                    <Link className='headerNavigate__link' to={"#"}>link</Link>
                </li>
                <li>
                    <img className='headerNavigate__img' src="" alt="" />
                    <Link className='headerNavigate__link' to={"#"}>link</Link>
                </li>
                <li>
                    <img className='headerNavigate__img' src="" alt="" />
                    <Link className='headerNavigate__link' to={"#"}>link</Link>
                </li>
                <li>
                    <img className='headerNavigate__img' src="" alt="" />
                    <Link className='headerNavigate__link' to={"#"}>link</Link>
                </li>
                <li>
                    <img className='headerNavigate__img' src="" alt="" />
                    <Link className='headerNavigate__link' to={"#"}>link</Link>
                </li>
            </nav>
        </div>

    )
}
