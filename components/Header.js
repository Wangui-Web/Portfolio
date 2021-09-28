import Link from "next/link"
import styles from "../styles/Nav.module.css"

const Header=()=> {
    return (
        <nav className={ styles.navContainer}>
            <h2>Wangui</h2>
            <div className={ styles.navMenu}>
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
            </div>
        </nav>
    )
}

export default Header
