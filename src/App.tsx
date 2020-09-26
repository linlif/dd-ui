import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import Submenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'

// https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
    const handleSelect = (index: string) => {
        console.log(index)
    }
    return (
        <div className="App">
            {/* <FontAwesomeIcon icon={faCoffee} size="10x"/> */}
            {/* <Icon icon='coffee' size='6x' theme='danger'/> */}
            <section className="components-demo">
                <h3>按钮类型</h3>
                <Button btnType={ButtonType.Primary}>Primary</Button>
                <Button onClick={() => alert(111)} btnType={ButtonType.Default}>Default</Button>
                <Button btnType={ButtonType.Danger}>Danger</Button>
                <Button btnType={ButtonType.Dashed}>Dashed</Button>
                <Button btnType={ButtonType.Link} href="https:www.baidu.com" target="_blank">Link</Button>
                <div>
                    <h3>按钮大小</h3>
                    <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large</Button>
                    <Button btnType={ButtonType.Primary} size={ButtonSize.Medium}>Medium</Button>
                    <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small</Button>
                </div>
                <div>
                    <h3>按钮状态</h3>
                    <Button btnType={ButtonType.Primary} disabled >Primary-disabled</Button>
                    <Button btnType={ButtonType.Default} disabled >Default-disabled</Button>
                    <Button btnType={ButtonType.Danger} disabled >Danger-disabled</Button>
                    <Button btnType={ButtonType.Dashed} disabled >Dashed-disabled</Button>
                    <Button btnType={ButtonType.Link} disabled>Link-disabled</Button>
                </div>
            </section>
            <section className="components-demo">
                <div>
                    <h3>水平菜单</h3>
                    <Menu defaultIndex={'0'} onSelect={handleSelect}>
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
                </div>
                <div>
                    <h3>垂直菜单</h3>
                    <Menu defaultIndex={'0'} onSelect={handleSelect} mode='vertical'>
                        <MenuItem >
                            menu-item1
                    </MenuItem>
                        <MenuItem >
                            menu-item2
                    </MenuItem>
                        <MenuItem disabled>
                            menu-item3
                    </MenuItem>
                        <li>sss</li>
                    </Menu>
                </div>
                <div>
                    <h3>水平子菜单</h3>
                    <Menu defaultIndex={'0'} onSelect={handleSelect} mode='horizontal' defaultOpenSubMenus={['2']}>
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
                </div>
                <div>
                    <h3>垂直子菜单</h3>
                    <Menu defaultIndex={'0'} onSelect={handleSelect} mode='vertical'>
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
                </div>
            </section>
        </div>
    );
}

export default App;
