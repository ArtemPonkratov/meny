import React from 'react'
import { Link } from 'react-router-dom'
import "../src/navi.css"


export default function Nav() {
  return (
    <div>

        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/delivery">Доставка</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
