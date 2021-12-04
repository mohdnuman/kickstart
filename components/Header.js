import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from '../routes';

class Header extends Component {
    render() {
        return (
            <Menu style={{marginTop:10}}>
                <Link to="/">
                    <a>
                        <Menu.Item>
                            CrowdCoin
                        </Menu.Item>
                    </a>
                </Link>
                <Menu.Menu position="right">
                    <Link to="/">
                        <a>
                            <Menu.Item>
                                Campaigns
                            </Menu.Item>
                        </a>
                    </Link>
                    <Link to='/campaigns/new'>
                        <a>
                            <Menu.Item>
                                +
                            </Menu.Item>
                        </a>
                    </Link>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;