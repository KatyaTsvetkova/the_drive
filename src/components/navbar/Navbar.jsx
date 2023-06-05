import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { AiOutlineUser, AIoutlineClose, AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../../images/Logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)


    return (
        <div>
            <header className={styles.navbar}>
                <img src={Logo} alt="" className={styles.logo} />
                <nav>
                    <ul className={ nav ? [styles.menu, styles.active].join(' '): [styles.menu]}>
                        <li>
                            <a href="">Learn More</a>
                        </li>
                        <li>
                            <a href="">Log in</a>
                        </li>
                        <li>
                            <a href="">Sign up</a>
                        </li>
                        <li>
                            <AiOutlineSearch size={25} style={{ marginTop: '6px' }} />
                        </li>
                        <li>
                            <AiOutlineUser size={25} style={{ marginTop: '6px' }} />
                        </li>
                    </ul>
                </nav>
                <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

               </div>
            </header>
        </div>
    )
}

export default Navbar
