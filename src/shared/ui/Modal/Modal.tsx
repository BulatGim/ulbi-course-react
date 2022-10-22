import {
    FC, ReactNode, MouseEvent, useState, useRef, useEffect, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Modal.module.scss';

interface IModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?:boolean;
    onClose?:()=>void;
}

export const Modal:FC<IModalProps> = (props:IModalProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;

    const ANIMATION_DELAY = 300;

    const { theme } = useTheme();

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const contentClick = (e:MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div
                        className={
                            classNames(
                                styles.content,
                                { [styles.isOpened]: isOpen },
                                [],
                            )
                        }
                        onClick={(e) => contentClick(e)}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
