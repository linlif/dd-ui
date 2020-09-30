
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

const Template1: Story<IconProps> = (args) => (
    <div style={{ margin: '0 20px' }}>
        <Icon {...args} icon="chevron-down" />
        <Icon {...args} icon="chevron-up" />
        <Icon {...args} icon="chevron-left" />
        <Icon {...args} icon="chevron-right" />
        <Icon {...args} icon="coffee" />
        <Icon {...args} icon="cog" />
        <Icon {...args} icon="dice-d6" />
        <Icon {...args} icon="divide" />
        <Icon {...args} icon="greater-than" />
        <Icon {...args} icon="laugh" />
        <Icon {...args} icon="laugh-beam" />
        <Icon {...args} icon="laugh-squint" />
        <Icon {...args} icon="laugh-wink" />
        <Icon {...args} icon="meh" />
        <Icon {...args} icon="meh-blank" />
        <Icon {...args} icon="meh-rolling-eyes" />
        <div style={{ marginTop: 30 }}>
            {`更多图标>>`}
            <a href="https://fontawesome.com/icons?d=gallery&s=solid&m=free" target="_blank">{`请点击这里`}</a>
        </div>
    </div>
);

export const primary = Template1.bind({});
primary.args = {
    theme: 'info',
    size: '4x'
};


const Template2: Story<IconProps> = (args) => (
    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
        <div>
            <Icon {...args} size="xs" />
            <p>xs</p>
        </div>
        <div>
            <Icon {...args} size="sm" />
            <p>sm</p>
        </div>
        <div>
            <Icon {...args} size="1x" />
            <p>1x</p>
        </div>
        <div>
            <Icon {...args} size="lg" />
            <p>lg</p>
        </div>
        <div>
            <Icon {...args} size="2x" />
            <p>2x</p>
        </div>
        <div>
            <Icon {...args} size="3x" />
            <p>3x</p>
        </div>
        <div>
            <Icon {...args} size="4x" />
            <p>4x</p>
        </div>
        <div>
            <Icon {...args} size="5x" />
            <p>5x</p>
        </div>
        <div>
            <Icon {...args} size="6x" />
            <p>6x</p>
        </div>
        <div>
            <Icon {...args} size="7x" />
            <p>7x</p>
        </div>
        <div>
            <Icon {...args} size="8x" />
            <p>8x</p>
        </div>
        <div>
            <Icon {...args} size="9x" />
            <p>9x</p>
        </div>
        <div>
            <Icon {...args} size="10x" />
            <p>10x</p>
        </div>
    </div>
);

export const IconSize = Template2.bind({});
IconSize.args = {
    theme: 'info',
    icon: 'coffee'
};

const Template3: Story<IconProps> = (args) => (
    <div>
        <Icon {...args} style={{ color: 'red', fontSize: 50 }} />
        <p>fontSize:50;<br />color:'red'</p>
    </div>
)

export const IconStyle = Template3.bind({});
IconStyle.args = {
    icon: 'minus-circle'
};


const Template4: Story<IconProps> = (args) => (
    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ marginRight: 10 }}>
            <Icon {...args} />
            <p>normal</p>
        </div>
        <div style={{ marginRight: 10 }}>
            <Icon {...args} rotation={90} />
            <p>rotation:90</p>
        </div>
        <div style={{ marginRight: 10 }}>
            <Icon {...args} rotation={180} />
            <p>rotation:180</p>
        </div>
        <div style={{ marginRight: 10 }}>
            <Icon {...args} rotation={270} />
            <p>rotation:270</p>
        </div>
    </div>
)

export const IconRotation = Template4.bind({});
IconRotation.args = {
    icon: 'laugh-beam',
    size: '4x',
    theme: 'info'
};


const Template5: Story<IconProps> = (args) => (
    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ marginRight: 10 }}>
            <Icon {...args} flip="horizontal" />
            <p>flip:horizontal</p>
        </div>
        <div style={{ marginRight: 10 }}>
            <Icon {...args} flip="vertical" />
            <p>flip:vertical</p>
        </div>
        <div style={{ marginRight: 10 }}>
            <Icon {...args} flip="both" />
            <p>flip:both</p>
        </div>
    </div>
)

export const IconFlip = Template5.bind({});
IconFlip.args = {
    icon: 'home',
    size: '4x',
    theme: 'info'
};


const Template6: Story<IconProps> = (args) => (
    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ marginRight: 10 }}>
            <Icon {...args} spin />
            <p>animation:spin</p>
        </div>
        <div style={{ marginRight: 10 }}>
            <Icon {...args} pulse />
            <p>animation:pulse</p>
        </div>
    </div>
)

export const IconAnimation = Template6.bind({});
IconAnimation.args = {
    icon: 'spinner',
    size: '4x',
    theme: 'info'
};
