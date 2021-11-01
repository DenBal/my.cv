import React from 'react'
import History from '../../components/History/History'

import styles from './Personal.module.css'

const Personal:React.FC = () => {
    return (
        <div className={styles.personalLayout}>
            <History />
        </div>
    )
}

export default Personal