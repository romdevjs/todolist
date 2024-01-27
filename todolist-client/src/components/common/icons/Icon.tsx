import { FC } from 'react';
import { PlusIcon } from './PlusIcon';
import { IconType } from '../../../types/IconType';
import { TrashIcon } from './TrashIcon';

interface IconProps {
  icon?: IconType
  className?:string
}

export const Icon: FC<IconProps> = ({ icon, className }) => {
  switch (icon) {
    case 'plus':
      return <PlusIcon className={className}/>;
    case 'trash':
      return <TrashIcon className={className}/>
    default:
      return <PlusIcon className={className}/>;
  }
}