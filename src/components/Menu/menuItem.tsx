import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContent } from './menu'

type MenuMode = 'horizontal' | 'vertical'

export interface IMenuItemsProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem: React.FC<IMenuItemsProps> = (props) => {
    const { index, className, style, disabled, children } = props
    const context = useContext(MenuContent)
    const classes = classNames('dd-menuitem', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })
    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index)
        }
    }
    return (
        <li className={classes} style={{ ...style }} onClick={handleClick} data-idx={index}>
            {children}
        </li>
    )
}

MenuItem.defaultProps = {
}

MenuItem.displayName = 'MenuItem'


export default MenuItem



