import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    isOpen: true,
    children: 'dosfmb s;fkbn s;obnsf s;obnsm;d admvs;akn  a;dkvenskni sz.brlnz.dlj sz.urbvjz,  .zrsbvz, rvlzsbnr.ln',
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children: 'dosfmb s;fkbn s;obnsf s;obnsm;d admvs;akn  a;dkvenskni sz.brlnz.dlj sz.urbvjz,  .zrsbvz, rvlzsbnr.ln',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
