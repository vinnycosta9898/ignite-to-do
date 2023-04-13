import styles from './styles.module.css';
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { ITask } from '../../App';


interface Props{
    task: ITask;
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}

export function Task({ task, onDelete, onCompleted }:Props){
    return(
        <div className={styles.taskContainer}>
            <button className={styles.checkContainer} onClick={() => onCompleted(task.id)}>
                 {task.isCompleted ? <BsFillCheckCircleFill/> : <div/>}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>

            <button 
                className={styles.deleteButton} 
                onClick={() => onDelete(task.id)}
            >
                <TbTrash size={20}/>
            </button>
        </div>
    )
}