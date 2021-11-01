import React from 'react'
import SkillsBlock from './SkillsBlock/SkillsBlock'

import styles from './Skills.module.css'
import frontSkills from '../../data/frontend_skills.json'

const Skills:React.FC = () => {
    return (
        <section className={styles.skills}>
            <h3>
                Навыки
            </h3>
            <div className={styles.skillsWrapper}>
                <SkillsBlock name={'Frontend'} data={frontSkills} />
            </div>
        </section>
    )
}

export default Skills