import React from 'react'
import HistoryItem from './HistoryItem/HistoryItem'
import data from './data.json'

import styles from './History.module.css'

const History:React.FC = () => {
    return(
        <div className={styles.history}>
            <h2>Опыт работы</h2>
            <div className={styles.historyBlock}>
                {data.map(item => (
                    <HistoryItem
                        job={item.job}
                        company={item.company}
                        dateStart={item.dateStart}
                        dateEnd={item.dateEnd}
                        comment={item.comment}
                        profit={item.profit}
                    />
                ))}
            </div>
        </div>
    )
}

export default History;