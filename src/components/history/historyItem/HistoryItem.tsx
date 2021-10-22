import React from 'react'
import {HistoryItemProps} from "./types";

import styles from './HistoryItem.module.css'

const HistoryItem:React.FC<HistoryItemProps> = (props: HistoryItemProps) => {
    return (
        <div className={styles.itemBlock}>
            <h3>{props.job}, {props.company}</h3>
            <div className={styles.itemDates}>
                {props.dateStart} - {props.dateEnd}
            </div>
            <p>
                {props.comment}
            </p>
            <h3>Достижения</h3>
            {props.profit &&
                <ul>
                    {props.profit.map((item: any) => (
                        <li>{item}</li>
                    ))}
                </ul>
            }
        </div>
    )
}