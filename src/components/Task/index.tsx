import styles from './styles.module.css';
import { TbTrash } from 'react-icons/tb'

export function Task(){
    return(
        <div className={styles.taskContainer}>
            <button className={styles.checkContainer}>
                 <div/>
            </button>

            <p>
                Lorem ipsum dolor sit, amet?
            </p>

            <button className={styles.deleteButton}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}