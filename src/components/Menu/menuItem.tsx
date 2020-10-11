import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContent } from './menu'
import { icon } from '@fortawesome/fontawesome-svg-core'

export type MenuMode = 'horizontal' | 'vertical'

export interface IMenuItemsProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    deeps?: number;
    icon?: React.ReactElement | React.FC
}

const MenuItem: React.FC<IMenuItemsProps> = (props) => {
    const { index, className, style, disabled, children, deeps = 1, icon: Icon } = props
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
        <li className={classes} style={context.mode === 'vertical' ? { ...style, paddingLeft: deeps * 8 + 24, paddingRight: deeps * 8 + 24 } : { ...style }} onClick={disabled ? () => { } : handleClick} data-idx={index}>
            {typeof Icon === 'function' ? <Icon /> : Icon}
            <span style={Icon ? { marginLeft: 5 } : {}}>{children}</span>
        </li>
    )
}

MenuItem.defaultProps = {
}

MenuItem.displayName = 'MenuItem'


export default MenuItem



