import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';
import i18n from '@lib/i18n';

const menuItems = [
  // { name: 'Home', to: '/', exact: true },
  // { name: 'Todos', to: '/todos' },
  // { name: 'GMO_Payment', to: '/gmo_payment'},
  { name: i18n.t('common:sidebar.home'), to: '/'},
];

class HeaderView extends Component {
  render() {
    return (
      <Header>
        <Menu size="massive">
          {menuItems.map(item => (
            <Menu.Item {...item} as={NavLink} key={item.name}>
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    );
  }
}

export default HeaderView;
