import { ButtonHTMLAttributes, FC } from 'react';
import { Color } from '../../types/Color';
import { IconType } from '../../types/IconType';
import { Icon } from './icons/Icon';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color
  icon?: IconType
}

export const IconButton: FC<IconButtonProps> = ({ color, icon, className, ...props }) => {
  const modification = color ? `btn_${color} icon-button_${color}` : '';
  const styles = `btn icon-button ${modification}`;

  return (
    <button {...props} className={className ? `${styles} ${className}` : styles}>
      <span className="icon-button__wrapper">
        <Icon className="icon-button__svg" icon={icon}/>
        <span className="icon-button__background btn__background"/>
      </span>
    </button>
  )
}