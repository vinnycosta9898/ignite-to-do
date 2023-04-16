import { ChangeEvent, InvalidEvent, useState } from 'react';
import styles from './styles.module.css'
import logoImg from '../../assets/rocket.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FormEvent } from 'react';

interface Props{
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask } : Props){
    const [title, setTitle] = useState("");
    const isSubmitDisabled = !title;
    
    function handleCreateTask(event: FormEvent){
        event.preventDefault();
        onAddTask(title)
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
    }

    function handleTaskInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity("Digite uma tarefa!")
    }

    return(
        <header className={styles.headerContainer} onSubmit={handleCreateTask}>
            <img src={logoImg} alt="Logo de Foguete" />
            <span>to</span> <span>do</span>

            <form className={styles.taskForm}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova Tarefa"
                    onChange={onChangeTitle}
                    value={title}
                    required
                    onInvalid={handleTaskInvalid}
                />
                <button disabled={isSubmitDisabled}>
                    Criar
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}