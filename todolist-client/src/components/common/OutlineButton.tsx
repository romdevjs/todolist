import { ButtonHTMLAttributes, FC } from 'react';

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text:string
  color?:Color
}

type Color = 'primary' | 'success';

export const OutlineButton:FC<OutlineButtonProps> = ({className, color, text, ...props}) => {
  const buttonColor = color ? color : '';
  const styles = `outline-button ${buttonColor}`;
  return <button className={className ? `${styles} ${className}` : styles} {...props}>{text}</button>
}