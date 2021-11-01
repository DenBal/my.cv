import React from 'react'
import SkillsItemProps from "./types";

import styles from './SkillsItem.module.css'

const SkillsItem:React.FC<SkillsItemProps> = (props:SkillsItemProps) => {
    return (
        <div className={styles.skillsItem} data-percent={props.percent}>
            <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45"></circle>
                <circle className="cbar" cx="50" cy="50" r="45"></circle>
            </svg>
            <img src={props.url} alt={props.title} />
        </div>
    )
}

export default SkillsItem