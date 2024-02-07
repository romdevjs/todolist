import { ChangeEvent, FC } from 'react';
import { Color } from '../../types/Color';

interface CheckboxProps {
  isChecked: boolean
  onChange: (value: boolean) => void
  className?:string
  color?:Color
}

export const Checkbox: FC<CheckboxProps> = ({ className,isChecked, color, onChange }) => {
  const checkedClassName = isChecked ? 'checked' : '';
  const modification = color ? `btn_${color} checbox_${color}` : '';
  const iconModification = color ? `checkbox__icon_${color}` : '';
  const styles = `btn checkbox ${checkedClassName} ${modification}`;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(!e.currentTarget.checked);

  return (
    <button className={className ? `${styles} ${className}` : styles}>
      <div className="checkbox__wrapper">
        <input className='checkbox__input' type="checkbox" checked={isChecked} onChange={changeHandler}/>
        <div className={`checkbox__icon ${iconModification}`}>
          {isChecked && <span>&#10003;</span>}
        </div>
        <div className="btn__background"/>
      </div>
    </button>
  )
}