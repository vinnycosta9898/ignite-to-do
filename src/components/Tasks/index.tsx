import styles from './styles.module.css';
import { ITask } from '../../App';
import { Task } from '../Task';

interface Props{
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onCompleted} : Props){
    const tasksQuantity = tasks.length
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return(
        <section className={styles.taskContainer}>
            <header className={styles.headerContainer}>
                <div className={styles.header}>
                    <p>Tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div className={styles.header}>
                    <p className={styles.textPurple}>Concluidas</p>
                    <span>
                        {completedTasks} de {tasksQuantity}
                    </span>
                </div>
            </header>

            <div className={styles.taskList}>
                {tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        onDelete={onDelete}
                        onCompleted={onCompleted}
                    />
                ))}
            </div>
        </section>
    )
}