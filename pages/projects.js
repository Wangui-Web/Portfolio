import { useState } from "react"
import Link from "next/link"
import {screenShotData} from "../data"
import {GrPrevious,GrNext } from "react-icons/gr"
import styles from "../styles/Project.module.css"

const Project = () => {
    const [current,setCurrent]=useState(0);
    const NextArrow = () => {
        setCurrent(current ===  screenShotData.length -1 ? 0 :current +1)
    }
    const PrevArrow = () => {
        setCurrent(current === 0? screenShotData.length -1 :current -1)
    }
    
    return(
        <div className={styles.projectContainer}>
            <h1 className={ styles.projectMainTitle}>Projects.</h1>
            <div className={ styles.projectSubContainer}>
                <GrPrevious className={ styles.projectArrows} onClick={PrevArrow}/>
                {screenShotData.map((project,index)=>{
                    return(
                        <>
                            <div className={index === current ? styles.slideActive : styles.slide} key={index}>
                                {index === current && (<h2 className={ styles.projectSubTitle}>{project.alt}</h2>)}
                                {index === current && (<img className={ styles.projectImage} src={project.image} alt={project.alt} />)}
                                {index === current && (<p className={styles.projectDetails}>{project.details}</p>)}
                                <div className={ styles.projectLinks}>
                                    {index === current && (<Link className={styles.projectLink} href={project.link}>View Project</Link>)}
                                    {index === current && (<Link className={styles.projectLink} href={project.gitlink}>Github Repo</Link>)}
                                </div>    
                            </div>
                        </>
                    )
                })}
                <GrNext className={ styles.projectArrows} onClick={NextArrow} />
            </div>    
        </div>
    )    
}
export default Project;