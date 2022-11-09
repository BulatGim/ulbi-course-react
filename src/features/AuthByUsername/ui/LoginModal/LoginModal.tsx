import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: ()=>void;
}

export const LoginModal:FC<ILoginModalProps> = ({ className, onClose, isOpen }) => {
    const { t } = useTranslation();
    return (
        <Modal
            className={classNames(styles.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
