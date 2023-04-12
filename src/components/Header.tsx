import styles from './styles.module.css'
import logoImg from '../assets/rocket.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <img src={logoImg} alt="Logo de Foguete" />
            <span>to</span> <span>do</span>

            <form className={styles.taskForm}>
                <input type="text" placeholder="Adicione uma nova Tarefa"/>
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}