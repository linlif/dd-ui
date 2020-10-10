import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import Icon, { IconProps } from '../Icon'

// export enum ButtonSize {
//     Medium = 'md',
//     Large = 'lg',
//     Small = 'sm'
// }
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link',
//     Dashed = 'dash'
// }

export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'dash'
export type ButtonSize = 'lg' | 'md' | 'sm'
export type Shape = 'circle' | 'round' | 'normal'

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: ReactNode,
    href?: string,
    backgroundColor?: string,
    onClick: () => void,
    onMouseDown: () => void,
    onMouseUp: () => void,
    loading?: boolean,
    icon?: IconProps,
    block?: boolean | string,
    shape?: Shape
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props) => {
    const [clicked, setClicked] = useState(false)

    let {
        btnType,
        className,
        size,
        disabled,
        children,
        href,
        backgroundColor,
        loading,
        icon,
        block,
        shape,
        onClick,
        ...restProps
    } = props

    // loading 时不能操作
    if (loading) {
        disabled = true
    }

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        [`btn-block`]: block,
        [`btn-inline`]: !block,
        [`btn-circle`]: shape === 'circle' && !children,
        [`btn-round`]: shape === 'round',
        [`btn-icon-only`]: !children,
        ['btn-clicked']: clicked,
        'disabled': btnType === 'link' && disabled
    })

    function handleClick() {
        let timer
        onClick && onClick()
        setClicked(true)
        clearTimeout(timer)
        timer = setTimeout(() => {
            setClicked(false)
        }, 600);
    }

    if (btnType === 'link' && !disabled) {
        return (
            <a
                className={classes}
                href={href}
                onClick={onClick}
                {...restProps}
            >
                {
                    (icon || loading) ? <Icon icon={loading ? "spinner" : icon} spin={loading} /> : ''
                }
                {
                    children && (
                        <span style={{ marginLeft: 5 }}>
                            {children}
                        </span>
                    )
                }
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                onClick={handleClick}
                style={{ backgroundColor }}
                {...restProps}
            >
                {
                    (icon || loading) ? <Icon icon={loading ? "spinner" : icon} spin={loading} /> : ''
                }
                {
                    children && (
                        <span style={{ marginLeft: 5 }}>
                            {children}
                        </span>
                    )
                }
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: 'primary',
    size: 'md'
}

export default Button;
