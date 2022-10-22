import { FC, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slices/CounterSlice';

interface ICounterProps {

}

export const Counter:FC<ICounterProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const counterValue = useSelector(getCounterValue);

    const increment = useCallback(() => {
        dispatch(counterActions.increment());
    }, [dispatch]);

    const decrement = useCallback(() => {
        dispatch(counterActions.decrement());
    }, [dispatch]);
    return (
        <div data-testid="counter">
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
