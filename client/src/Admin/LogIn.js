import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
  return (
    <div className='LogIn'>
        <ul className="LogIn__list">
            <li className="LogIn__li">
                <Link to={"/admin/add"}>
                    add
                </Link>
            </li>
            <li className="LogIn__li">
                <Link to={"/admin/update"}>
                    update
                </Link>
            </li>
            <li className="LogIn__li">
                <Link to={"/admin/remove"}>
                    remove
                </Link>
            </li>
        </ul>
    </div>
  )
}
