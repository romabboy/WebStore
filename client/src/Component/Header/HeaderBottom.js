import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

export default function HeaderBottom() {


  return (
    <div className="headerBottom__container container">
        <div className="headerBottom__logo"></div>
          <Search />
        <div className="headerBottom__detail">
            <Link className="headerBottom__like" to={"/like"}>like</Link>
            <Link className="headerBottom__bag" to={"/bag"}>bag</Link>
            <Link className="headerBottom__profile" to={"/profile"}>profile</Link>
        </div>
    </div>
  )
}
