import { ComponentMeta, ComponentStory } from '@storybook/react';
// eslint-disable-next-line import/order
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];
