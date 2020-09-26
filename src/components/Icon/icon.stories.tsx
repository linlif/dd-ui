
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon, { IconProps, ThemeProps } from './icon';

export default {
    title: 'dd-ui/Icon',
    component: Icon,
    argTypes: {
        // backgroundColor: { control: 'color' },
        // size: { control: ButtonSize }
    },
} as Meta;

const Template: Story<IconProps> = (args) => (
    <>
        <Icon {...args} />
        <Icon {...args} />
        <Icon {...args} />
    </>
);

export const buttonSize = Template.bind({});
buttonSize.args = {
    theme: 'primary'
};

