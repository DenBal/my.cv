import React from 'react'
import SkillsItem from "./SkillsItem/SkillsItem";
import SkillsProps from "./types";

import styles from './Skills.module.css'

const Skills:React.FC<SkillsProps> = (props:SkillsProps) => {
    return (
        <>
            {props.data.map((skill:any) => (
                <SkillsItem
                    percent={skill.percent}
                    url={skill.url}
                    title={skill.title}
                />
            ))}
        </>
    )
}