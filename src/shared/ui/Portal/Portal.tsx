import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { createPortal } from 'react-dom';
import styles from './Portal.module.scss';

interface IPortalProps {
    children: ReactNode;
    element?:HTMLElement
}

export const Portal:FC<IPortalProps> = (props:IPortalProps) => {
    const {
        children,
        element = document.body,
    } = props;
    return createPortal(children, element);
};
