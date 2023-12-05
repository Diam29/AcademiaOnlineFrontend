import React from 'react'
import Logo from '../../assets/LogoAO.png'
import SearchBar from '../SearchBar/SearchBar'
import { BsSuitHeart } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='container-fluid'>

            <div className='container__box'>
                <Link to='/' className='link__logo' onClick={() => window.location.reload()}>
                    <img src={Logo} alt="Logo Academia Online" className='rounded-pill' />
                    <span className="navbar__text" >Academia OnLine</span>
                </Link>
                <div className='search__div'>
                    <SearchBar />
                </div>
                <NavLink to='/favorite' className='favorite__icon'>
                    <BsSuitHeart className='icon' />
                </NavLink>
                <div className='avatar__user'>

                </div>
            </div>

        </nav >

    );
}

export default Navbar