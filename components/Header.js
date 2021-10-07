import Link from "next/link"
import styles from "../styles/Nav.module.css"

const Header=()=> {
    return (
        <nav className={ styles.navContainer}>
            <h2 className={ styles.navName}>Wangui</h2>
            <div className={styles.resumeContainer}>
                <Link  href="/files/curriculum vitae.pdf" target="_blank" download>Download CV</Link>
            </div>
            {/* <div className={ styles.navMenu}>
                <ul className={styles.navMenuUl } >
                    <li className={styles.navMenuLi }>
                        <Link href="/about">About Me</Link>
                    </li>
                </ul>
                <ul className={ styles.navMenuUl}>
                    <li className={styles.navMenuLi }>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
                <ul className={styles.navMenuUl}>
                    <li className={styles.navMenuLi}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div> */}
        </nav>
    )
}

export default Header
