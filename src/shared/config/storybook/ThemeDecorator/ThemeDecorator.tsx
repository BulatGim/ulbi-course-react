import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme:Theme) => (story: ()=>Story) => (
    <div className={`app ${theme}`}>
        { story()}
    </div>
);
