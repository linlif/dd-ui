
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Menu, { IMenuProps } from './menu';
import MenuItem, { IMenuItemsProps } from './menuItem';
import Submenu, { ISubmenuProps } from './subMenu';
import Icon from '../Icon'

import '../../styles/index.scss';


export default {
    title: 'dd-ui/Menu',
    component: Menu,
    argTypes: {
        // backgroundColor: { control: 'color' },
        // size: { control: ButtonSize }
    },
} as Meta;


export type MenuType = Partial<IMenuProps & IMenuItemsProps & ISubmenuProps>

const Template: Story<MenuType> = (args) => (
    <>
        <h3>水平菜单</h3>
        <Menu defaultIndex={'0'} {...args}>
            <MenuItem {...args} icon={<Icon icon='inbox' />}>
                menu-item1
              </MenuItem>
            <MenuItem icon={<Icon icon='cog' />}>
                menu-item2
              </MenuItem>
            <MenuItem disabled icon={<Icon icon='dice-d6' />}>
                menu-item3
              </MenuItem>
        </Menu>
    </>
);
export const horizontalMenu = Template.bind({});
horizontalMenu.args = {
    mode: 'horizontal',
    onSelect: (e) => { console.log('onSelect', e) }
};




const Template1: Story<IMenuProps> = (args) => (
    <>
        <h3>垂直菜单</h3>
        <Menu defaultIndex={'0'} {...args}>
            <MenuItem {...args} icon={<Icon icon='bell' />}>
                menu-item1
              </MenuItem>
            <MenuItem icon={<Icon icon='clock' />}>
                menu-item2
              </MenuItem>
            <MenuItem disabled icon={<Icon icon='calendar' />}>
                menu-item3
              </MenuItem>
        </Menu>
    </>
);
export const verticalSubMenu = Template1.bind({});
verticalSubMenu.args = {
    mode: 'vertical',
    onSelect: (e) => { console.log('onSelect--verticalSubMenu', e) }
};



const Template2: Story<IMenuProps> = (args) => (
    <>
        <h3>水平子菜单</h3>
        <Menu defaultIndex={'0'} {...args} defaultOpenSubMenus={['2']}>
            <MenuItem icon={<Icon icon='database' />}>
                menu-item1
            </MenuItem>
            <MenuItem icon={<Icon icon='table' />}>
                menu-item2
            </MenuItem>
            <Submenu title='subMenu' icon={<Icon icon='stopwatch' />}>
                <MenuItem >option1</MenuItem>
                <MenuItem >option2</MenuItem>
                <MenuItem >option3</MenuItem>
            </Submenu>
        </Menu>
    </>
);
export const hozizontalMenu = Template2.bind({});
hozizontalMenu.args = {
    mode: 'horizontal',
    onSelect: (e) => { console.log('onSelect--hozizontalMenu', e) }
};


const Template3: Story<IMenuProps> = (args) => (
    <>
        <h3>垂直子菜单</h3>
        <Menu defaultIndex={'0'} {...args} style={{ width: 256 }}>
            <Submenu title='subMenu' icon={<Icon icon='atom' />}>
                <MenuItem >111</MenuItem>
                <MenuItem >222</MenuItem>
                <MenuItem >333</MenuItem>
            </Submenu>
            <Submenu title='subMenu' icon={<Icon icon='compass' />}>
                <MenuItem >444</MenuItem>
                <MenuItem >555</MenuItem>
                <MenuItem >666</MenuItem>
            </Submenu>
            <Submenu title='subMenu' icon={<Icon icon='apple-alt' />}>
                <MenuItem >777</MenuItem>
                <MenuItem >888</MenuItem>
                <MenuItem >999</MenuItem>
            </Submenu>
        </Menu>
    </>
);
export const verticalMenu = Template3.bind({});
verticalMenu.args = {
    mode: 'vertical',
    onSelect: (e) => { console.log('onSelect--verticalMenu', e) }
};
