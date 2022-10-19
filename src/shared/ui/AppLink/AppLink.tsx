import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface IAppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}

export const AppLink:FC<IAppLinkProps> = (props) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;
    console.log(20000 * ((1 - 0.18) ** 2));
    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [styles[theme], className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
