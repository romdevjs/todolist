import { ButtonHTMLAttributes, FC } from 'react';
import { Color } from '../../types/Color';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color
  text:string
  isActive?:boolean
}


export const Button: FC<ButtonProps> = ({ className, color, text,isActive, ...props }) => {
  const modification = color ? `btn_${color} button_${color}` : '';
  const activeClass = isActive ? 'button_active' : '';
  const styles = `btn button ${modification} ${activeClass}`;

  return (
    <button className={className ? `${styles} ${className}` : styles} {...props}>
      <span className="button__wrapper">
        <span className="button__text">{text}</span>
        <span className="btn__background button__background"/>
      </span>
    </button>
  )
}