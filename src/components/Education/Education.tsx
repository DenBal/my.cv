import React from 'react'
import data from '../../data/education.json'

import styles from './Education.module.css'

const Education:React.FC = () => {
    return (
        <section className={styles.educationSection}>
            <h3>
                Образование
            </h3>
            <div className={styles.educationBlock}>
                <h4>{data.university_programm}</h4>
                <h5>{data.university_name}</h5>
                <div className={styles.educationDates}>
                    <span>{data.education_start}</span> - <span>{data.education_end}</span>
                </div>
                <div className={styles.educationText}>
                    {data.education_text}
                </div>
            </div>
        </section>
    )
}

export default Education;