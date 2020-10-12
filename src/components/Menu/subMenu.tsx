import React, { useContext, useState } from 'react'
import { MenuContent } from './menu'
import classNames from 'classnames'
import Icon from '../Icon/icon'
import { CSSTransition } from 'react-transition-group'
import { relative } from 'path'

export interface ISubmenuProps {
    index?: string;
    title?: string;
    className?: string;
    deeps?: number;
    icon?: React.ReactElement | React.FC
}

const SubMenu: React.FC<ISubmenuProps> = ({ index, title, className, children, deeps: propDeeps = 1, icon: IconProp }) => {
    const context = useContext(MenuContent)
    const opendedSubMenus = context.defaultOpenSubMenus as Array<string>
    const isOpen = (index && context.mode === 'vertical') ? opendedSubMenus.includes(index) : false
    const [subMenuOpen, setOpen] = useState(isOpen)
    const classes = classNames(
        'dd-menuitem submenu-item',
        className,
        {
            'is-active': context.index.split('-')[0] === index,
            'submenu-open': subMenuOpen
        })
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!subMenuOpen)
        console.log('click', !subMenuOpen)
    }
    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 200);
    }

    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {}

    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
            // setOpen(true)
        },
        onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
            // setOpen(false)
        }
    } : {}

    const renderChildren = () => {
        const subMenuClassNames = classNames({
            'dd-submenu-horizontal': context.mode === 'horizontal'
        }, {
            'dd-submenu-vertical': context.mode !== 'horizontal'
        }, {
            'submenu-open': subMenuOpen,
        })
        const childrenComponent = React.Children.map(children, (child, idx) => {
            const childElement = child as React.FunctionComponentElement<ISubmenuProps>

            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${idx}`,
                    deeps: 2
                })
            } else {
                console.error('Warning: SubMenu has a child which is not a MenuItem')
            }
        })
        return (
            <CSSTransition
                in={subMenuOpen}
                timeout={600}
                classNames='slide-in-top'
                appear
            // unmountOnExit
            >
                <ul className={subMenuClassNames} >
                    {childrenComponent}
                </ul>
            </CSSTransition>
        )
    }
    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" onClick={handleClick} {...clickEvents} style={context.mode === 'vertical' ? { position: 'relative', paddingLeft: propDeeps * 8 + 24, paddingRight: propDeeps * 8 + 24 } : { position: 'relative' }} >
                {typeof IconProp === 'function' ? <IconProp /> : IconProp}
                <span style={IconProp ? { marginLeft: 5 } : {}}>{title}</span>
                {/* <Icon icon='chevron-down' style={{ marginLeft: 5, position: 'absolute', right: 16 }} /> */}
                <i className="dd-submenu-arrow "></i>
            </div>
            { renderChildren()}
        </li >
    )
}

SubMenu.defaultProps = {
}

SubMenu.displayName = 'SubMenu'


export default SubMenu



