import React from 'react'
import styles from './Footer.module.css'
import Logo from '../images/Logo-Black.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div  className={styles.container}>
            <img src={Logo} alt="" className={styles.logo}/>
            <button>Share a Car</button>
      </div>
    </div>
  )
}

export default Footer
