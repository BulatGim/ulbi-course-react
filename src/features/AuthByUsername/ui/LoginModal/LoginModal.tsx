import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: ()=>void;
}

export const LoginModal:FC<ILoginModalProps> = ({ className, onClose, isOpen }) => {
    const { t } = useTranslation();
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
