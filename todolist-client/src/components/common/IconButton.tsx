import { ButtonHTMLAttributes, FC } from 'react';
import { Color } from '../../types/Color';
import { IconType } from '../../types/IconType';
import { Icon } from './icons/Icon';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color
  icon?: IconType
}

export const IconButton: FC<IconButtonProps> = ({ color, icon, className, ...props }) => {
  const modification = color ? `icon-button_${color}` : '';
  const styles = `icon-button ${modification}`;
  return (
    <button {...props} className={className ? `${styles} ${className}` : styles}>
      <Icon icon={icon}/>
      <div/>
    </button>
  )
}