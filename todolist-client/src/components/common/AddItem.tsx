import { ChangeEvent, FC, KeyboardEvent, LegacyRef, useState } from 'react';
import { Input } from './Input';
import { IconButton } from './IconButton';

interface AddItemProps {
  onClick: (value: string) => void
  maxValueLength: number
  className?: string
  color?: 'primary' | 'secondary' | 'success'
  disabled?: boolean
  inputRef?: LegacyRef<HTMLInputElement>
}

export const AddItem: FC<AddItemProps> = ({ className, color, maxValueLength, onClick, inputRef, disabled }) => {
  const [value, setValue] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const pressKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
      setValue('');
    }
  }

  const handleClick = () => {
    if (!(value.length === 0 || value.length > maxValueLength)) {
      onClick(value);
      setValue('');
    }
  }

  return (
    <div className={className ? `adding ${className}` : 'adding'}>
      <Input
        color={value.length > maxValueLength ? 'error' : color}
        onChange={changeHandler} value={value}
        onKeyDown={pressKeyHandler}
        type="text"
        placeholder="Title"
        disabled={disabled}
        inputRef={inputRef}
      />

      <IconButton
        onClick={handleClick}
        disabled={value.length === 0 || value.length > maxValueLength || disabled}
        color={value.length > maxValueLength ? 'error' : color}
      />
    </div>
  )
}