import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/ui/BugButton/BugButton';
import { Counter } from 'entities/Counter';

function MainPage() {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная страница')}
            <BugButton />
            <Counter />
        </div>
    );
}

export default MainPage;
