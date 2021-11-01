import React from 'react'
import History from '../../components/History/History'
import Education from '../../components/Education/Education'

import styles from './Personal.module.css'

const Personal:React.FC = () => {
    return (
        <div className={styles.personalLayout}>
            <History />
            <Education/>
        </div>
    )
}

export default Personal