import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface INavbarProps {
    className?: string
}

export const Navbar: FC<INavbarProps> = ({className}) => {
    return (
        <div className={classNames(styles.Navbar,)}>
            <ThemeSwitcher/>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to={"/"}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>О нас</AppLink>
            </div>
        </div>
    );
};

