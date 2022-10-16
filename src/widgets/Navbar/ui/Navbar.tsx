import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.Navbar)}>
            <div className={styles.links}>
                /
            </div>
        </div>
    );
};
