
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './button';

export default {
    title: 'dd-ui/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;



const TemplateType: Story<ButtonProps> = (args) => {
    return (
        <>
            <div style={{ marginTop: 20 }}>
                <div style={{ margin: `10px 0` }}><h1>不同状态的按钮</h1></div>
                <Button {...args} btnType='default'>Default</Button>
                <Button {...args} btnType='primary'>Primary</Button>
                <Button {...args} btnType='danger'>Danger</Button>
                <Button {...args} btnType='dash'>Dashed</Button>
                <Button {...args} btnType='link'>Link</Button>
            </div>
        </>
    )
};

export const buttonType = TemplateType.bind({});
buttonType.args = {
    btnType: 'primary'
};

const Template: Story<ButtonProps> = (args) => {
    return (
        <>
            <div>
                <div style={{ margin: `10px 0` }}><h1>行内（inline-block）按钮</h1></div>
                <Button {...args} >inline-block</Button>
                <Button {...args} btnType="dash">inline-block</Button>
            </div>
            <div style={{ marginTop: 40 }}>
                <div style={{ margin: `10px 0` }}><h1>块级（block）按钮</h1></div>
                <Button {...args} block>Block</Button>
                <Button {...args} block btnType="dash">block</Button>
            </div>
        </>
    )
};

export const buttonBlock = Template.bind({});
buttonBlock.args = {
    btnType: 'primary'
};


const Template0: Story<ButtonProps> = (args) => (
    <>
        <div>
            <div style={{ margin: `10px 0` }}><h1>不同尺寸的按钮</h1></div>
            <Button {...args} size='lg'>Large</Button>
            <Button {...args} size='md'>Medium</Button>
            <Button {...args} size='sm' >Small</Button>
        </div>
    </>
);

export const buttonSize = Template0.bind({});
buttonSize.args = {
    btnType: 'primary',
};

const Template1: Story<ButtonProps> = (args) => (
    <>
        <div style={{ marginTop: 20 }}>
            <div style={{ margin: `10px 0` }}><h1>带Icon的按钮</h1></div>
            <Button {...args} size='lg' icon='search'>Search</Button>
            <Button {...args} size='md' icon='download'>Download</Button>
            <Button {...args} size='sm' icon='upload'>Upload</Button>
        </div>
        <div style={{ marginTop: 20 }}>
            <div style={{ margin: `10px 0` }}><h1>只有Icon的按钮</h1></div>
            <Button {...args} size='lg' icon='download' />
            <Button {...args} size='md' icon='download' />
            <Button {...args} size='sm' icon='download' />
        </div>
    </>
);

export const buttonIcon = Template1.bind({});
buttonIcon.args = {
    btnType: 'primary',
};

const Template2: Story<ButtonProps> = (args) => (
    <>
        <div style={{ marginTop: 20 }}>
            <div style={{ margin: `10px 0` }}><h1>微圆角按钮</h1></div>
            <Button {...args} btnType='primary' size="lg" shape="normal" icon="search">Search</Button>
            <Button {...args} btnType='primary' size="md" icon="search">Search</Button>
            <Button {...args} btnType='primary' size="sm" icon="search">Search</Button>
        </div>
        <div style={{ marginTop: 20 }}>
            <div style={{ margin: `10px 0` }}><h1>大圆角按钮</h1></div>
            <Button {...args} btnType='primary' size="lg" shape="round" icon="search">Search</Button>
            <Button {...args} btnType='primary' size="md" shape="round" icon="search">Search</Button>
            <Button {...args} btnType='primary' size="sm" shape="round" icon="search">Search</Button>
        </div>
        <div style={{ marginTop: 20 }}>
            <div style={{ margin: `10px 0` }}><h1>圆形按钮</h1></div>
            <Button {...args} btnType='primary' size="lg" shape="circle" icon="search"></Button>
            <Button {...args} btnType='primary' size="md" shape="circle" icon="search"></Button>
            <Button {...args} btnType='primary' size="sm" shape="circle" icon="search"></Button>
        </div>
    </>
);

export const buttonShape = Template2.bind({});
buttonShape.args = {
    size: 'md'
};

const Template3: Story<ButtonProps> = (args) => {
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [loading3, setLoading3] = useState(false)
    const [loading4, setLoading4] = useState(false)
    const [loading5, setLoading5] = useState(false)

    function handleClicked1() {
        setLoading1(true)
        setTimeout(() => {
            setLoading1(false)
        }, 2000);
    }
    function handleClicked2() {
        setLoading2(true)
        setTimeout(() => {
            setLoading2(false)
        }, 2000);
    }
    function handleClicked3() {
        setLoading3(true)
        setTimeout(() => {
            setLoading3(false)
        }, 2000);
    }
    function handleClicked4() {
        setLoading4(true)
        setTimeout(() => {
            setLoading4(false)
        }, 2000);
    }
    function handleClicked5() {
        setLoading5(true)
        setTimeout(() => {
            setLoading5(false)
        }, 2000);
    }

    return (
        <>
            <div>
                <div style={{ marginBottom: 10 }}>
                    <h1>loading状态</h1>
                </div>
                <Button {...args} btnType='default' loading>Default</Button>
                <Button {...args} btnType='primary' loading>Primary</Button>
                <Button {...args} btnType='danger' loading>Danger</Button>
                <Button {...args} btnType='dash' loading>Dashed</Button>
                <Button {...args} btnType='link' loading>Link</Button>
            </div>
            <div style={{ marginTop: 20 }}>
                <div style={{ marginBottom: 10 }}>
                    <h1>点击按钮触发loading</h1>
                </div>
                <Button {...args} btnType='default' loading={loading1} onClick={handleClicked1}>{loading1 ? 'loading' : 'Click Me!'}</Button>
                <Button {...args} btnType='primary' loading={loading2} onClick={handleClicked2}>{loading2 ? 'loading' : 'Click Me!'}</Button>
                <Button {...args} btnType='danger' loading={loading3} onClick={handleClicked3}>{loading3 ? 'loading' : 'Click Me!'}</Button>
                <Button {...args} btnType='dash' loading={loading4} onClick={handleClicked4}>{loading4 ? 'loading' : 'Click Me!'}</Button>
                <Button {...args} btnType='link' loading={loading5} onClick={handleClicked5}>{loading5 ? 'loading' : 'Click Me!'}</Button>
            </div>
        </>
    );
}

export const buttonLoading = Template3.bind({});
buttonLoading.args = {
    size: 'md'
};
