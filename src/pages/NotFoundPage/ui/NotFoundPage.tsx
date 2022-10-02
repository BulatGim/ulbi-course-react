import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

interface INotFoundPageProps {
    className?: string
}

export const NotFoundPage:FC<INotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.NotFoundPage)}>
            {t('Страница не найдена')}
        </div>

    );
};
