import styles from './styles.module.css';
import { Task } from '../Task';

export function Tasks(){
    return(
        <section className={styles.taskContainer}>
            <header className={styles.headerContainer}>
                <div className={styles.header}>
                    <p>Tarefas criadas</p>
                    <span>10</span>
                </div>

                <div className={styles.header}>
                    <p className={styles.textPurple}>Concluidas</p>
                    <span>2 de 10</span>
                </div>
            </header>

            <div className={styles.taskList}>
                <Task/>
                <Task/>
            </div>
        </section>
    )
}