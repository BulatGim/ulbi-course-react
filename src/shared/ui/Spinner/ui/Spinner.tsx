import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Spinner.module.scss';

export const Spinner:FC = () => (
    <div className={classNames(styles.spinner)} />
);
