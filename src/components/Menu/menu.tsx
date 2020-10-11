import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { IMenuItemsProps } from './menuItem'

export type MenuMode = 'horizontal' | 'vertical'
export type SelectCallback = (SelectedIndex: string) => void;

export interface IMenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    defaultOpenSubMenus?: string[] // 默认展开的子菜单
}

export interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[] // 默认展开的子菜单
}

export const MenuContent = createContext<IMenuContext>({ index: "0" })

const Menu: React.FC<IMenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus } = props
    const classes = classNames('dd-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })
    const [curActive, setActive] = useState(defaultIndex)
    const handleClick = (index: string) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: curActive ? curActive : "0",
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
    }

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<IMenuItemsProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString(),
                    deeps: 1
                })
            } else {
                console.error('Warning: Menu has a child which is not a MenuItem component')
            }
        })
    }

    return (
        <ul className={classes} style={{ ...style}}>
            <MenuContent.Provider value={passedContext}>
                {renderChildren()}
            </MenuContent.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: "0",
    mode: 'horizontal',
    defaultOpenSubMenus: []
}

export default Menu



