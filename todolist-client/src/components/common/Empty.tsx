import { FC, ReactNode } from 'react';

interface EmptyComponents {
  children?: ReactNode
}

export const Empty: FC<EmptyComponents> = ({ children }) => {
  return (
    <div className="empty">
      {!children ? 'Empty' : children}
    </div>
  )
}