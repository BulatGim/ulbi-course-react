import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string
}

export const LoginForm:FC<ILoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.LoginForm)}>
            <Input
                autoFocus
                type="text"
                className={styles.input}
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                className={styles.input}
                placeholder={t('Введите пароль')}
            />
            <Button className={styles.loginBtn}>
                <p>{t('Отправить')}</p>
            </Button>
        </div>
    );
};
