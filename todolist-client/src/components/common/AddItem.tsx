import { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

interface AddItemProps {
  clickHandler: (value: string) => void
  maxValueLength: number
  placeholder?:string
}

export const AddItem: FC<AddItemProps> = ({ maxValueLength, clickHandler, placeholder }) => {
  const [value, setValue] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const pressKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  const handleClick = () => {
    if (!(value.length === 0 || value.length > maxValueLength)) {
      clickHandler(value);
    }
  }


  return (
    <div className="adding">
      <Input
        error={value.length > maxValueLength}
        onChange={changeHandler} value={value}
        onKeyDown={pressKeyHandler}
        type="text"
        placeholder={placeholder || 'New todolist'}
      />

      <Button
        onClick={handleClick}
        disabled={value.length === 0 || value.length > maxValueLength}
        circle
      />
    </div>
  )
}