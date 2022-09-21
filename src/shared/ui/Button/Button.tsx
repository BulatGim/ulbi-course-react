import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss"

export enum ButtonTheme {
    CLEAR = "clear"
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonTheme;
}

export const Button:FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        onClick,
        theme,
        ...otherProps
    } = props
    return (
        <button
            className={classNames(styles.Button, {}, [className, styles[ButtonTheme.CLEAR]])}
                onClick={onClick}
                {...otherProps}>
            {children}
        </button>
    );
};
