import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutLink from 'shared/assets/icons/about.svg';
import MainLink from 'shared/assets/icons/main.svg';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string
}

export const Sidebar:FC<ISidebarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
            data-testid="sidebar"
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={toggle}
                className={styles.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '<' : '>'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    className={styles.link}
                    to={RoutePath.main}
                >
                    <MainLink className={styles.icon} />
                    <p className={styles.description}>{t('Главная')}</p>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    className={styles.link}
                    to={RoutePath.about}
                >
                    <AboutLink className={styles.icon} />
                    <p className={styles.description}>{t('О нас')}</p>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang} />
            </div>
        </div>
    );
};
