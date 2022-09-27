import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string
}

export const Sidebar:FC<ISidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button onClick={toggle}>TOGGLE</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
