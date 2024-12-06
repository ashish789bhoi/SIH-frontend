import React from 'react'
import './Header2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';


function Header2() {

    return (
        <div>
            <nav>
                <div className='logo' >
                    <img src='/images/logo-main.png' alt="logo" />
                </div>

                <div className='search'>
                    <input
                        type="text"
                        placeholder='Search'
                        value=''
                        className="search-input"
                    />
                    <button className='fa-search'>
                    <FontAwesomeIcon 
                        icon={faSearch}
                    />
                    </button>

                    <div >
                        <button className='faBell'><FontAwesomeIcon icon={faBell} />What's New</button>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Header2;