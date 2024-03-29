import { FC } from 'react';

interface TrashIconProps {
  className?: string
}

export const TrashIcon: FC<TrashIconProps> = ({ className }) => {
  return (
    <svg className={className} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
         viewBox="0 0 32 32">
      <path
        d="M25.291 5.313v2.688h-18.624v-2.688h4.625l1.375-1.313h6.625l1.375 1.313h4.625zM7.979 25.312v-15.999h15.999v15.999c0 1.438-1.25 2.688-2.688 2.688h-10.625c-1.438 0-2.688-1.25-2.688-2.688h0.001z"></path>
    </svg>
  )
}