import React from 'react'
import SkillsItem from "../SkillsItem/SkillsItem";
import SkillsProps from "./types";

import styles from './SkillsBlock.module.css'

const SkillsBlock:React.FC<SkillsProps> = (props:SkillsProps) => {
    return (
        <div className={styles.skillsBlock}>
            <h4>{props.name}</h4>
            {props.data.map((skill:any) => (
                <SkillsItem
                    percent={skill.percent}
                    url={skill.url}
                    title={skill.title}
                />
            ))}
        </div>
    )
}

export default SkillsBlock