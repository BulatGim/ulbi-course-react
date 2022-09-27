import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => (
    <div className={classNames(styles.Navbar)}>
        <div className={styles.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to="/">Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О нас</AppLink>
        </div>
    </div>
);
