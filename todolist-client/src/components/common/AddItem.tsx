import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { Input } from './Input';
import { IconButton } from './IconButton';

interface AddItemProps {
  onClick: (value: string) => void
  maxValueLength: number
  className?: string
  color?: 'primary' | 'secondary' | 'success'
}

export const AddItem: FC<AddItemProps> = ({ className, color, maxValueLength, onClick }) => {
  const [value, setValue] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const pressKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  const handleClick = () => {
    if (!(value.length === 0 || value.length > maxValueLength)) {
      onClick(value);
    }
  }


  return (
    <div className={className ? `adding ${className}` : 'adding'}>
      <Input
        color={value.length > maxValueLength ? 'error' : color}
        onChange={changeHandler} value={value}
        onKeyDown={pressKeyHandler}
        type="text"
        placeholder='Title'
      />

      <IconButton
        onClick={handleClick}
        disabled={value.length === 0 || value.length > maxValueLength}
        color={value.length > maxValueLength ? 'error' : color}
      />
    </div>
  )
}