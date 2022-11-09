import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/ui/BugButton/BugButton';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
    const { t } = useTranslation('main');
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            {t('Главная страница')}
            <BugButton />
        </div>
    );
}

export default MainPage;
