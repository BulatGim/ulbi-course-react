import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

export const BugButton:FC = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);
    return (
        <Button onClick={throwError}>
            <p>{t('Бросить ошибку')}</p>
        </Button>
    );
};
