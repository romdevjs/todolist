import { FC } from 'react';
import { PlusIcon } from './PlusIcon';
import { IconType } from '../../../types/IconType';
import { TrashIcon } from './TrashIcon';

interface IconProps {
  icon?: IconType
}

export const Icon: FC<IconProps> = ({ icon }) => {
  switch (icon) {
    case 'plus':
      return <PlusIcon/>;
    case 'trash':
      return <TrashIcon/>
    default:
      return <PlusIcon/>;
  }
}