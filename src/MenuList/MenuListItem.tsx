import React, { FC, ReactNode } from 'react'
import MuiMenuItem from '@material-ui/core/MenuItem'
import { useMenu } from './MenuList'

export type MenuListItemProps = {
  children: ReactNode
  onClick?: () => void
}

export const MenuListItem: FC<MenuListItemProps> = ({ onClick, children }) => {
  const menu = useMenu()

  const buttonClick = (event: React.MouseEvent<EventTarget>) => {
    // Close Menu
    menu.onClose(event)

    if (!!onClick) onClick()
  }

  return <MuiMenuItem onClick={buttonClick}>{children}</MuiMenuItem>
}
