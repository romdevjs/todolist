import { FC } from 'react';
import { TaskDTO } from '../../types/TaskDTO';

interface TaskListProps {
  tasks: TaskDTO[]
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul className="tasks">
      {
        tasks.map(t => (
          <li key={t.id} className="tasks__item">
            <div className={`tasks__item-checkbox ${t.isActive && 'checked'}`}>
              <input type="checkbox" checked={t.isActive}/>
              {t.isActive && <span> &#10003;</span>}
            </div>

            <h4 className="tasks__item-title">{t.title}</h4>
            <button>X</button>
          </li>
        ))
      }
    </ul>
  )
}