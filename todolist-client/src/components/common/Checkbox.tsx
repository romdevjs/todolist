import { ChangeEvent, FC } from 'react';

interface CheckboxProps {
  isChecked: boolean
  onChange: (value: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = ({ isChecked, onChange }) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.checked);
  const className = !isChecked ? 'checkbox' : 'checkbox checked';
  return (
    <div className={className}>
      <input type="checkbox" checked={isChecked} onChange={changeHandler}/>
      {isChecked && <span> &#10003;</span>}
    </div>
  )
}