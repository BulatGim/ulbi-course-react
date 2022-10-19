import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);
    return (
        <div className={classNames(styles.Navbar)}>
            <div className={styles.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    {/* eslint-disable-next-line i18next/no-literal-string,react/no-unescaped-entities,max-len */}
                    <p>do'sfmb s;fkbn s;obnsf s;obnsm;d a'dmvs;akn  a;dkvenskni sz.brlnz.dlj sz.urbvjz,  .zrsbvz, rvlzsbnr.ln </p>
                </Modal>
            </div>
        </div>
    );
};
