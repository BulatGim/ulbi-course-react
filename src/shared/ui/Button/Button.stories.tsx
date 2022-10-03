import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'Text',
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearLight = Template.bind({});
ClearLight.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
ClearLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedLight = Template.bind({});
OutlinedLight.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlinedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
