import { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
import { Input } from './Input';

interface EditTitleProps {
  title: string
  changeTitle: (value: string) => void
  className?: string
  maxValueLength: number
}

export const EditTitle: FC<EditTitleProps> = ({ className, maxValueLength, changeTitle, title }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(title);

  const doubleClickHandler = () => setIsEditMode(true);
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
  const offEditMode = () => {
    setValue(title);
    setIsEditMode(false);
  };
  const keyBoardHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value.length > 0 && value.length <= maxValueLength) {
        changeTitle(value);
        setIsEditMode(false);
      }
    }

    if (e.key === 'Delete') setValue('');
    if (e.key === 'Escape') offEditMode();
  };
  const blurHandler = () => offEditMode();

  return (
    <>
      {
        isEditMode &&
        <Input
          onChange={changeValue}
          onKeyDown={keyBoardHandler}
          onBlur={blurHandler}
          value={value}
          color={value.length === 0 || value.length > maxValueLength ? 'error' : 'primary'}
          autoFocus
          placeholder='Title'
          editMode
        />
      }
      {!isEditMode && <h4 className={className} onDoubleClick={doubleClickHandler}>{title}</h4>}
    </>
  )
}