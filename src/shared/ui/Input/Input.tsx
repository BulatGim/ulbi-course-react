import {
    ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputAttr = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputAttr{
    className?: string;
    value?: string;
    onChange?: (value: string)=>void
    autoFocus?:boolean;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props:IInputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const [isFocused, setIsFocused] = useState(false);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(styles.inputWrapper)}>
            {placeholder
                && (
                    <div>
                        {`${placeholder}>`}
                    </div>
                )}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={styles.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused
                    && (
                        <span
                            className={styles.caret}
                            style={{ left: `${caretPosition * 9}px` }}
                        />
                    )}
            </div>

        </div>
    );
});
