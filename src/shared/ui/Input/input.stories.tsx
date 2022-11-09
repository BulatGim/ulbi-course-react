import { ComponentMeta, ComponentStory } from '@storybook/react';
// eslint-disable-next-line import/order
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from '../Input/Input';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    placeholder: 'some placeholder',
    value: 'some value',
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    placeholder: 'some placeholder',
    value: 'some value',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
