import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss"
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ILangSwitcherProps {
    className?: string
}

export const LangSwitcher:FC<ILangSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation();
    console.log(className)
    const toggle = ()=>{
        i18n.changeLanguage(i18n.language==="ru"?("en"):("ru"))
    }
    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(styles.LangSwitcher, {}, [className])} onClick={toggle}>
            {t("Русский")}
        </Button>
    );
};
