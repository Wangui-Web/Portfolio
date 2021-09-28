import Header from "./Header"
import Hero from "./Hero"
import About from "../pages/about"
import styles from "../styles/Layout.module.css"
import Project from "../pages/projects"
import ContactUs from "../pages/contact"

const Layout=({ children})=> {
    return (
        <>
            <Header/>
            <div className={ styles.container}>
                <main className={styles.main}>
                    <Hero />
                    <About />
                    <Project />
                    <ContactUs/>
                    { children}
                </main>
            </div>
        </>    
    )
}

export default Layout
