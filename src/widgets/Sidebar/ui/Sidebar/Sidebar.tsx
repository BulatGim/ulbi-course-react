import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

interface ISidebarProps {
    className?: string
}

export const Sidebar:FC<ISidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
      setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]:collapsed}, [className])}>
            <button onClick={toggle}>TOGGLE</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    );
};
