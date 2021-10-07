import {useState, useEffect} from "react"
import Link from "next/link"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import styles from "../styles/Hero.module.css"

const Hero = () => {
    const [loaded,setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    },[])
    return (
        <div className={styles.heroContainer}>
            <div className={styles.socialMedia}>
                <div className={styles.socialMediaIcons}>
                    <Link href="https://www.linkedin.com/in/christine-wangui-65468120a"><FaLinkedin /></Link>
                </div>
                <div className={styles.socialMediaIcons}>
                    <Link href="https://www.twitter.com/wangui_wamutitu"><FaTwitter /></Link>
                </div>
                <div className={styles.socialMediaIcons}>
                    <Link href="https://github.com/Wangui-Web"><FaGithub /></Link>
                </div>    
            </div>
            <div className={ styles.descriptionRight}>
                <div className={ styles.myPic}>
                    
                </div>
                <div className={ loaded ? styles.description : styles.noDescription }>
                    <h1 className={styles.name}>Christine <span className={ styles.spanName}>Wangui </span>.</h1>
                    <h3 className={styles.job}>A Full-Stack Web Developer</h3>
                    <div>
                        <p className={styles.details}>Hello there! I design,develop and maintain amazing and interactive websites for you.</p>
                        <p className={styles.details}>Take a look at my work and be the judge.</p>
                    </div>    
                </div>
            </div>
        </div>
    )  
}
export default Hero