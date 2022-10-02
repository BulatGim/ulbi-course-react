import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Spinner } from 'shared/ui/Spinner';
import styles from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string
}

export const PageLoader:FC<IPageLoaderProps> = ({ className }) => (
    <div className={classNames(styles.PageLoader)}>
        <Spinner />
    </div>
);
