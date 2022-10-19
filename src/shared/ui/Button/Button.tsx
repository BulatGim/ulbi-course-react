import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize
}

export const Button:FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        onClick,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [className, styles[theme]])}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
