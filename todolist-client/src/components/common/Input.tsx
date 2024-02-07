import { FC, InputHTMLAttributes } from 'react';
import { Color } from '../../types/Color';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?:Color
  editMode?:boolean
}

export const Input: FC<InputProps> = ({placeholder, color, className, editMode, ...props }) => {
  const modification = color ? `text-field_${color}` : '';
  const editModeClassName = editMode ? 'text-field_edit' : '';
  const styles = `text-field ${modification} ${editModeClassName}`;

  return (
    <div className={className ? `${styles} ${className}` : styles}>
      <input className="text-field__input" {...props}/>
      <span className="text-field__label">{placeholder}</span>
    </div>
  )
}