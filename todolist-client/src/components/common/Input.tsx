import { FC, InputHTMLAttributes, LegacyRef, useEffect, useState } from 'react';
import { Color } from '../../types/Color';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: Color
  editMode?: boolean
  inputRef?: LegacyRef<HTMLInputElement>
}

export const Input: FC<InputProps> = ({ placeholder, color, className, editMode, inputRef, ...props }) => {
  const [ref, setRef] = useState<LegacyRef<HTMLInputElement>>(null)
  const modification = color ? `text-field_${color}` : '';
  const editModeClassName = editMode ? 'text-field_edit' : '';
  const styles = `text-field ${modification} ${editModeClassName}`;

  useEffect(() => {
    if (inputRef) {
      setRef(inputRef);
    }
  }, [inputRef])

  return (
    <div className={className ? `${styles} ${className}` : styles}>
      <input ref={ref} placeholder={placeholder} className="text-field__input" {...props}/>
      <span className="text-field__label">{placeholder}</span>
    </div>
  )
}