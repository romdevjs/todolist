import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  circle?: boolean
  color?: Color
  variant?:Variant
}

type Color = 'primary' | 'red';
type Variant = 'add' | 'delete';

export const Button: FC<ButtonProps> = ({ variant, color, circle, ...props }) => {
  const buttonColor: Color = color ? color : 'primary';
  const buttonCircle = circle ? 'circle' : '';
  const className = `button ${buttonColor} ${buttonCircle}`;

  return (
    <button className={className} {...props}>
      {(!variant || variant === 'add') && <>&#43;</>}
      {variant === 'delete' && <>&#10799;</>}
    </button>
  )
}