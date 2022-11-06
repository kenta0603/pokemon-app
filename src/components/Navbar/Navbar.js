import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className='logo'>
        <h3>ポケモンAPIで遊ぶ</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">ポケモン図鑑</Link>
          </li>
          <li>
            <Link to="/quiz">ポケモンクイズ</Link>
          </li>
        </ul>
      </nav>   
    </header>
  )
}

export default Navbar