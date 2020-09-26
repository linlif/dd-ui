
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonSize, ButtonType, ButtonProps } from './button';


export default {
    title: 'dd-ui/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        // size: { control: ButtonSize }
    },
} as Meta;

const Template0: Story<ButtonProps> = (args) => (<Button {...args} >Primary</Button>);

const Template: Story<ButtonProps> = (args) => (
    <>
        <Button {...args} size={ButtonSize.Large}>Large</Button>
        <Button {...args} size={ButtonSize.Medium} >Medium</Button>
        <Button {...args} size={ButtonSize.Small} >Small</Button>
    </>
);
const Template2: Story<ButtonProps> = (args) => (
    <>
        <Button {...args} btnType={ButtonType.Default}>Default button</Button>
        <Button {...args} btnType={ButtonType.Primary}>Primary button</Button>
        <Button {...args} btnType={ButtonType.Danger}>Danger button</Button>
        <Button {...args} btnType={ButtonType.Dashed}>Dashed button</Button>
        <Button {...args} btnType={ButtonType.Link}>Link button</Button>
    </>
);


export const buttonPrimary = Template0.bind({});
buttonPrimary.args = {
    btnType: ButtonType.Primary,
};

export const buttonSize = Template.bind({});
buttonSize.args = {
    btnType: ButtonType.Primary,
};

export const buttonType = Template2.bind({});
buttonType.args = {
    size: ButtonSize.Medium
};
