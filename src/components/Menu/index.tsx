import { FC } from 'react'

import Menu, { IMenuProps } from './menu'
import Submenu, { ISubmenuProps } from './subMenu'
import MenuItem, { IMenuItemsProps } from './menuItem'

export type IMenuComponent = FC<IMenuProps> & {
    Item: FC<IMenuItemsProps>
    SubMenu: FC<ISubmenuProps>
}

const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = Submenu

export default TransMenu