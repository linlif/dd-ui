
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Menu, { IMenuProps } from './menu';
import MenuItem from './menuItem';
import Submenu from './subMenu';
import '../../styles/index.scss';

export default {
    title: 'dd-ui/Menu',
    component: Menu,
    argTypes: {
        // backgroundColor: { control: 'color' },
        // size: { control: ButtonSize }
    },
} as Meta;


const Template: Story<IMenuProps> = (args) => (
    <>
        <h3>水平菜单</h3>
        <Menu defaultIndex={'0'} {...args}>
            <MenuItem>
                menu-item1
              </MenuItem>
            <MenuItem>
                menu-item2
              </MenuItem>
            <MenuItem disabled>
                menu-item3
              </MenuItem>
        </Menu>
    </>
);
export const horizontalMenu = Template.bind({});
horizontalMenu.args = {
    mode: 'horizontal'
};




const Template1: Story<IMenuProps> = (args) => (
    <>
        <h3>垂直菜单</h3>
        <Menu defaultIndex={'0'} {...args}>
            <MenuItem {...args}>
                menu-item1
              </MenuItem>
            <MenuItem>
                menu-item2
              </MenuItem>
            <MenuItem disabled>
                menu-item3
              </MenuItem>
        </Menu>
    </>
);
export const verticalSubMenu = Template1.bind({});
verticalSubMenu.args = {
    mode: 'vertical'
};



const Template2: Story<IMenuProps> = (args) => (
    <>
        <h3>水平子菜单</h3>
        <Menu defaultIndex={'0'} {...args} defaultOpenSubMenus={['2']}>
            <MenuItem >
                menu-item1
                    </MenuItem>
            <MenuItem >
                menu-item2
                    </MenuItem>
            <Submenu title='subMenu'>
                <MenuItem >111</MenuItem>
                <MenuItem >222</MenuItem>
                <MenuItem >333</MenuItem>
            </Submenu>
        </Menu>
    </>
);
export const hozizontalMenu = Template2.bind({});
hozizontalMenu.args = {
    mode: 'horizontal'
};


const Template3: Story<IMenuProps> = (args) => (
    <>
        <h3>垂直子菜单</h3>
        <Menu defaultIndex={'0'} {...args}>
            <MenuItem >
                menu-item1
                    </MenuItem>
            <MenuItem >
                menu-item2
                    </MenuItem>
            <Submenu title='subMenu'>
                <MenuItem >111</MenuItem>
                <MenuItem >222</MenuItem>
                <MenuItem >333</MenuItem>
            </Submenu>
        </Menu>
    </>
);
export const verticalMenu = Template3.bind({});
verticalMenu.args = {
    mode: 'vertical'
};
