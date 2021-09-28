import { FaHtml5,FaCss3Alt,FaReact,FaSass,FaNodeJs,FaPhp,} from "react-icons/fa"
import { SiJavascript, SiNextDotJs, SiMongodb, SiMysql, SiFirebase } from "react-icons/si"
import styles from "../styles/About.module.css"

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutMainTitleContainer}>
                <h1 className={styles.aboutMainTitle}>About Me</h1></div>
            <div className={ styles.aboutMe}>
                <h2 className={styles.aboutTitle}>Who I am:</h2>
                <p>I am a web developer passionate about learning and developing websites and cross-platform mobile apps. I am constantly learning new trends and technologies. I also love to teach and mentor people in the tech industry.</p>
            </div>
            <div className={ styles.aboutJob}>
                <div>
                    <ul><li>Develop highly interactive Front end / User Interfaces for your web and mobile applications</li></ul>
                    <ul><li>Progressive Web Applications ( PWA ) and Single-page Applications.</li></ul>
                    <ul><li> Integration of third party services such as Firebase</li></ul>
                </div>    
                <h2 className={styles.aboutTitle}>What I do:</h2>
            </div>
            <div className={ styles.aboutTechnologies}>
                <h2 className={styles.aboutTitle}>Technologies I Use:</h2>
                <div className={ styles.aboutSubTech}>
                    <div>
                        <h4>Front-end Developement.</h4>
                        <div className={styles.aboutTechIcons }>
                            <p><SiJavascript/></p>
                            <p><FaReact /></p>
                            <p><SiNextDotJs/></p>
                            <p><FaHtml5/></p>
                            <p><FaCss3Alt /></p>
                            <p><FaSass /></p>
                        </div>
                    </div>
                    <div>
                        <h4>Back-end Developement.</h4>
                        <div className={styles.aboutTechIcons }>
                            <p><FaNodeJs/></p>
                            <p><FaPhp/></p>
                            <p><SiFirebase/></p>
                            <p><SiMongodb/></p>
                            <p><SiMysql /></p>
                        </div>    
                    </div>
                </div>    
            </div>
        </div>    
    );
}
export default About;
