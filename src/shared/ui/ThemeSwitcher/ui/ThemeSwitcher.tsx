import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss"
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkTheme from "shared/assets/icons/theme-dark.svg"
import LightTheme from "shared/assets/icons/theme-light.svg"

interface IThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher:FC<IThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
                onClick={toggleTheme}
        >
            {theme === Theme.DARK?<DarkTheme/>:<LightTheme/>}
        </Button>
    );
};