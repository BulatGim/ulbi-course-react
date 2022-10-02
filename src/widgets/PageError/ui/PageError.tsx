import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface IPageErrorProps {
    className?: string
}

export const PageError:FC<IPageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadTab = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(styles.PageError)}>
            <p>{t('Возникла непредвиденная ошибка')}</p>
            <Button onClick={reloadTab}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
